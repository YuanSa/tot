import { useLocalStorageState } from "ahooks";
import React, { FC, useContext, useEffect } from "react";
import { LocalStorageKey } from "../../constants/LocalStorage";
import { useGlobalClassName } from "../GlobalClassNameProvider";

export const supportedWidth = ["narrow", "normal", "wide", "maximum"] as const;

export type Width = typeof supportedWidth[number];
export const FallbackWidth: Width = "normal";

type WidthConfig = {
  width: Width;
  setWidth: (newWidth?: Width) => void;
};

const WidthContext = React.createContext<WidthConfig>({
  width: FallbackWidth,
  setWidth: () => null,
});

export const useWidth = () => useContext(WidthContext);

export const normalizeWidth = (rawWidth?: string): Width => {
  if (supportedWidth.includes(rawWidth as Width)) {
    return rawWidth as Width;
  } else {
    return FallbackWidth;
  }
};

export const WidthProvider: FC = ({ children }) => {
  const [width = FallbackWidth, setWidth] = useLocalStorageState<Width>(
    LocalStorageKey.width,
    {
      deserializer: (raw) => normalizeWidth(JSON.parse(raw)),
    }
  );

  return (
    <WidthContext.Provider value={{ width, setWidth }}>
      {children}
    </WidthContext.Provider>
  );
};

export const useWidthResponseGuard = () => {
  const { width } = useWidth();
  const { setGlobalClassName } = useGlobalClassName();
  

  useEffect(() => {
  setGlobalClassName("width", width);
  }, [width]);
};
