import { useLanguage } from "@/components/LanguageProvider";
import { useTitle as ahooksUseTitle } from "ahooks";
import { string } from "prop-types";
import { ReactNode, useCallback } from "react";
import { formatLocale } from "./date-fns";
import { formatDistanceToNowLocale } from "./date-fns/formatDistanceToNowLocale";
import { useT } from "./language";

export const useTitle = (name?: ReactNode) => {
  const t = useT();
  const prefix = name ? `${name.toString()} - ` : "";
  const suffix = t`website_name`;
  return ahooksUseTitle(`${prefix}${suffix}`, { restoreOnUnmount: true });
};

export const useTimeDistanceDescription = () => {
  const t = useT();
  return useCallback(
    (date?: Date | string | number) => {
      if (date === undefined) {
        return "";
      } else {
        const parsedDate = new Date(Number(date));
        const distance = formatDistanceToNowLocale(parsedDate, {
          addSuffix: true,
        });
        const absolute = formatLocale(parsedDate, "PPpp");
        return `${distance} ${t("mark_parentheses_pair", {
          contents: absolute,
        })}`;
      }
    },
    [t]
  );
};
