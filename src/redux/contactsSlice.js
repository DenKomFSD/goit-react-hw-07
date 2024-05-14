import { createSelector, createSlice } from "@reduxjs/toolkit";

import { selectTextFilter } from "./filtersSlice";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }),
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
