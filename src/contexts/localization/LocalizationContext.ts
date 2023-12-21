import { DEFAULT_LOCALE } from '@/constants/defaultLang';
import loadLocale from '@/localization/loader';
import { createContext } from 'react';
import { LocalizationContextType } from './types';

const defaultLocaleData = await loadLocale();

const initValue: LocalizationContextType = {
  localeData: defaultLocaleData,
  locale: DEFAULT_LOCALE,
  setLocale: () => Promise.resolve<void>(undefined),
};

const LocalizationContext = createContext<LocalizationContextType>(initValue);

export default LocalizationContext;
