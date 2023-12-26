import { DEFAULT_LOCALE } from '@/constants/defaultLang';
import { LocaleData, Locales } from './types';

const localesExt = '.json';
const localesFiles = import.meta.glob<boolean, string, LocaleData>(
  './locales/*.json'
);

const loadLocale = async (locale: Locales = DEFAULT_LOCALE) => {
  const localeName = `${locale}${localesExt}`;
  const localePath = Object.keys(localesFiles).find((filePath) =>
    filePath.includes(localeName)
  );
  if (localePath) {
    return localesFiles[localePath]();
  }
  throw new Error('Locale file not found');
};

export default loadLocale;
