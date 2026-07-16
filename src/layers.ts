import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import {
  cp_brkline_label,
  cp_brkline_renderer,
  lineSymbolOverview_nscrex,
  lot_layer_renderer,
  lotIdLabel,
  nlo_renderer,
  nonwork_piern_label,
  opacity,
  pcap_all_renderer,
  pcap_land_renderer,
  pcap_nlo_renderer,
  pcap_other_renderer,
  pcap_str_renderer,
  pcap_util_renderer,
  piern_labels,
  piern_land_label,
  piern_nlo_label,
  piern_other_label,
  piern_str_label,
  piern_util_label,
  portalItems,
  prow_renderer,
  station_label,
  station_point_symbol,
  strip_map_renderer,
  struc_layer_renderer,
  strucLabel,
  tunnel_label,
  tunnel_render,
  utility_marker_renderer,
  workall_piern_number_label,
} from "./uniqueValues";

//-------------------------------------//
//           Alignmnet Layers          //
//-------------------------------------//
export const basemapUserDefined = new Basemap({
  baseLayers: [
    new VectorTileLayer({
      portalItem: { id: "c62a1769441f4dfca8ef64dd860d6d15" },
    }),
  ],
});

//--- STATION POINT LAYER ---//
export const scStationLayer = new FeatureLayer({
  portalItem: portalItems("e09b9af286204939a32df019403ef438"),
  layerId: 6,
  title: "Station",
  popupEnabled: false,
  definitionExpression: "Station <> 'NCC'",
  renderer: station_point_symbol,
  labelingInfo: [station_label],
  opacity: opacity,
});
scStationLayer.listMode = "hide";

//--- CP BREAKLINE LAYER ---//
export const cp_break_lines = new FeatureLayer({
  portalItem: portalItems("1a2be501a0f54e048a7200e482eb0dd5"),
  title: "CP Break Line",
  renderer: cp_brkline_renderer,
  labelingInfo: [cp_brkline_label],
  popupEnabled: false,
  elevationInfo: { mode: "on-the-ground" },
});
cp_break_lines.listMode = "hide";

//--- PROW LAYER ---//
export const prowLayer = new FeatureLayer({
  portalItem: portalItems("e09b9af286204939a32df019403ef438"),
  layerId: 5,
  title: "PROW",
  popupEnabled: false,
  renderer: prow_renderer,
});
prowLayer.listMode = "hide";

//--- TUNNEL LINE LAYER ---//
export const tunnelLayer = new FeatureLayer({
  portalItem: portalItems("63605177aec648e5b3ad232d2b181874"),
  title: "Tunnel Alignment",
  popupEnabled: false,
  renderer: tunnel_render,
  labelingInfo: [tunnel_label],
});

//--- STRIP MAP LAYER ---//
export const stripMapLayer = new FeatureLayer({
  portalItem: portalItems("30add0b559fa468da90aa58ae2e38c1d"),
  layerId: 38,
  outFields: ["PageNumber", "Angle", "GroupId"],
  title: "Strip Map",
  popupEnabled: false,
  renderer: strip_map_renderer,
  maxScale: 5000,
  minScale: 0,
});

//-------------------------------------//
//          Pile Cap Layers            //
//-------------------------------------//
export const pileCapLayer = new FeatureLayer({
  portalItem: portalItems("30add0b559fa468da90aa58ae2e38c1d"),
  layerId: 39,
  title: "Pile Cap",
  minScale: 150000,
  maxScale: 0,
  renderer: pcap_all_renderer,
  labelingInfo: [workall_piern_number_label, nonwork_piern_label],
  popupEnabled: false,
  elevationInfo: { mode: "on-the-ground" },
});

//--- OBSTRUTING LAND ---//
export const lotLayer = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 1,
  labelingInfo: [lotIdLabel],
  renderer: lot_layer_renderer,
  outFields: ["LotID"],
  title: "Land Acquisition",
  definitionExpression: "OwnershipType = 0 and Obstruction = 'Yes'",
  minScale: 10000,
  maxScale: 0,
  popupTemplate: { title: "{LotID}: {StatusLA}", lastEditInfoEnabled: false },
  elevationInfo: { mode: "on-the-ground" },
});

//--- OBSTRUTING STRUCTURE (BUILDING) ---//
export const structureLayer = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 2,
  labelingInfo: [strucLabel],
  renderer: struc_layer_renderer,
  definitionExpression: "Obstruction = 'Yes'",
  title: "Structure",
  minScale: 2500,
  maxScale: 0,
  popupTemplate: {
    title: "{StrucID}: {StatusStruc}",
    lastEditInfoEnabled: false,
  },
  elevationInfo: { mode: "on-the-ground" },
});

//--- OBSTRUTING HOUSEHOLDS ---//
export const nloLayer = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 3,
  renderer: nlo_renderer,
  definitionExpression: "StatusRC > 1",
  title: "NLO (Non-Land Owner)",
  elevationInfo: { mode: "on-the-ground" },
  minScale: 3000,
  maxScale: 0,
  popupTemplate: { title: "{StrucID}: {StatusRC}", lastEditInfoEnabled: false },
});

//--- OBSTRUTING UTILITY ---//
export const utilityPointLayer = new FeatureLayer({
  portalItem: portalItems("b7d01020d54c4015ba0ba9454475d1dc"),
  layerId: 1,
  title: "Utility",
  minScale: 5000,
  maxScale: 0,
  renderer: utility_marker_renderer,
  popupTemplate: {
    title: "{comp_agency} - {UtilType}: {Status} for {LAYER} work",
    lastEditInfoEnabled: false,
  },
});

//-------------------------------------//
//           Overview Map              //
//-------------------------------------//
//--- STATIOIN POINT LAYER ---//
export const scStationLayer_overview = new FeatureLayer({
  portalItem: portalItems("ace32f63bafc40f6bcfeecbee5fa6c69"),
  layerId: 1,
  title: "Station",
  popupEnabled: false,
  definitionExpression: "Station <> 'NCC'",
  renderer: station_point_symbol,
  labelingInfo: [station_label],
  opacity: opacity,
});
scStationLayer_overview.listMode = "hide";

//--- PILE CAP LAYER ---//
export const pileCapLayer_overview = new FeatureLayer({
  portalItem: portalItems("30add0b559fa468da90aa58ae2e38c1d"),
  layerId: 39,
  title: "Pile Cap",
  minScale: 150000,
  maxScale: 0,
  renderer: pcap_land_renderer,
  labelingInfo: [workall_piern_number_label, nonwork_piern_label],
  popupEnabled: false,
  elevationInfo: { mode: "on-the-ground" },
});

//--- PROW LAYER ---//
export const prowLayer_overview = new FeatureLayer({
  portalItem: portalItems("e09b9af286204939a32df019403ef438"),
  layerId: 5,
  title: "PROW",
  popupEnabled: false,
  renderer: prow_renderer,
});
prowLayer_overview.listMode = "hide";

//--- CENTER LINE LAYER ---//
export const scCenterlineOverView = new FeatureLayer({
  portalItem: portalItems("ace32f63bafc40f6bcfeecbee5fa6c69"),
  renderer: lineSymbolOverview_nscrex,
  layerId: 2,
  popupEnabled: false,
});

//--- OBSTRUCTING LOT LAYER ---//
export const lotLayer_overview = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 1,
  labelsVisible: false,
  renderer: lot_layer_renderer,
  title: "Land Acquisition",
  outFields: ["LotID"],
  definitionExpression: "OwnershipType = 0 and Obstruction = 'Yes'",
  minScale: 20000,
  maxScale: 0,
  elevationInfo: { mode: "on-the-ground" },
});

//--- OBSTRUCTING STRUCTURE (BUILDING) ---//
export const structureLayer_overview = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 2,
  labelsVisible: false,
  renderer: struc_layer_renderer,
  definitionExpression: "Obstruction = 'Yes'",
  labelingInfo: [strucLabel],
  title: "Structure",
  minScale: 3500,
  maxScale: 0,
  popupEnabled: false,
  elevationInfo: { mode: "on-the-ground" },
});

//--- OBSTRUCTING HOUSEHOLDS ---//
export const nloLayer_overview = new FeatureLayer({
  portalItem: portalItems("99500faf0251426ea1df934a739faa6f"),
  layerId: 3,
  renderer: nlo_renderer,
  definitionExpression: "StatusRC > 1",
  title: "NLO (Non-Land Owner)",
  elevationInfo: { mode: "on-the-ground" },
  minScale: 3000,
  maxScale: 0,
  popupEnabled: false,
});

//--- OBSTRUCTING UTILITY POINTS ---//
export const utilityPointLayer_overview = new FeatureLayer({
  portalItem: portalItems("b7d01020d54c4015ba0ba9454475d1dc"),
  layerId: 1,
  title: "Utility",
  minScale: 5000,
  maxScale: 0,
  renderer: utility_marker_renderer,
  popupEnabled: false,
});

//--- STRIP MAP LAYER ---//
export const stripMapLayer_overview = new FeatureLayer({
  portalItem: portalItems("30add0b559fa468da90aa58ae2e38c1d"),
  layerId: 38,
  outFields: ["PageNumber", "GroupId"],
  title: "Strip Map",
  popupEnabled: false,
  visible: false,
});

//-------------------------------------//
//           Other layers              //
//-------------------------------------//
export const dateTable = new FeatureLayer({
  portalItem: portalItems("b2a118b088a44fa0a7a84acbe0844cb2"),
});

//-------------------------------------//
//           Other parameters          //
//-------------------------------------//
export const layerInfos = [
  {
    layer: lotLayer,
    title: "Land",
  },
  {
    layer: structureLayer,
    title: "Structure",
  },
  {
    layer: nloLayer,
    title: "NLO (Non-Land Owner)",
  },
  {
    layer: utilityPointLayer,
    title: "Utility Work (Incomplete)",
  },
  {
    layer: stripMapLayer,
    title: "Strip Map",
  },
  {
    layer: pileCapLayer,
    title: "Pile Cap",
  },
];

//--- PILE CAP QUERIES FOR SYBMOLOGY & LABELS ---//
export const pcap_render_q = [
  {
    component: "All",
    renderer: pcap_all_renderer,
    labelInfo: piern_labels,
  },
  {
    component: "Land",
    layerv: lotLayer,
    renderer: pcap_land_renderer,
    labelInfo: piern_land_label,
  },
  {
    component: "Structure",
    layerv: structureLayer,
    renderer: pcap_str_renderer,
    labelInfo: piern_str_label,
  },
  {
    component: "ISF",
    layerv: nloLayer,
    renderer: pcap_nlo_renderer,
    labelInfo: piern_nlo_label,
  },
  {
    component: "Utility",
    layerv: utilityPointLayer,
    renderer: pcap_util_renderer,
    labelInfo: piern_util_label,
  },
  {
    component: "Others",
    renderer: pcap_other_renderer,
    labelInfo: piern_other_label,
  },
];
