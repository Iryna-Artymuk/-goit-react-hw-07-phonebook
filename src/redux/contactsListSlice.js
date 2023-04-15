import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsData,
  addNewContact,
  deleteContact,
} from '../redux/operations';

const handelPendingstatus = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log(action.payload);
};
const contactsListSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    sortAtoZ(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      // console.log(action);
      state.items.sort(function (contact1, contact2) {
        return contact1.name.localeCompare(contact2.name);
      });
    },
    sortZtoA(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.items.sort(function (contact1, contact2) {
        return contact2.name.localeCompare(contact1.name);
      });
    },
  },
  extraReducers: {
    [fetchContactsData.pending]: handelPendingstatus,
    [fetchContactsData.rejected]: handleRejected,
    [addNewContact.pending]: handelPendingstatus,
    [addNewContact.rejected]: handleRejected,
    [deleteContact.pending]: handelPendingstatus,
    [deleteContact.rejected]: handleRejected,

    [fetchContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const { sortAtoZ, sortZtoA } = contactsListSlice.actions;
export const contactsReducer = contactsListSlice.reducer;
