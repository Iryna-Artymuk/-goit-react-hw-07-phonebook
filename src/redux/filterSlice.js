import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';
// console.log(' filterInitialState: ', filterInitialState);

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
    // очікується що в action.payload при відправці action  в фільтрі події onchange відправиться актуальне значення
    // фільтру яке reducer запише в store
    setfilter(state, action) {
      //   console.log(state.filter);
      // так як це слайс то в state запишеться значення яке відноситься тільки до цього слайсу
      //   action.payload сюди передається значення  input     dispatch(changeFilter(event.currentTarget.value.toLowerCase()));
      // setfilter action з  filterSlice

      console.log('action.payload: ', action.payload);

      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { setfilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
