import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GqlState, HeaderIdentityItem, HeadersPayload } from './types';

const initialState: GqlState = {
  endpoint: '',
  body: { query: '', variables: '' },
  headers: new Headers(),
  mappedHeaders: [],
};

const gqlSlice = createSlice({
  name: 'gql',
  initialState,
  reducers: {
    setEndpoint: (state, { payload }: PayloadAction<string>) => {
      state.endpoint = payload;
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.body.query = payload;
    },
    setVariables: (state, { payload }: PayloadAction<string>) => {
      state.body.variables = payload;
    },
    setHeaders: {
      reducer: (state, { payload }: PayloadAction<HeadersPayload>) => {
        state.headers = payload.headers;
        state.mappedHeaders = payload.mappedHeaders;
      },
      prepare: (mappedHeaders: HeaderIdentityItem[]) => ({
        payload: {
          headers: new Headers(
            mappedHeaders
              .filter((header) => header.name.length > 0)
              .map((header) => [header.name, header.value])
          ),
          mappedHeaders,
        },
      }),
    },
  },
});

export const { setHeaders, setEndpoint, setQuery, setVariables } =
  gqlSlice.actions;
export default gqlSlice;
