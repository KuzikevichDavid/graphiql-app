export enum Locales {
  ru = 'ru',
  en = 'en',
}
export enum Lang {
  ru = 'Русский',
  en = 'English',
}

export interface LocaleData {
  lang: Lang;
  [x: string]: string;
}
