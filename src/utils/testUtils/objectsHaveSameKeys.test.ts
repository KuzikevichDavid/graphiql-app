import { describe, it, expect } from 'vitest';
import objectsHaveSameKeys from './objectsHaveSameKeys';

describe('Array of objects have 3 members with the same keys', () => {
  const mockArr: object[] = [
    {
      key1: 'object1 key1 value',
      key2: 'object1 key2 value',
      key3: 'object1 key3 value',
    },
    {
      key1: 'object2 key1 value',
      key2: 'object2 key2 value',
      key3: 'object2 key3 value',
    },
    {
      key1: 'object3 key1 value',
      key2: 'object3 key2 value',
      key3: 'object3 key3 value',
    },
  ];

  it('Comparing the keys', () => {
    const keysAreSame = objectsHaveSameKeys(...mockArr);

    expect(keysAreSame).toBe(true);
  });
});

describe('Array of objects have 3 members with different keys', () => {
  const mockArr: object[] = [
    {
      key1: 'object1 key1 value',
      key2: 'object1 key2 value',
      key3: 'object1 key3 value',
    },
    {
      key1: 'object2 key1 value',
      otherKey: 'otherKey value',
      key3: 'object2 key3 value',
    },
    {
      key1: 'object3 key1 value',
      key2: 'object3 key2 value',
      otherKey2: 'therKey2 value',
    },
  ];

  it('Comparing the keys', () => {
    const keysAreSame = objectsHaveSameKeys(...mockArr);

    expect(keysAreSame).toBe(false);
  });
});
