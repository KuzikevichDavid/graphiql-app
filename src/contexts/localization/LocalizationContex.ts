import { createContext } from "react";
import loadLocale from "../../localization/loader";
import { Locales } from "../../localization/types";
import { LocalizationContextType } from "./types";

const defaultLocale: Locales = "en";

const defaultLocaleData = await loadLocale(defaultLocale);

const initValue: LocalizationContextType = {
  localeData: defaultLocaleData,
  locale: defaultLocale,
  setLocale: () => Promise.resolve<void>(undefined),
};

const LocalizationContext = createContext<LocalizationContextType>(initValue);

export default LocalizationContext;
