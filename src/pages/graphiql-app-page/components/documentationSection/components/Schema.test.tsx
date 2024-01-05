import { DocsState } from '@/store/docs/types';
import dataTestId from '@/tests/data-test';
import { TestRootState } from '@/utils/testUtils/provider';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Schema from './Schema';

describe('wrapped render "Schema" with fake initial state', () => {
  const docs: DocsState = {
    endpoint: 'fake',
    isDefined: false,
    isError: false,
  };

  it('"schema" is not defined', () => {
    const initialState: TestRootState = {
      docs,
    };

    wrappedRender(<Schema />, { initialState });

    const elem = screen.queryByTestId(dataTestId.docsSchema);
    expect(elem).not.toBeInTheDocument();
  });

  it('"schema" is defined', () => {
    const fakeGeneralType = { name: '' };
    const fakeDocs = {
      mutationType: fakeGeneralType,
      queryType: fakeGeneralType,
      subscriptionType: fakeGeneralType,
      types: [],
    };
    const initialState: TestRootState = {
      docs: {
        ...docs,
        schema: fakeDocs,
      },
    };

    wrappedRender(<Schema />, { initialState });

    const elem = screen.getByTestId(dataTestId.docsSchema);
    expect(elem).toBeInTheDocument();
  });
});
