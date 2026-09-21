// Logo imports - existing logos from compare folder
import sungrowLogo from "@/assets/compare/sungrow-logo.png";
import goodweLogo from "@/assets/compare/goodwe-logo.png";
import huaweiLogo from "@/assets/compare/huawei-logo.png";
import smaLogo from "@/assets/compare/sma-logo.png";
import froniusLogo from "@/assets/compare/fronius-logo.png";
import victronLogo from "@/assets/compare/victron-logo.png";
import solaredgeLogo from "@/assets/compare/solaredge-logo.png";
import growattLogo from "@/assets/compare/growatt-logo.png";
import powerBiLogo from "@/assets/integrations/powerbi-logo.png";
import slackLogo from "@/assets/integrations/slack-logo.png";
import solargisLogo from "@/assets/integrations/solargis-logo.png";

// Imported logos
import freedomwonLogo from "@/assets/integrations/freedomwon-logo.png";
import solcastLogo from "@/assets/integrations/solcast-logo.png";
import elumEnergyLogo from "@/assets/integrations/elum-energy-logo.png";
import higecoLogo from "@/assets/integrations/higeco-logo.png";
import accuenergyLogo from "@/assets/integrations/accuenergy-logo.png";
import solarmdLogo from "@/assets/integrations/solarmd-logo.webp";
import agetoLogo from "@/assets/integrations/ageto-logo.png";
import ingeteamLogo from "@/assets/integrations/ingeteam-logo.svg";
import energitrackLogo from "@/assets/integrations/energitrack-logo.png";
import solarmanLogo from "@/assets/integrations/solarman-logo.webp";
import apsystemsLogo from "@/assets/integrations/apsystems-logo.png";
import alphaessLogo from "@/assets/integrations/alphaess-logo.webp";
import livewireLogo from "@/assets/integrations/livewire-logo.png";
// sparkMeterLogo import removed - no longer integrated
import sigenergyLogo from "@/assets/integrations/sigenergy-logo.png";
import comapLogo from "@/assets/integrations/comap-logo.png";
import elmeasureLogo from "@/assets/integrations/elmeasure-logo.png";
import sunsynkLogo from "@/assets/integrations/sunsynk-logo.png";
import solarLogLogo from "@/assets/integrations/solar-log-logo.webp";
import solisLogo from "@/assets/integrations/solis-logo.png";
import phocosLogo from "@/assets/integrations/phocos-logo.png";
import atessLogo from "@/assets/integrations/atess-logo.png";
import deyeLogo from "@/assets/integrations/deye-logo.webp";
import encombiLogo from "@/assets/integrations/encombi-logo.png";
import polarCloudLogo from "@/assets/integrations/polar-cloud-logo.png";

// Placeholder logos - set to null until real logos are uploaded
const googleLookerLogo = null;
const smartHelioLogo = null;
const sixtyHertzLogo = null;

export interface Brand {
  name: string;
  logo?: string | null;
}

export interface ApiIntegrations {
  inverters: Brand[];
  meters: Brand[];
  batteries: Brand[];
  energyManagementSystems: Brand[];
  dataServices: Brand[];
}

export const apiIntegrations: ApiIntegrations = {
  inverters: [
    { name: "Solis", logo: solisLogo },
    { name: "Sungrow", logo: sungrowLogo },
    { name: "GoodWe", logo: goodweLogo },
    { name: "Huawei", logo: huaweiLogo },
    { name: "SMA", logo: smaLogo },
    { name: "Fronius", logo: froniusLogo },
    { name: "Victron", logo: victronLogo },
    { name: "SolarEdge", logo: solaredgeLogo },
    { name: "Deye", logo: deyeLogo },
    { name: "Growatt", logo: growattLogo },
    { name: "ATESS", logo: atessLogo },
    { name: "Phocos", logo: phocosLogo },
    { name: "Solarman", logo: solarmanLogo },
    { name: "Solar-Log", logo: solarLogLogo },
    { name: "SunSynk", logo: sunsynkLogo },
    { name: "SigEnergy", logo: sigenergyLogo },
  ],
  meters: [
    { name: "LiveWire", logo: livewireLogo },
    { name: "Elmeasure", logo: elmeasureLogo },
  ],
  batteries: [
    { name: "Victron", logo: victronLogo },
    { name: "Huawei", logo: huaweiLogo },
    { name: "AlphaESS", logo: alphaessLogo },
    { name: "APSystems", logo: apsystemsLogo },
    { name: "FreedomWon", logo: freedomwonLogo },
    { name: "Ingeteam", logo: ingeteamLogo },
    { name: "Ageto", logo: agetoLogo },
    { name: "SolarMD", logo: solarmdLogo },
    { name: "AccuEnergy", logo: accuenergyLogo },
    { name: "ATESS", logo: atessLogo },
  ],
  energyManagementSystems: [
    { name: "Higeco", logo: higecoLogo },
    { name: "Elum Energy", logo: elumEnergyLogo },
    { name: "Energitrack (former DataGuru)", logo: energitrackLogo },
    { name: "ComAp", logo: comapLogo },
    { name: "Encombi", logo: encombiLogo },
    { name: "Polar Monitoring", logo: polarCloudLogo },
  ],
  dataServices: [
    { name: "Solcast", logo: solcastLogo },
    { name: "SolarGIS", logo: solargisLogo },
  ],
};

export interface SoftwareAddon {
  name: string;
  description: string;
  category: string;
  logo?: string | null;
}

export const softwareAddons: SoftwareAddon[] = [
  {
    name: "Google Looker Studio",
    description: "Custom reporting and business intelligence dashboards",
    category: "Reporting",
    logo: googleLookerLogo,
  },
  {
    name: "Microsoft Power BI",
    description: "Advanced analytics and data visualization",
    category: "Reporting",
    logo: powerBiLogo,
  },
  {
    name: "Slack / Microsoft Teams",
    description: "Real-time alert notifications in your team's chat",
    category: "Notifications",
    logo: slackLogo,
  },
  {
    name: "SmartHelio",
    description: "AI-driven PV analytics for predictive maintenance and yield optimisation",
    category: "Analytics",
    logo: smartHelioLogo,
  },
  {
    name: "60Hertz",
    description: "Maintenance management and work order tracking",
    category: "Operations",
    logo: sixtyHertzLogo,
  },
];

export interface EdgeFeature {
  title: string;
  description: string;
}

export const edgeFeatures: EdgeFeature[] = [
  {
    title: "Non-API Device Support",
    description: "Connect legacy equipment and devices without cloud APIs via Modbus, serial, or other protocols.",
  },
  {
    title: "Fuel Level Sensors",
    description: "Monitor diesel tank levels for hybrid systems with real-time fuel consumption tracking.",
  },
  {
    title: "Temperature Sensors",
    description: "Track ambient and equipment temperatures for performance optimisation.",
  },
  {
    title: "Diesel Generator Controllers",
    description: "Integrate genset controllers for complete hybrid system visibility.",
  },
  {
    title: "Smart Meters",
    description: "Connect utility meters for accurate grid import/export measurement.",
  },
  {
    title: "Custom Sensors",
    description: "Support for custom I/O and sensor configurations for unique requirements.",
  },
];
