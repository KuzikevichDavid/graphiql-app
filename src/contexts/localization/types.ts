import { LocaleData, Locales } from "../../localization/types";

export interface LocalizationContextType {
  locale: Locales;
  setLocale: (locale: Locales) => Promise<void>;
  localeData: LocaleData;
}
