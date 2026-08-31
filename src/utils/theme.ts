
export interface ITheme {
  black: string;
  white: string;
  primaryColor: string;
  primaryColorLight: string;
  gray_1: string;
  background: string;
  textColor: string;
}

export const LIGHT_THEME: ITheme = {
  black: "#0A0A0A",
  white: "#FFFFFF",

  // Modern developer blue
  primaryColor: "#2563EB",
  primaryColorLight: "#EFF6FF",

  gray_1: "#F1F5F9",

  background: "#FFFFFF",
  textColor: "#0F172A",
};

export const DARK_THEME: ITheme = {
  black: "#000000",
  white: "#FFFFFF",

  // Brighter blue for dark UI
  primaryColor: "#60A5FA",
  primaryColorLight: "#172554",

  gray_1: "#171717",

  background: "#09090B",
  textColor: "#E5E7EB",
};

export const THEME = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends ITheme {}
}
