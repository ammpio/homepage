import { describe, expect, it } from "vitest";
import { OM_EPC_PLATFORMS, OM_FAQ, EPC_FAQ, POWER_FACTORS_WITH_RAY } from "./om-epc-compare";

const all = JSON.stringify({ OM_EPC_PLATFORMS, OM_FAQ, EPC_FAQ });
describe("O&M and EPC comparison pages", () => {
  it("lists the platforms we have /compare pages for, plus Power Factors and manufacturer portals", () => {
    expect(OM_EPC_PLATFORMS.map((p) => p.name)).toEqual(["AMMP", "Meteocontrol", "Power Factors", "AlsoEnergy PowerTrack", "QOS Energy", "Bazefield", "Univers (EnOS)", "PV Operation", "Manufacturer portals"]);
  });
  it("links Power Factors to its alternatives page and says Ray can run on top", () => {
    expect(POWER_FACTORS_WITH_RAY.to).toBe("/compare/power-factors-alternatives");
    expect(POWER_FACTORS_WITH_RAY.fits).toContain("Ray (AMMP AI) can run on top of Power Factors");
  });
  it("never mentions white-label or prices", () => {
    expect(all.toLowerCase()).not.toMatch(/white-label|white label|€|\$\d/);
  });
});
