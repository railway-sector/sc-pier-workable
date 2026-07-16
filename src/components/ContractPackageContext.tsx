import { use } from "react";
import "../index.css";
import "@esri/calcite-components/dist/components/calcite-segmented-control";
import "@esri/calcite-components/dist/components/calcite-segmented-control-item";
import "@esri/calcite-components/dist/components/calcite-label";
import { cpackages } from "../uniqueValues";
import { MyContext } from "../contexts/MyContext";

export default function ContractPackageSegmentedList() {
  const { updateCpackage, cpackage } = use(MyContext);

  return (
    <>
      <calcite-label>
        Contract Package
        <calcite-segmented-control
          oncalciteSegmentedControlChange={(event: any) => {
            updateCpackage(event.target.selectedItem.id);
          }}
          scale="m"
          width="full"
        >
          {cpackage &&
            cpackages.map((category: any, index: any) => {
              return (
                <calcite-segmented-control-item
                  {...(cpackage === category ? { checked: true } : {})}
                  key={index}
                  value={category}
                  id={category}
                >
                  {category}
                </calcite-segmented-control-item>
              );
            })}
        </calcite-segmented-control>
      </calcite-label>
    </>
  );
}
