import { describe, it, expect } from 'vitest';
import { TypeRef } from './types';
import mapType, { ParsedType } from './mapType';

const listOfNonNull: TypeRef = {
  kind: 'LIST',
  name: null,
  ofType: {
    kind: 'NON_NULL',
    name: null,
    ofType: {
      kind: 'FAKE_TYPE',
      name: 'FAKE_NAME',
      ofType: null,
    },
  },
};

const scalar: TypeRef = {
  kind: 'SCALAR',
  name: 'String',
  ofType: null,
};

const nonNull: TypeRef = {
  kind: 'NON_NULL',
  name: null,
  ofType: {
    kind: 'SCALAR',
    name: 'String',
    ofType: null,
  },
};

const nonNullListOfNonNull: TypeRef = {
  kind: 'NON_NULL',
  name: null,
  ofType: {
    kind: 'LIST',
    name: null,
    ofType: {
      kind: 'NON_NULL',
      name: null,
      ofType: {
        kind: 'FAKE_TYPE',
        name: 'FAKE_NAME',
        ofType: null,
      },
    },
  },
};

describe('Predefined "TypeRef"', () => {
  it.each<[string, TypeRef, ParsedType]>([
    [
      'list Of Non Null',
      listOfNonNull,
      { type: '[FAKE_TYPE!]', name: 'FAKE_NAME' },
    ],
    ['scalar', scalar, { type: 'SCALAR', name: 'String' }],
    ['non Null scalar', nonNull, { type: 'SCALAR!', name: 'String' }],
    [
      'non Null list Of Non Null',
      nonNullListOfNonNull,
      { type: '[FAKE_TYPE!]!', name: 'FAKE_NAME' },
    ],
  ])('"TypeRef" is "%s" type', (_, type: TypeRef, expected: ParsedType) => {
    const mapped = mapType(type);

    expect(mapped.name).toBe(expected.name);
    expect(mapped.type).toBe(expected.type);
  });
});
