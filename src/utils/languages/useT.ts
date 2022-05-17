import { ReactNode, useCallback } from "react";
import { useIntl } from "react-intl";
import { useLanguage } from "../../contexts/Language";

type ID = string | TemplateStringsArray;

// type T = ReturnType<typeof useIntl>; // TODO: 优化类型
type T = (id?: ID, params?: Record<string, ReactNode>) => ReactNode;
export const useT = (): T => {
  const { isLoading } = useLanguage();
  const intl = useIntl();
  const t = useCallback<T>(
    (rawID?: ID, params = {}) => {
      const id = typeof rawID === "string" ? rawID : rawID?.raw?.[0] ?? "";
      if (!id) {
        return "";
      }
      if (id.startsWith("X-")) {
        console.warn("I18n text translation needed:", id.slice(2));
        return id.slice(2);
      }
      if (intl.messages[id] !== undefined) {
        return intl.formatMessage({ id }, params);
      }
      return id;
    },
    [intl.formatMessage, isLoading, intl.messages]
  );
  return t;
};
