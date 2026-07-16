import { useState, useEffect, useCallback } from "react";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/dist/components/calcite-shell";
import { cpackages, work_name_to_field } from "./uniqueValues";
import MapPanel from "./components/MapPanel";
import AsOfDatePanel from "./components/AsOfDatePanel";
import { MyContext } from "./contexts/MyContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authenticate } from "./autho";

const queryClient = new QueryClient();

export function App(): React.JSX.Element {
  const [loggedInState, setLoggedInState] = useState<boolean>(false);

  useEffect(() => {
    authenticate(setLoggedInState, "imUuXLPRZcaMw4v1");
  }, []);

  const [cpackage, setCpackage] = useState<any>(cpackages[1]);
  const [component, setComponentNames] = useState<any>(
    work_name_to_field[0].name,
  );

  const updateCpackage = useCallback((newContractPackage: any) => {
    setCpackage(newContractPackage);
  }, []);

  const updateComponent = useCallback((newComponent: any) => {
    setComponentNames(newComponent);
  }, []);

  return (
    <>
      {loggedInState === true && (
        <div>
          <calcite-shell>
            <MyContext
              value={{
                cpackage,
                component,
                updateCpackage,
                updateComponent,
              }}
            >
              <QueryClientProvider client={queryClient}>
                <MapPanel />
                <AsOfDatePanel />
              </QueryClientProvider>
            </MyContext>
          </calcite-shell>
        </div>
      )}
    </>
  );
}

export default App;
