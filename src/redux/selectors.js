export const contacts = state => {
  //   console.log(state);
  return state.contacts.contacts;
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
