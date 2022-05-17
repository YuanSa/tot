import {
  FC,
  useCallback,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { useLocalStorageState } from "ahooks";
import { LocalStorageKey } from "../constants/LocalStorage";
import { IntlProvider } from "react-intl";
import {
  FallbackLanguageCode,
  getTextSet,
  LanguageConfig,
  LanguageContext,
  normalizeLanguageCode,
  TextSet,
} from "./Language";

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [textSet, setTextSet] = useState<TextSet>({});

  const [localLanguage, setLocalLanguage] = useLocalStorageState(
    LocalStorageKey.language
  );
  const setLanguage = useCallback(
    (target?: any) => {
      setLocalLanguage(normalizeLanguageCode(target));
    },
    [setLocalLanguage]
  );
  const systemLanguage = navigator.language;
  const isFollowingSystemLanguage = !localLanguage;
  const language = useMemo(
    () =>
      normalizeLanguageCode(localLanguage) ||
      normalizeLanguageCode(systemLanguage) ||
      FallbackLanguageCode,
    [localLanguage, systemLanguage]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.document.getElementsByTagName("html")[0].lang = language;
    // TODO: set date-fns locale
    setIsLoading(true);
    getTextSet(language)
      .then((res) => setTextSet(res))
      // .catch(() => Toast.error({ content: "Failed to get language config." }))
      .finally(() => setIsLoading(false));
  }, [language]);

  const languageContextValue = useMemo<LanguageConfig>(
    () => ({
      language,
      setLanguage,
      textSet,
      isLoading,
      isFollowingSystemLanguage,
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
