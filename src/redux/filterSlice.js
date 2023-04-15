import { createSlice } from '@reduxjs/toolkit';
const initialFilter = {
  searchValue: '',
  sortValue: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    // очікується що в action.payload при відправці action  в фільтрі події onchange відправиться актуальне значення
    // фільтру яке reducer запише в store
    setfilter(state, action) {
      console.log(state.filter);
      // так як це слайс то в state запишеться значення яке відноситься тільки до цього слайсу
      state.searchValue = action.payload;
    },
  },
});

export const { setfilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
