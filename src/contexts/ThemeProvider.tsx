import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { FallbackTheme, normalizeTheme, Theme, ThemeContext } from "./Theme";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [systemTheme, setSystemTheme] = useState<Theme>("light");
  const theme = useMemo<Theme>(
    () => normalizeTheme(systemTheme) || FallbackTheme,
    [systemTheme]
  );

  useEffect(() => {
    const matchThemeMode: MediaQueryList["onchange"] = (e) =>
      setSystemTheme(e.matches ? "dark" : "light");
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", matchThemeMode);
    () => {
      mediaQueryList.removeEventListener("change", matchThemeMode);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme-mode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
