import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { QueryArgs } from '../types';
import { HeaderItem } from './types';

const initialState: QueryArgs = {
  endpoint: '',
  body: { query: '', variables: '' },
  headers: new Headers(),
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
    addHeader: (
      state,
      { payload: { name, value } }: PayloadAction<HeaderItem>
    ) => {
      state.headers?.set(name, value);
    },
    removeHeader: (state, { payload }: PayloadAction<string>) => {
      state.headers?.delete(payload);
    },
  },
});

export const { addHeader, setEndpoint, setQuery, setVariables } =
  gqlSlice.actions;
export default gqlSlice.reducer;
