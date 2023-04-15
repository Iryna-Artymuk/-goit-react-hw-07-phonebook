import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  'https://643a7f81bd3623f1b9b4b1c4.mockapi.io/myContacts/';

export const fetchContactsData = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('ContactList');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      //thunkAPI  це обєкт в якому є різні методи для роботи з createAsyncThunk
      return thunkAPI.rejectWithValue("sorry can't load your contact list");
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contact/addContact',
  async (newContat, thunkAPI) => {
    try {
      // в методі post передаєм в яке місце на бекенді треба додати обєкт
      // другий аргумент передаємо сам обєкт який треба додати
      // цю функцію імпортужм в форму і передмо значення інпуту
      const response = await axios.post('ContactList', {
        name: newContat.name,
        phone_number: newContat.phone_number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "sorry can't add  new contact to your list"
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`ContactList/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("sorry can't delete contact ");
    }
  }
);
