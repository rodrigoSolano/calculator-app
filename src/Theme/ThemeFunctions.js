import themes from "./Themes"
import {THEME_1,THEME_2,THEME_3} from "../constants/themesNames";

export let currentTheme = themes[THEME_1];

export const getCurrentTheme = () => currentTheme;

export const getNextTheme = () => {
  if(currentTheme === themes[THEME_1]){
    currentTheme = themes[THEME_2];
  }
  else if(currentTheme === themes[THEME_2]){
    currentTheme = themes[THEME_3];
  }
  else if(currentTheme === themes[THEME_3]){
    currentTheme = themes[THEME_1];
  }
  return currentTheme;
}