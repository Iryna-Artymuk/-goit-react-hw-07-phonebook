export const contacts = state => {
  //   console.log(state);
  return state.contacts.contacts;
};
export const favouriteContacts = state => {
  const favouriteContacts = state.contacts.contacts.filter(
    contact => contact.isFavourite
  );
  return favouriteContacts ;
};

export const getStoreFilter = state => {
  // console.log('state: ', state);

  return state.filter.filter;
};

export const getActiveContactId = state => {
  // console.log('state: ', state);

  return state.contacts.activeContactId;
};
export const modalStatus = state => {
  return state.modalActive;
};
