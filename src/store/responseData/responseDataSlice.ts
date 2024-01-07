import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  responseData: '',
};

const responseDataSlice = createSlice({
  name: 'responseData',
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<string>) => {
      state.responseData = payload;
    },
  },
});

export default responseDataSlice.reducer;
export const { setData } = responseDataSlice.actions;
export type ResponseDataType = typeof initialState;
