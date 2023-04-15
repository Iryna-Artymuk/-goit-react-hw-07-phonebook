import { MdClose } from 'react-icons/md';
import IconButton from '../../Button/IconButton';
import { deleteContact } from '../../../redux/operations';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

export const ContactItem = ({ data }) => {
  //   console.log(data);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(deleteContact(data.id));
  };
  return (
    <li
      style={{
        width: '100%',
      }}
    >
      <div className={css.contactWrapper}>
        <img src={data.avatar} alt={'contact avatar'} width={100} />
        <p>{data.name}</p>
        <p>{data.phone_number}</p>
        <IconButton onClick={handelClick}>
          <MdClose size={24} />
        </IconButton>
      </div>
    </li>
  );
};
