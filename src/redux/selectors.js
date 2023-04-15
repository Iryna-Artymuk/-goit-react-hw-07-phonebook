export const selectStoreContacts = state => {
  //   console.log(state);
  return state.contacts.items;
};

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const getStoreFilter = state => {
  // console.log(state.filter.searchValue);
  return state.filter.searchValue;
};

export const getModalStatus = state => {
  return state.modalActive;
};
