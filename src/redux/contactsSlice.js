import { createSelector, createSlice } from "@reduxjs/toolkit";

import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder)=> builder;
});
//simple reducers
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
//hard reducers
export const selectVisibleContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, filter) => {
    return (
      contacts?.filter(
        (contact) =>
          contact.name !== undefined &&
          contact.name
            .toLowerCase()
            .includes(filter ? filter.toLowerCase() : "")
      ) || []
    );
  }
);

export default slice.reducer;
