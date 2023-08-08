// import IconButton from '../Button/Button';
import { useDispatch } from 'react-redux';
import { OptionsList } from './StyledContactListOptions';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { BsSortAlphaDown, BsSortAlphaDownAlt } from 'react-icons/bs';
import { sortAtoZ, sortZtoA } from '../../redux/contactsSlice';
import { IconButton } from '../Button/StyledButton';

export default function ContactsListOptions({
  toggleModal,
  toggleFilter,
  activateAddForm,
}) {
  const dispatch = useDispatch();
  const handelSortAtoZ = () => {
    dispatch(sortAtoZ());
  };
  const handelSortZtoA = () => {
    dispatch(sortZtoA());
  };

  return (
    <OptionsList>
      <li>
        <IconButton
          type="button"
          onClick={() => {
            activateAddForm();
            toggleModal();
          }}
        >
          <MdPersonAdd />
        </IconButton>
      </li>
      <li>
        <IconButton type="button" onClick={toggleFilter}>
          <MdSearch />
        </IconButton>
      </li>
      <li>
        <IconButton type="button" onClick={handelSortAtoZ}>
          <BsSortAlphaDown />
        </IconButton>
      </li>
      <li>
        <IconButton type="button" onClick={handelSortZtoA}>
          <BsSortAlphaDownAlt />
        </IconButton>
      </li>
    </OptionsList>
  );
}
