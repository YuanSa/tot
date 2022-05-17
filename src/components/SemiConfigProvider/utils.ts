import { useLanguage } from "../LanguageProvider";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";

export const useSemiLocale = () => {
  const { language } = useLanguage();
  switch (language) {
    case "zh-CN":
      return zh_CN;
    case "en-US":
      return en_US;
  }
};
