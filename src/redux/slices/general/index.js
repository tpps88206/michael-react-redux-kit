import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const slice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    initialize: (state, action) => {
      return initialState;
    },
  },
});

export const { initialize } = slice.actions;

export default slice.reducer;
