import { useState, useEffect } from 'react';

import { Layout } from 'components/Layout/Layout';
import { ContactsList } from '../ContactsList/ContactsList';
import { AddContactForm } from '../AddContactForm/AddContactForm';
import Modal from '../Modal/Modal';

import IconButton from '../Button/IconButton';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { BsSortAlphaDown } from 'react-icons/bs';

import { Filter } from '../Filter/Filter';
import { Sort } from '../Sort/Sort';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectModalStatus,
  selectIsLoading,
  selectError,
  selectStoreContacts,
} from '../../redux/selectors';
import { fetchContactsData } from '../../redux/operations';

import { toggleModal } from '../../redux/modalSlice';

import css from './App.module.css';

export const App = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

  const modalActive = useSelector(selectModalStatus);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsList = useSelector(selectStoreContacts);
  const dispatch = useDispatch();
  // console.log(modalActive);
  const modalAction = () => {
    dispatch(toggleModal(!modalActive));
  };

  const toggleSort = () => {
    setActiveSort(!activeSort);
  };

  const toggleFilter = () => setActiveFilter(!activeFilter);
  useEffect(() => {
    //  викликаєм   dispatch(getTodos()) при загрузці сторінки ( монтуванні компонкнта App)
    // і так як  результаом  виклику  getTodos() є інша функція яка очікує  dispatch як параметр він туди передається автоматично
    // або можна підставти    dispatch(getTodos( dispatch));
    // і виконуються функція з файлу operations.js яка робить
    //   робиться асинхронний запит на бекенд щоб отримати список завданні і передати payload який reducer запише в state
    // також відправляє  всі інші  екшени

    dispatch(fetchContactsData());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <Filter activeFilter={activeFilter} />
        <Sort activeSort={activeSort} />

        <IconButton
          onClick={toggleSort}
          type="button"
          aria-label=" sort contacts by name"
          sortButton
        >
          <BsSortAlphaDown />
        </IconButton>
        <IconButton
          onClick={toggleFilter}
          type="button"
          aria-label=" find contact by name"
          searchButton
        >
          <MdSearch />
        </IconButton>
        <IconButton
          onClick={modalAction}
          type="button"
          aria-label=" add contact"
          addContactButton
        >
          <MdPersonAdd />
        </IconButton>

        {modalActive && (
          <Modal togglModal={modalAction}>
            <AddContactForm />
          </Modal>
        )}
        <div>
          {isLoading && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}
        </div>
        {contactsList && <ContactsList />}
      </div>
    </Layout>
  );
};
