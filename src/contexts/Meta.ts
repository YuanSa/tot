import { createContext, useContext } from "react";

export type MetaConfig = {
  title: string;
};
export const MetaContext = createContext<MetaConfig>({
  title: "Yang Zihan | Professional Frontend Solution Provider",
});

export const useMeta = () => useContext(MetaContext);
