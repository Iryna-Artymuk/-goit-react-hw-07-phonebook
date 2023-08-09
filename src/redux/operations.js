import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios';

axios.defaults.baseURL = 'https://643a7f81bd3623f1b9b4b1c4.mockapi.io/myContacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/ContactList');
    return response.data;
  } catch (error) {
    toast.error('This is an error!');
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContact', async (formValues, thunkAPI) => {
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
    response && toast.success('Successfully added ');
    return response.data;
  } catch (error) {
    toast.error('This is an error!');
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (newContactData, thunkAPI) => {
    // console.log('newContactData: ', newContactData);

    try {
      const response = await axios.put(`/ContactList/${newContactData.id}`, newContactData);
      response && toast.success('Successfully changed');
      return response.data;
    } catch (error) {
      toast.error('This is an error!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeFavouriteStatus = createAsyncThunk(
  'contacts/changeFavouriteStatus',
  async (newContactData, thunkAPI) => {
    // const newStatus=null
    try {
      const response = await axios.put(`/ContactList/${newContactData.id}`, newContactData);
      newContactData.isFavourite
        ? toast.success('Successfully added to favourite')
        : toast.success('Successfully removed from favourite');
      return response.data;
    } catch (error) {
      toast.error('This is an error!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/ContactList/${id}`);
    response && toast.success('Successfully removed ');
    return response.data;
  } catch (error) {
    toast.error('This is an error!');
    return thunkAPI.rejectWithValue(error);
  }
});
