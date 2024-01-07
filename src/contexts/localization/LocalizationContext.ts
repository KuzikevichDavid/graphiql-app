import loadLocale from '@/localization/loader';
import { Locales } from '@/localization/types';
import { createContext } from 'react';
import { LocalizationContextType } from './types';

const storedLocale = localStorage.getItem('locale') as Locales | null;
const isLocalStorageLocaleExists =
  storedLocale && Object.values(Locales).includes(storedLocale);

const defaultLocaleData = isLocalStorageLocaleExists
  ? await loadLocale(Locales[storedLocale])
  : await loadLocale(Locales.en);

const initValue: LocalizationContextType = {
  localeData: defaultLocaleData,
  locale: isLocalStorageLocaleExists ? Locales[storedLocale] : Locales.en,
  setLocale: () => Promise.resolve<void>(undefined),
};

const LocalizationContext = createContext<LocalizationContextType>(initValue);

export default LocalizationContext;
