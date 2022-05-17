import { FC, ReactNode } from "react";
import { MetaContext } from "./Meta";
import { useT } from "../utils/languages/useT";
import { useTitle } from "ahooks";

export const MetaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const t = useT();
  const websiteTitle = `${t("website_name")} | ${t("website_subtitle")}`;
  useTitle(websiteTitle);
  return (
    <MetaContext.Provider value={{ title: websiteTitle }}>
      {children}
    </MetaContext.Provider>
  );
};
