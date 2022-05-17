import React, {
  FC,
  useContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useLocalStorageState } from "ahooks";
import { LocalStorageKey } from "../../constants/LocalStorage";
import { Toast } from "@douyinfe/semi-ui";
import { IntlProvider } from "react-intl";

export const supportedLanguage = ["zh-CN", "en-US"] as const;

export type LanguageCode = typeof supportedLanguage[number];
export type TextSet = Record<string, string>;
export const FallbackLanguageCode: LanguageCode = "en-US";

export const MonoWidthLanguage: LanguageCode[] = ['zh-CN'];

type LanguageConfig = {
  language: LanguageCode;
  // setLanguage: (newLanguage?: LanguageCode) => Promise<TextSet>; // TODO:
  setLanguage: (newLanguage?: LanguageCode) => void;
  textSet: TextSet;
  isLoading: boolean;
  isFollowingSystemLanguage: boolean;
  isMonoWidthLanguage: boolean;
};
const LanguageContext = React.createContext<LanguageConfig>({
  language: "en-US",
  setLanguage: () => null,
  textSet: {},
  isLoading: true,
  isFollowingSystemLanguage: true,
  isMonoWidthLanguage: true,
});

export const useLanguage = () => useContext(LanguageContext);

export const normalizeLanguageCode = (
  rawLangCode?: string,
  fallbackLanguage: LanguageCode = FallbackLanguageCode
): LanguageCode => {
  if (rawLangCode) {
    if (rawLangCode.includes("zh")) {
      return "zh-CN";
    }
    if (rawLangCode.includes("en")) {
      return "en-US";
    }
  }
  return fallbackLanguage;
};

export const LanguageProvider: FC = ({ children }) => {
  const [textSet, setTextSet] = useState<TextSet>({});
  const [localLanguage, setLocalLanguage] = useLocalStorageState<LanguageCode>(
    LocalStorageKey.language,
    { deserializer: (raw) => normalizeLanguageCode(JSON.parse(raw)) }
  );
  const systemLanguage = normalizeLanguageCode(navigator.language);
  const isFollowingSystemLanguage = !localLanguage;
  const language = localLanguage || systemLanguage;
  const [isLoading, setIsLoading] = useState(true);

  const setLanguage = useCallback(
    (targetLanguageCode?: LanguageCode) => {
      if (targetLanguageCode) {
        setLocalLanguage(normalizeLanguageCode(targetLanguageCode));
      } else {
        setLocalLanguage(undefined);
      }
    },
    [setLocalLanguage]
  );

  useEffect(() => {
    setIsLoading(true);
    import(`../../locale/${language}.json`)
      .then((res) => setTextSet(res.default))
      .catch(() => Toast.error({ content: "Failed to get language config." }))
      .finally(() => setIsLoading(false));
  }, [language]);

  const languageContextValue = useMemo<LanguageConfig>(
    () => ({
      language,
      setLanguage,
      textSet,
      isLoading,
      isFollowingSystemLanguage,
      isMonoWidthLanguage: MonoWidthLanguage.includes(language),
    }),
    [language, setLanguage, textSet, isLoading, isFollowingSystemLanguage]
  );

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <IntlProvider
        messages={textSet}
        locale={language}
        defaultLocale={FallbackLanguageCode}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguageResponseGuard = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.document.getElementsByTagName("html")[0].lang = language;
  }, [language]);
};
