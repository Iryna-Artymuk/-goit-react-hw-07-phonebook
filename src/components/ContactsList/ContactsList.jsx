import { useSelector } from 'react-redux';
import { selectFiteredContats } from '../../redux/selectors';

import { ContactItem } from './ContactItem/ContactItem';

import css from './ContactList.module.css';
export const ContactsList = data => {
  // console.log(data);

  // console.log(filter);

  const filteredContacts = useSelector(selectFiteredContats);
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contactData => (
        <ContactItem key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};
