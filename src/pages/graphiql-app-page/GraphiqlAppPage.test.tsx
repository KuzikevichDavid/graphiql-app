import dataTestId from '@/tests/data-test';
import {
  schemaIsDefinedState,
  schemaNotDefinedState,
} from '@/utils/testUtils/fakes/docsState';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GraphiqlAppPage from './GraphiqlAppPage';

describe('render "GraphiqlAppPage" with fake initial state', () => {
  it('docs "schema" is not defined', () => {
    wrappedRender(<GraphiqlAppPage />, { initialState: schemaNotDefinedState });

    const elem = screen.queryByTestId(dataTestId.documentationSection);
    expect(elem).not.toBeInTheDocument();
  });

  it('docs "schema" is not defined', () => {
    wrappedRender(<GraphiqlAppPage />, { initialState: schemaIsDefinedState });

    const elem = screen.queryByTestId(dataTestId.documentationSection);
    expect(elem).not.toBeInTheDocument();
  });
});
