import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    infoList: [],
  },
  reducers: {
    setInfoList(state, action) {
      state.infoList =  action.payload.infoList;
    }
  }
});

export const infoActions = infoSlice.actions;

export default infoSlice;
