import { useSelector } from 'react-redux';
import { selectStoreContacts } from '../../redux/selectors';
import { getStoreFilter } from '../../redux/selectors';
import { ContactItem } from './ContactItem/ContactItem';

import css from './ContactList.module.css';
export const ContactsList = data => {
  // console.log(data);
  const contactsList = useSelector(selectStoreContacts);
  const filter = useSelector(getStoreFilter);
  // console.log(filter);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contactData => (
        <ContactItem key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};
