import { useSelector } from 'react-redux';
import { Contact } from '../ContactItem/ContactItem';
import { contacts } from '../../redux/selectors';
import { getStoreFilter } from '../../redux/selectors';
import { StyledList } from './StyledList';

export const ContactsList = ({ toggleModal, activateChangeForm }) => {
  const contactsList = useSelector(contacts);
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
