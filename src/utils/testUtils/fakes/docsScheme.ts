import {
  FullType,
  Field,
  TypeRef,
} from '@/pages/graphiql-app-page/components/documentationSection/components/types';

export const FAKE_DESCRIPTION = 'fake description';
export const FAKE_NAME = 'fake name';
export const FAKE_KIND = 'fake kind';

const fakePartialObject = {
  description: FAKE_DESCRIPTION,
  name: FAKE_NAME,
  kind: FAKE_KIND,
};

const fakeType: TypeRef = {
  ofType: null,
  ...fakePartialObject,
};

export const fakeField: Field = {
  args: [
    {
      type: fakeType,
      ...fakePartialObject,
    },
  ],
  type: fakeType,
  ...fakePartialObject,
};

export const fakeFullTypeData: FullType = {
  description: 'fake description',
  kind: 'fake kind',
  name: 'fake name',
  fields: [fakeField],
  inputFields: [fakeField],
  enumValues: [fakePartialObject],
};
