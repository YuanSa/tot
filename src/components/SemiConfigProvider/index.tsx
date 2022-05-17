import { FC } from "react";
import { ConfigProvider } from "@douyinfe/semi-ui";
import { useSemiLocale } from "./utils";

export const SemiConfigProvider: FC = ({ children }) => {
  const semiLocale = useSemiLocale();
  return <ConfigProvider locale={semiLocale}>{children}</ConfigProvider>;
};
