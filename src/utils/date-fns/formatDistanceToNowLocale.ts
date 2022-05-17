import { formatDistanceToNow } from "date-fns";
import { withDefaultLocale } from "./utils";

export const formatDistanceToNowLocale: typeof formatDistanceToNow = (...props) => {
  const newProps = [
    props[0],
    withDefaultLocale(props[1]),
  ] as const;

  return formatDistanceToNow(...newProps);
};
