import React, { useContext } from "react";

export type TextSet = Record<string, string>;

export const supportedLanguage = ["zh-CN", "en-US"] as const;
export type LanguageCode = (typeof supportedLanguage)[number];
export const FallbackLanguageCode: LanguageCode = "en-US";

export const getTextSet = (
  lang: LanguageCode = FallbackLanguageCode
): Promise<TextSet> =>
  import(`../locale/${lang}.json`).then((res) => res.default);

export type LanguageConfig = {
  language: LanguageCode;
  setLanguage: (newLanguage?: LanguageCode) => void;
  textSet: TextSet;
  isLoading: boolean;
  isFollowingSystemLanguage: boolean;
};
export const LanguageContext = React.createContext<LanguageConfig>({
  language: "en-US",
  setLanguage: () => null,
  textSet: {},
  isLoading: true,
  isFollowingSystemLanguage: true,
});

export const normalizeLanguageCode = (
  rawLangCode?: unknown
): LanguageCode | undefined => {
  const strLangCode =
    typeof rawLangCode === "string" ? rawLangCode : `${rawLangCode}`;
  if (strLangCode.includes("zh")) {
    return "zh-CN";
  }
  if (strLangCode.includes("en")) {
    return "en-US";
  }
  return undefined;
};

export const useLanguage = () => useContext(LanguageContext);
