import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
// import { nanoid } from 'nanoid';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
  changeFavouriteStatus,
} from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,

  // Об'єкт редюсерів
  reducers: {
    setActiveContactId(state, action) {
      state.activeContactId = action.payload;
      console.log(' action.payload: ', action.payload);
    },

    sortAtoZ(state, action) {
      console.log('state: ', state.contacts);

      state.contacts.sort(function (contact1, contact2) {
        return contact1.name.localeCompare(contact2.name);
      });
    },
    sortZtoA(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.contacts.sort(function (contact1, contact2) {
        return contact2.name.localeCompare(contact1.name);
      });
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      // Add user to the state array

      state.contacts = action.payload; // тут буде дата з бекенду
      // state.contacts.isLoading= false
    });
    builder.addCase(fetchContacts.pending, (state, action) => {
      // Add user to the state array
      // state.contacts.isLoading= true // тут буде дата з бекенду
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      // Add user to the state array
      // state.contacts.isLoading= false // тут буде дата з бекенду
      // state.contacts.error = action.payload// тут буде дата з бекенду
    });

    builder.addCase(addContact.pending, (state, action) => {
      // Add user to the state array
      // state.isLoading= true
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = null;

      state.contacts.unshift(action.payload); //  action.payload тут буде дата з бекенду обєкт нового  контакту
      console.log('action.payload: ', action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      // Add user to the state array
      // state.isLoading= true // тут буде дата з бекенду
    });

    builder.addCase(changeContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(changeContact.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = null;

      const contactToChange = state.contacts.find(
        contact => contact.id === state.activeContactId
      );
      // console.log('contactToChange: ', contactToChange);
      // console.log('action.payload: ', action.payload);
      contactToChange.name = action.payload.name;
      contactToChange.phone_number = action.payload.phone_number;
      //  action.payload тут буде дата з бекенду обєкт нового  контакту
    });
    builder.addCase(changeContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // тут буде дата з бекенду
    });

    builder.addCase(changeFavouriteStatus.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(changeFavouriteStatus.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = null;

      const contactToChange = state.contacts.find(
        contact => contact.id === action.payload.id
      );
      // console.log('contactToChange: ', contactToChange);
      // console.log('action.payload: ', action.payload);
      contactToChange.isFavourite = action.payload.isFavourite;

      //  action.payload тут буде дата з бекенду обєкт нового  контакту
    });
    builder.addCase(changeFavouriteStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // тут буде дата з бекенду
    });

    builder.addCase(deleteContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      // куьщму  user from  the state array
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== state.activeContactId
      );
      // state.contacts= state.contacts.filter(contact=>contact.id!== action.payload.id ) action.payload сюди прийде відповідь з бекенду обєкт видаленого контакту

      // console.log('action.payload: ', action.payload);
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // тут буде дата з бекенду
    });
  },
});

// Генератори екшенів
export const { sortAtoZ, sortZtoA, setActiveContactId } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
