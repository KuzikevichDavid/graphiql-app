import { describe, it, expect } from 'vitest';
import loadLocale from './loader';
import { LocaleData, Locales } from './types';

function objectsHaveSameKeys(...objects: object[]) {
  const startValue: string[] = [];
  const allKeys = objects.reduce(
    (prev: string[], object) => prev.concat(Object.keys(object)),
    startValue
  );
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}

describe('Localization loader tests', () => {
  it('All locale JSON files have the same keys', async () => {
    const localesFiles = import.meta.glob('./locales/*.json');
    const filesData = await Promise.all(
      Object.values(localesFiles).map((v) => v() as Promise<LocaleData>)
    );

    const result = objectsHaveSameKeys(...filesData);
    expect(result).toStrictEqual(true);
  });

  it('Is load concrete file', async () => {
    const locale: Locales = 'ru';

    const file = await loadLocale(locale);

    expect(file).toMatchObject({
      lang: 'Русский',
      welcome: 'Добро пожаловать!',
    });
  });

  it('Throw on load not exist file', async () => {
    const fakeFile = 'fake';

    await expect(async () => {
      await loadLocale(fakeFile);
    }).rejects.toThrowError();
  });
});
