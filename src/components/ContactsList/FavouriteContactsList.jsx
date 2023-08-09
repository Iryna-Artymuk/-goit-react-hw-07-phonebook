import { useSelector } from 'react-redux';
import { Contact } from '../ContactItem/ContactItem';
import { favouriteContacts } from '../../redux/selectors';
import { getStoreFilter } from '../../redux/selectors';
import { StyledList } from './StyledList';

export const FavouriteContactsList = ({ toggleModal, activateChangeForm }) => {
  const contactsList = useSelector(favouriteContacts);
  // console.log('contactsList : ', contactsList);
  const filter = useSelector(getStoreFilter);
  // console.log('filter: ', filter);

  const filteredContacts = contactsList?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <StyledList>
      {filteredContacts?.map(contactData => (
        <Contact
          activateChangeForm={activateChangeForm}
          toggleModal={toggleModal}
          key={contactData.id}
          data={contactData}
        />
      ))}
    </StyledList>
  );
};
