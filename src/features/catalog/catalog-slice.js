import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
  },
  reducers: {
    setCatalogItems(state, action) {
      state.items =  action.payload.items;
    }
  }
});

export const catalogActions = catalogSlice.actions;

export default catalogSlice;
