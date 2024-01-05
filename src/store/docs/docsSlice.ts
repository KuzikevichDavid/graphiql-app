import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocsData, DocsState } from './types';

const initialState: DocsState = {
  endpoint: '',
  isDefined: false,
  isError: false,
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setDocs: {
      reducer: (state, { payload }: PayloadAction<DocsState>) => {
        Object.assign(state, payload);
      },
      prepare: (docsData: DocsData) => ({
        payload: {
          isDefined: !!docsData.schema,
          ...docsData,
        },
      }),
    },
  },
});

export default docsSlice;
export const { setDocs } = docsSlice.actions;
