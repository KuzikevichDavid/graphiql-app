import dataTestId from '@/tests/data-test';
import { TestRootState } from '@/utils/testUtils/provider';
import { FAKE_DOCS_URL } from '@/utils/testUtils/server/serverHandlers';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import DocsButtons from './DocsButtons';

describe('wrapped render "DocsButtons" with initial endpoint', () => {
  it('User click on "Get docs button"', async () => {
    const endpoint = FAKE_DOCS_URL;
    const initialState: TestRootState = {
      docs: { endpoint, isDefined: false, isError: false },
      gql: { endpoint, body: { query: 'fake_query' } },
    };
    const user = userEvent.setup();

    const { store } = wrappedRender(<DocsButtons />, { initialState });
    const elem = screen.getByTestId(dataTestId.DownloadForOfflineIcon);
    await user.click(elem);

    await waitFor(() => {
      expect(store.getState().docs.schema).toBeDefined();
    });
  });

  it('when bad endpoint and user click on "Get docs button"', async () => {
    const endpoint = 'bad_endpoint';
    const initialState: TestRootState = {
      docs: { endpoint, isDefined: false, isError: false },
      gql: { endpoint, body: { query: 'fake_query' } },
    };
    const user = userEvent.setup();

    const { store } = wrappedRender(<DocsButtons />, { initialState });
    const elem = screen.getByTestId(dataTestId.DownloadForOfflineIcon);
    await user.click(elem);

    await waitFor(() => {
      expect(store.getState().docs.isError).toBe(true);
    });
  });
});
