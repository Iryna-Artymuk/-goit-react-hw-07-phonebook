import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsListSlice';
import { filterReducer } from '../redux/filterSlice';
import { modalReducer } from '../redux/modalSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    modalActive: modalReducer,
  },
});
