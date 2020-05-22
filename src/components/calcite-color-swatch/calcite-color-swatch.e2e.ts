import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "./resources";
import {
  defaults,
  focusable,
  reflects,
  renders,
} from "../../tests/commonTests";

describe("calcite-color-swatch", () => {
  it("renders", () => renders("calcite-color-swatch"));

  it("has defaults", () =>
    defaults("calcite-color-swatch", [
      {
        propertyName: "color",
        defaultValue: "#000000",
      },
      {
        propertyName: "isActive",
        defaultValue: false,
      },
    ]));

  it("reflects", () =>
    reflects("calcite-color-swatch", [
      {
        propertyName: "isActive",
        value: true,
      },
    ]));

  it("can be focused", async () => focusable("calcite-color-swatch"));

  describe("has accepts CSS color strings", () => {
    it("supports rgb", async () => {
      const page = await newE2EPage({
        html:
          "<calcite-color-swatch color='rgb(255, 255, 255)'></calcite-color-swatch>",
      });
      const swatch = await page.find(`calcite-color-swatch >>> .${CSS.swatch}`);
      const style = await swatch.getComputedStyle();

      expect(style["background-color"]).toBe("rgb(255, 255, 255)");
    });

    it("supports keywords", async () => {
      const page = await newE2EPage({
        html:
          "<calcite-color-swatch color='chartreuse'></calcite-color-swatch>",
      });
      const swatch = await page.find(`calcite-color-swatch >>> .${CSS.swatch}`);
      const style = await swatch.getComputedStyle();

      expect(style["background-color"]).toBe("rgb(127, 255, 0)");
    });

    it("supports hsl", async () => {
      const page = await newE2EPage({
        html:
          "<calcite-color-swatch color='hsl(120, 100%, 97%)'></calcite-color-swatch>",
      });
      const swatch = await page.find(`calcite-color-swatch >>> .${CSS.swatch}`);
      const style = await swatch.getComputedStyle();

      expect(style["background-color"]).toBe("rgb(240, 255, 240)");
    });

    it("supports hex", async () => {
      const page = await newE2EPage({
        html: "<calcite-color-swatch color='#FF8200'></calcite-color-swatch>",
      });
      const swatch = await page.find(`calcite-color-swatch >>> .${CSS.swatch}`);

      const style = await swatch.getComputedStyle();

      expect(style["background-color"]).toBe("rgb(255, 130, 0)");
    });
  });

  it("has an active state", async () => {
    const page = await newE2EPage({
      html: "<calcite-color-swatch is-active></calcite-color-swatch>",
    });
    const swatch = await page.find(
      `calcite-color-swatch >>> .${CSS.swatchActive}`
    );

    expect(swatch).toBeTruthy();
  });
});
