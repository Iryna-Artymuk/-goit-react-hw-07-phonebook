import { MdClose } from 'react-icons/md';
import { BsFillTelephoneFill, BsFillPencilFill } from 'react-icons/bs';

import {
  Card,
  CardAvatar,
  CardInfo,

  CardTitle,
  CardSubtitle,
  Options,
} from './StyledContactItem';

import { useDispatch } from 'react-redux';
import {  setActiveContactId } from '../../redux/contactsSlice';
import { IconButton } from '../Button/StyledButton';
import { deleteContact } from '../../redux/operations';
export const Contact = ({ data, toggleModal, activateChangeForm }) => {
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(setActiveContactId(data.id));

dispatch(deleteContact(data.id));
  };
  const addActiveIdtoStore = () => {
    // console.log(data.id);
    dispatch(setActiveContactId(data.id));
  };
  return (
    <li>
      <Card>
        <CardInfo>
          <CardAvatar avatar={data.avatar}>{/* <img src={avatar} alt="" /> */}</CardAvatar>
            <CardTitle> {data.name}</CardTitle>
            <CardSubtitle> {data.phone_number}</CardSubtitle>
          <Options>
            <a href={`tel:${data.phone_number}`}>
              <IconButton type="button" onClick={addActiveIdtoStore}>
                <BsFillTelephoneFill size={24} />
              </IconButton>
            </a>

            <IconButton
              type="button"
              onClick={() => {
                activateChangeForm();
                addActiveIdtoStore();
                toggleModal();
              }}
            >
              <BsFillPencilFill />
            </IconButton>
            <IconButton type="button" onClick={handelDelete}>
              <MdClose size={24} />
            </IconButton>
          </Options>
        </CardInfo>
      </Card>
    </li>
  );
};
//  {/* <ContactWrapper>
//       <ContactInfo>
//         <p>{data.name}</p>
//         <p>{data.phone_number}</p>
//       </ContactInfo>

//       <IconButton type="button" onClick={handelClick}>
//         <MdClose size={24} />
//       </IconButton>
//     </ContactWrapper> */}
