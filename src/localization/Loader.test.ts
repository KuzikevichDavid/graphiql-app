import { describe, it, expect } from 'vitest';
import loadLocale from './loader';
import objectsHaveSameKeys from '../utils/testUtils/objectsHaveSameKeys';
import { LocaleData, Locales } from './types';

describe('Locales are "ru", "en"', () => {
  it('All locales JSON files have the same keys', async () => {
    const localesFiles: Record<string, () => Promise<LocaleData>> =
      import.meta.glob<boolean, string, LocaleData>('./locales/*.json');
    const filesData: LocaleData[] = await Promise.all(
      Object.values(localesFiles).map((loadFileFn) => loadFileFn())
    );

    const keysAreSame: boolean = objectsHaveSameKeys(...filesData);
    expect(keysAreSame).toBe(true);
  });

  it('Load "ru" locale', async () => {
    const locale: Locales = 'ru';

    const file: LocaleData = await loadLocale(locale);

    expect(file).toMatchObject({
      lang: 'Русский',
      welcome: 'Добро пожаловать!',
    });
  });

  it('Load undefined locale', async () => {
    const file: LocaleData = await loadLocale();

    expect(file).toMatchObject({
      lang: 'English',
      welcome: 'You Are Welcome',
    });
  });

  it('Load not existed file', async () => {
    const fakeLocale = 'fake';

    await expect(async () => {
      await loadLocale(fakeLocale as Locales);
    }).rejects.toThrowError();
  });
});
