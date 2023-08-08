import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://643a7f81bd3623f1b9b4b1c4.mockapi.io/myContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ContactList');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formValues, thunkAPI) => {
    // console.log('newContact: ', newContact);
    // newContact сюди приходить дані з форми
    const newContact = {
      name: formValues.name,
      phone_number: formValues.phone_number,
      isFavourite: false,
      // avatar:null,
    };
    try {
      const response = await axios.post('ContactList', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (newContactData, thunkAPI) => {
    // console.log('newContactData: ', newContactData);

    try {
      const response = await axios.put(
        `/ContactList/${newContactData.id}`,
        newContactData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeFavouriteStatus = createAsyncThunk(
  'contacts/changeFavouriteStatus',
  async (newContactData, thunkAPI) => {
    console.log('newContactData: ', newContactData);

    // const newStatus=null
    try {
      const response = await axios.put(
        `/ContactList/${newContactData.id}`,
        newContactData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/ContactList/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
