import { format } from "date-fns";
import { withDefaultLocale } from "./utils";

export const formatLocale: typeof format = (...props) => {
  const newProps = [
    props[0],
    props[1],
    withDefaultLocale(props[2]),
  ] as const;

  return format(...newProps);
};
