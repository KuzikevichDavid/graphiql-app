import dataTestId from '@/tests/data-test';
import {
  schemaIsDefinedState,
  schemaNotDefinedState,
} from '@/utils/testUtils/fakes/docsState';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Schema from './Schema';

describe('wrapped render "Schema" with fake initial state', () => {
  it('"schema" is not defined', () => {
    wrappedRender(<Schema />, { initialState: schemaNotDefinedState });

    const elem = screen.queryByTestId(dataTestId.docsSchema);
    expect(elem).not.toBeInTheDocument();
  });

  it('"schema" is defined', () => {
    wrappedRender(<Schema />, { initialState: schemaIsDefinedState });

    const elem = screen.getByTestId(dataTestId.docsSchema);
    expect(elem).toBeInTheDocument();
  });
});
