export type Locales = "ru" | "en" | undefined;
export type Lang = "Русский" | "English";

export interface LocaleData {
  lang: Lang;
  [x: string]: string;
}
