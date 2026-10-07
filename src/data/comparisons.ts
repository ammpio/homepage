export type Comparison = { to: string; title: string; excerpt: string };

/** Comparison pages listed under the "Compare" filter on /blog (general topics first, then vendors). */
export const comparisons: Comparison[] = [
  { to: "/compare/in-house-systems", title: "AMMP vs In-House Systems", excerpt: "Compare AMMP's ready-to-deploy platform to building custom in-house monitoring solutions." },
  { to: "/compare/traditional-monitoring", title: "AMMP vs Traditional Monitoring", excerpt: "Compare AMMP's modern platform to traditional SCADA and monitoring approaches." },
  { to: "/compare/data-first-vs-ui-first", title: "Data-First vs UI-First Platforms", excerpt: "Why a data-first architecture matters for scalable solar portfolio management." },
  { to: "/compare/open-vs-proprietary", title: "Open vs Proprietary Systems", excerpt: "Compare open, vendor-agnostic platforms to proprietary lock-in monitoring solutions." },
  { to: "/compare/vendor-portals", title: "AMMP vs Manufacturer Portals", excerpt: "Why a unified monitoring platform beats juggling multiple vendor portals for your solar portfolio." },
  { to: "/compare/cloud-vs-on-premise", title: "Cloud vs On-Premise Monitoring", excerpt: "Understand the trade-offs between cloud-based and on-premise solar monitoring solutions." },
  { to: "/compare/ammp-vs-alsoenergy", title: "AMMP vs AlsoEnergy", excerpt: "Compare AMMP and AlsoEnergy (PowerTrack) on customization, integrations, support and BESS depth." },
  { to: "/compare/pv-operation", title: "AMMP vs PV Operation", excerpt: "Compare AMMP's hardware-agnostic cloud platform to PV Operation's SCADA-based approach in Brazil." },
  { to: "/compare/meteocontrol", title: "AMMP vs Meteocontrol", excerpt: "Compare AMMP's vendor-neutral platform to Meteocontrol for renewable energy portfolios." },
  { to: "/compare/qos-energy", title: "AMMP vs QOS Energy", excerpt: "Compare AMMP's flexibility to QOS Energy for renewable energy monitoring and analytics." },
  { to: "/compare/bazefield", title: "AMMP vs Bazefield", excerpt: "Compare AMMP's renewable portfolio platform to Bazefield's SCADA solution." },
  { to: "/compare/univers", title: "AMMP vs Univers (EnOS)", excerpt: "Compare AMMP's focused renewables platform to Univers's enterprise-scale EnOS platform." },
  { to: "/compare/huawei", title: "AMMP vs FusionSolar (Huawei)", excerpt: "Compare AMMP's multi-vendor platform to Huawei's FusionSolar portal for solar monitoring." },
  { to: "/compare/sungrow", title: "AMMP vs iSolarCloud (Sungrow)", excerpt: "Compare AMMP's unified platform to Sungrow's iSolarCloud portal for portfolio management." },
  { to: "/compare/sma", title: "AMMP vs Sunny Portal (SMA)", excerpt: "Compare AMMP's commercial-grade platform to SMA's Sunny Portal for professional solar monitoring." },
  { to: "/compare/fronius", title: "AMMP vs Solar.web (Fronius)", excerpt: "Compare AMMP's multi-vendor support to Fronius Solar.web for commercial solar portfolios." },
  { to: "/compare/goodwe", title: "AMMP vs SEMS (GoodWe)", excerpt: "Compare AMMP's portfolio-wide insights to GoodWe's SEMS portal for solar monitoring." },
  { to: "/compare/growatt", title: "AMMP vs ShineServer (Growatt)", excerpt: "Compare AMMP's unified monitoring to Growatt's ShineServer for multi-vendor portfolios." },
  { to: "/compare/victron", title: "AMMP vs VRM Portal (Victron)", excerpt: "Compare AMMP's commercial-scale platform to Victron's VRM Portal for hybrid energy systems." },
  { to: "/compare/solaredge", title: "AMMP vs SolarEdge Monitoring", excerpt: "Compare AMMP's vendor-agnostic platform to SolarEdge's proprietary monitoring solution." },
];
