import loadLocale from '@/localization/loader';
import { Locales } from '@/localization/types';
import { createContext } from 'react';
import { LocalizationContextType } from './types';

const isLocalStorageLocaleExist = localStorage.getItem('locale') === 'ru';

const defaultLocaleData = isLocalStorageLocaleExist
  ? await loadLocale(Locales.ru)
  : await loadLocale(Locales.en);

console.log(defaultLocaleData);
const initValue: LocalizationContextType = {
  localeData: defaultLocaleData,
  locale: isLocalStorageLocaleExist ? Locales.ru : Locales.en,
  setLocale: () => Promise.resolve<void>(undefined),
};

const LocalizationContext = createContext<LocalizationContextType>(initValue);

export default LocalizationContext;
