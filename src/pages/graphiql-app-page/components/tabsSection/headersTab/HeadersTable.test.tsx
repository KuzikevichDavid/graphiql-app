import dataTestId from '@/tests/data-test';
import { TestRootState } from '@/utils/testUtils/provider';
import { FAKE_DOCS_URL } from '@/utils/testUtils/server/serverHandlers';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { randomId } from '@mui/x-data-grid-generator';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import HeadersTable from './HeadersTable';

describe('wrapped render "DocsButtons" with initial endpoint', () => {
  const fakeHeaderName = 'Fake_header';
  const fakeHeaderValue = 'fake_value';
  const fakeHeader = { name: fakeHeaderName, value: fakeHeaderValue };

  it.skip('User click on "Get docs button"', async () => {
    const endpoint = FAKE_DOCS_URL;
    const initialState: TestRootState = {
      gql: {
        endpoint,
        body: { query: 'fake_query' },
        mappedHeaders: [
          {
            id: randomId(),
            ...fakeHeader,
          },
        ],
      },
    };
    const user = userEvent.setup();

    const { store } = wrappedRender(<HeadersTable />, { initialState });
    const elem = screen.getByTestId(dataTestId.DownloadForOfflineIcon);
    await user.click(elem);

    await waitFor(() => {
      expect(store.getState().docs.schema).toBeDefined();
    });
  });

  it('User create header', async () => {
    const initialState: TestRootState = {
      gql: {
        endpoint: 'fake_enpoint',
        body: { query: 'fake_query' },
      },
    };
    const user = userEvent.setup();

    const { store } = wrappedRender(<HeadersTable />, { initialState });
    const addBtn = screen.getByTestId(dataTestId.headersAddHeader);
    await user.click(addBtn);
    await user.paste(fakeHeaderName);
    const saveBtn = screen.getByTestId(dataTestId.headersSave);
    await user.click(saveBtn);

    await waitFor(() => {
      const header = store.getState().gql.headers?.get(fakeHeaderName);
      expect(header).toBe('');
    });
  });
});
