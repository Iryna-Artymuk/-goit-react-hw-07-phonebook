export const selectStoreContacts = state => {
  //   console.log(state);
  return state.contacts.items;
};
export const selectFiteredContats = state => {
  const contactsList = selectStoreContacts(state);
  const filter = selectStoreFilter(state);
  return contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStoreFilter = state => {
  // console.log(state.filter.searchValue);
  return state.filter.searchValue;
};

export const selectModalStatus = state => {
  return state.modalActive;
};
