export type LanguageRegionCode = string;
export type Version = string;
export type Content =
  | string
  | {
      type?: string;
      value: string;
    };
export type ID = string;

export type KatrinaItem = {
  title: Content;
  content: Content;
  id: ID;
};
export type KatrinaGroup = {
  title: Content;
  id: ID;
  contents: KatrinaItem[];
};
export type KatrinaFAQ = { lang: LanguageRegionCode; contents: KatrinaGroup[] };
export type KatrinaConfig = {
  [k: string]: unknown;
};

export type Katrina = {
  sdkVersion: Version;
  contentsVersion: Version;
  contents: KatrinaFAQ[];
  config?: KatrinaConfig;
};
