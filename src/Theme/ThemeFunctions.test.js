import themes from "./Themes";
import { getCurrentTheme, getNextTheme } from "./ThemeFunctions";
import {THEME_1,THEME_2,THEME_3} from "../constants/themesNames";

describe("ThemeFunctions", () => {
  it("should return the current theme (theme 1)", () => {
    expect(getCurrentTheme()).toEqual(themes[THEME_1]);	
  });
  it("should return the next theme (theme 2)", () => {
    expect(getNextTheme()).toEqual(themes[THEME_2]);
  });
  it("should return the next theme (theme 3)", () => {
    expect(getNextTheme()).toEqual(themes[THEME_3]);
  });
  it("should return the next theme (theme 1)", () => {
    expect(getNextTheme()).toEqual(themes[THEME_1]);
  });
});
