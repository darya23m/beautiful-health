import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
  },
  reducers: {
    setContactsList(state, action) {
      state.contactsList =  action.payload.contactsList;
    }
  }
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
