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
import { isAnyOf } from '@reduxjs/toolkit/dist';
const handelPending = state => {
  state.isLoading = true;
};
const handelRejected = (state, action) => {
  // console.log('action.payload: ', action.payload);
  state.isLoading = false;
  state.error = action.payload;
};
const handelFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};
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
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload; // тут буде дата з бекенду
      // state.contacts.isLoading= false
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.unshift(action.payload); //  action.payload тут буде дата з бекенду обєкт нового  контакту
      console.log('action.payload: ', action.payload);
    });

    builder.addCase(changeContact.fulfilled, (state, action) => {
      const contactToChange = state.contacts.find(contact => contact.id === state.activeContactId);
      // console.log('contactToChange: ', contactToChange);
      // console.log('action.payload: ', action.payload);
      contactToChange.name = action.payload.name;
      contactToChange.phone_number = action.payload.phone_number;
      //  action.payload тут буде дата з бекенду обєкт нового  контакту
    });

    builder.addCase(changeFavouriteStatus.fulfilled, (state, action) => {
      const contactToChange = state.contacts.find(contact => contact.id === state.activeContactId);

      contactToChange.isFavourite = action.payload.isFavourite;
      // console.log('contactToChange: ', contactToChange);
      // console.log('action.payload: ', action.payload);
      //  action.payload тут буде дата з бекенду обєкт нового  контакту
    });

    builder
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== state.activeContactId);
        // state.contacts= state.contacts.filter(contact=>contact.id!== action.payload.id ) action.payload сюди прийде відповідь з бекенду обєкт видаленого контакту

        // console.log('action.payload: ', action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          // changeFavouriteStatus.pending,
          changeContact.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handelPending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          changeFavouriteStatus.rejected,
          changeContact.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handelRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          changeFavouriteStatus.fulfilled,
          changeContact.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handelFulfilled
      );
  },
});

// Генератори екшенів
export const { sortAtoZ, sortZtoA, setActiveContactId } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
