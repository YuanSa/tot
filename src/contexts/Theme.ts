import { createContext, useContext } from "react";

export const supportedTheme = ["light", "dark"] as const;

export type Theme = (typeof supportedTheme)[number];
export const FallbackTheme: Theme = "light";

export type ThemeConfig = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeConfig>({
  theme: FallbackTheme,
});

export const normalizeTheme = (rawTheme?: any) => {
  if (supportedTheme.includes(rawTheme)) {
    return rawTheme as Theme;
  }
  return undefined;
};
