import { useLocalStorageState } from "ahooks";
import React, { FC, useCallback, useContext, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import { LocalStorageKey } from "../../constants/LocalStorage";

export const supportedTheme = ["light", "dark"] as const;

export type Theme = typeof supportedTheme[number];
export const FallbackTheme: Theme = "light";

type ThemeConfig = {
  theme: Theme;
  setTheme: (newTheme?: Theme) => void;
  isFollowingSystemTheme: boolean;
};

const ThemeContext = React.createContext<ThemeConfig>({
  theme: FallbackTheme,
  setTheme: () => null,
  isFollowingSystemTheme: false,
});

export const useTheme = () => useContext(ThemeContext);

export const normalizeTheme = (rawTheme?: string): Theme => {
  if (supportedTheme.includes(rawTheme as Theme)) {
    return rawTheme as Theme;
  } else {
    return "light";
  }
};

export const ThemeProvider: FC = ({ children }) => {
  const [localTheme, setLocalTheme] = useLocalStorageState<Theme>(
    LocalStorageKey.theme,
    { deserializer: (raw) => normalizeTheme(JSON.parse(raw)) }
  );
  const systemTheme: Theme = useMediaPredicate("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const isFollowingSystemTheme = !localTheme;
  const theme = localTheme || systemTheme;

  const setTheme = useCallback((targetTheme?: Theme) => {
    if (targetTheme) {
      setLocalTheme(normalizeTheme(targetTheme));
    } else {
      setLocalTheme(undefined);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isFollowingSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeResponseGuard = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.document.body.setAttribute("theme-mode", theme);
  }, [theme]);
};
