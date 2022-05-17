import { useLanguage } from "@/components/LanguageProvider";
import { useMemo } from "react";

export const useDateFnsLocaleGuard = () => {
  const { language } = useLanguage();

  const loadLocaleTask = useMemo(() => {
    switch (language) {
      case "zh-CN":
        return import("date-fns/locale/zh-CN");
      case "en-US":
        return import("date-fns/locale/en-US");
    }
  }, [language])
    .then((localeModule) => (window.dateFnsLocal = localeModule.default))
    .catch((err: Error) => {
      console.error(
        "❌ 挂载 ${language} 语言对应的 date-fns Local 至 window 失败：",
        err
      );
      throw err;
    });

  return loadLocaleTask;
};
