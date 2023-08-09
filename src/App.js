import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from './GlobalStyles';

import { fetchContacts } from './redux/operations';

import { light } from './components/Theme/Theme';
import Layout from './components/Layout/Layout';
import { ContactsList } from './components/ContactsList/ContactsList';
import ContactsListOptions from './components/ContactListOptions/ContactsListOptions';
import AddContactForm from './components/Forms/AddContact';
import Modal from './components/Modal/Modal';
import { Filter } from './components/Filter/Filter';
import ChangeContactForm from './components/Forms/ChangeContact ';
import { ChangeThemeButton } from './components/Theme/TheamButton';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { FavouriteContactsList } from 'components/ContactsList/FavouriteContactsList';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from 'components/Loader';
import ErrorPage from 'components/ErrorPage/ErrorPage';

// import { useMemo } from 'react';
function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  const [showModal, setShowModal] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showChangeForm, setShowChangeForm] = useState(false);
  const isLoading = useSelector(getIsLoading);

  const error = useSelector(getError);

  const handleThemeChange = theme => setSelectedTheme(theme);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const activateAddForm = () => {
    setShowAddForm(true);
  };
  const deActivateAddForm = () => {
    setShowAddForm(false);
  };
  const activateChangeForm = () => {
    setShowChangeForm(true);
  };
  const deActivateChangeForm = () => {
    setShowChangeForm(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={selectedTheme || light}>
      <GlobalStyles />
      <Toaster />
      <Header>
        <ContactsListOptions
          toggleFilter={toggleFilter}
          toggleModal={toggleModal}
          activateAddForm={activateAddForm}
        />
        <ChangeThemeButton handleThemeChange={handleThemeChange} />
      </Header>
      <Layout>
        {error && <ErrorPage />}
        {isLoading && <Loader />}
        <main>
          {showFilter && <Filter />}

          <Routes>
            <Route
              path="/"
              element={
                <ContactsList toggleModal={toggleModal} activateChangeForm={activateChangeForm} />
              }
            />
            <Route
              path="/favouriteContacts"
              element={
                <FavouriteContactsList
                  toggleModal={toggleModal}
                  activateChangeForm={activateChangeForm}
                />
              }
            />

            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>

          {showModal && (
            <Modal
              toggleModal={toggleModal}
              deActivateAddForm={deActivateAddForm}
              deActivateChangeForm={deActivateChangeForm}
            >
              {showAddForm && (
                <AddContactForm deActivateAddForm={deActivateAddForm} toggleModal={toggleModal} />
              )}
              {showChangeForm && (
                <ChangeContactForm
                  toggleModal={toggleModal}
                  deActivateChangeForm={deActivateChangeForm}
                />
              )}
            </Modal>
          )}
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
