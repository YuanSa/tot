import { useEffect } from "react";
import { useRequest } from "ahooks";
import { LanguageCode, useLanguage } from "@/components/LanguageProvider";
import { ElegantArticleCardProps } from "@/pages/Blog/components/ElegantArticleCard";

export interface BlogModuleIntroTutorialConfigItem {
  sectionTitle: string;
  articleList: ElegantArticleCardProps[];
}

export type BlogModuleIntroTutorialConfig = BlogModuleIntroTutorialConfigItem[];

const getIntroTutorialConfig = (language: LanguageCode) =>
  import(`./conf-${language}.json`).then(
    (res) => res.default as BlogModuleIntroTutorialConfig
  );

export const useIntroTutorialConfig = () => {
  const { language } = useLanguage();

  const response = useRequest((targetLanguage: LanguageCode) =>
    getIntroTutorialConfig(targetLanguage)
  );
  const { run } = response;

  useEffect(() => run(language), [language]);

  return { ...response, config: response.data };
};
