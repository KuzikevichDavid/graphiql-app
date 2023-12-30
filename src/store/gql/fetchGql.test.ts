import {
  FAKE_DATA,
  FAKE_DATA_VARIABLES,
} from '@/utils/testUtils/server/serverHandlers';
import { describe, it, expect } from 'vitest';
import fetchGql, { JSON_INDENTATION } from './fetchGql';

describe('Send graphQL query', () => {
  const query = 'fake query';
  const url = 'https://fake_url.com';

  it('Variables section missing', async () => {
    const expectData = JSON.stringify(
      { data: FAKE_DATA },
      null,
      JSON_INDENTATION
    );

    const data = await fetchGql(url, {
      query,
      variables: '',
    });

    expect(data).toBe(expectData);
  });

  it('Variables section present', async () => {
    const variables = 'fake var';
    const expectData = JSON.stringify(
      { data: FAKE_DATA_VARIABLES },
      null,
      JSON_INDENTATION
    );

    const data = await fetchGql(url, { query, variables });

    expect(data).toBe(expectData);
  });
});
