import classNames from "classnames";
import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { Width } from "../WidthProvider";

export type GlobalClassName = Partial<{
  width: Width;
}>;
export const FallbackGlobalClassName: GlobalClassName = {
  width: "normal",
};

type GlobalClassNameConfig = {
  globalClassName: GlobalClassName;
  setGlobalClassName: (
    k: keyof GlobalClassName,
    v: GlobalClassName[typeof k]
  ) => void;
};

const GlobalClassNameContext = React.createContext<GlobalClassNameConfig>({
  globalClassName: {},
  setGlobalClassName: () => null,
});

export const useGlobalClassName = () => useContext(GlobalClassNameContext);

export const GlobalClassNameProvider: FC = ({ children }) => {
  const [globalClassName, setSelfGlobalClassName] = useState<GlobalClassName>(
    FallbackGlobalClassName
  );

  const setGlobalClassName = (
    k: keyof GlobalClassName,
    v: GlobalClassName[typeof k]
  ) => setSelfGlobalClassName((oldClassName) => ({ ...oldClassName, [k]: v }));

  return (
    <GlobalClassNameContext.Provider
      value={{ globalClassName, setGlobalClassName }}
    >
      {children}
    </GlobalClassNameContext.Provider>
  );
};

export const useGlobalClassNameResponseGuard = () => {
  const { globalClassName } = useGlobalClassName();
  const globalClassNameList = useMemo(() => {
    return Object.keys(globalClassName).reduce((list, key) => {
      list.push(
        `${key}-${globalClassName[key as keyof GlobalClassName] ?? "unknown"}`
      );
      return list;
    }, [] as string[]);
  }, [globalClassName]);

  useEffect(() => {
    window.document.body.className = classNames(...globalClassNameList);
  }, [globalClassNameList]);
};
