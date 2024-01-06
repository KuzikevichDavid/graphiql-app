import { TestRootState } from '../provider';

export const schemaNotDefinedState: TestRootState = {
  docs: {
    endpoint: 'fake',
    isDefined: false,
    isError: false,
  },
};

const fakeGeneralType = { name: '' };
const fakeDocs = {
  mutationType: fakeGeneralType,
  queryType: fakeGeneralType,
  subscriptionType: fakeGeneralType,
  types: [],
};
export const schemaIsDefinedState: TestRootState = {
  docs: {
    endpoint: 'fake',
    isDefined: false,
    isError: false,
    schema: fakeDocs,
  },
};
