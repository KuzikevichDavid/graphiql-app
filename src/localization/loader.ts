import { LocaleData, Locales } from './types';

const localesExt = '.json';
const localesFiles = import.meta.glob('./locales/*.json');

const loadLocale = async (locale: Locales = 'en') => {
  const localeName = `${locale}${localesExt}`;
  const localePath = Object.keys(localesFiles).find((filePath) =>
    filePath.includes(localeName)
  );
  if (localePath) {
    return localesFiles[localePath]() as Promise<LocaleData>;
  }
  throw new Error('Locale file not found');
};

export default loadLocale;
