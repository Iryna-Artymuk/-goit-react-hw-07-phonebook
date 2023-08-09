import { MdClose } from 'react-icons/md';
import { BsFillTelephoneFill, BsFillPencilFill } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';

import {
  Card,
  CardAvatar,
  CardInfo,
  CardTitle,
  CardSubtitle,
  Options,
  StyledLabel,
} from './StyledContactItem';

import { useDispatch } from 'react-redux';
import { setActiveContactId } from '../../redux/contactsSlice';
import { IconButton } from '../Button/StyledButton';
import { changeFavouriteStatus, deleteContact } from '../../redux/operations';
// import { useEffect } from 'react';
// import { contacts, getActiveContactId } from 'redux/selectors';
export const Contact = ({ data, toggleModal, activateChangeForm }) => {
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(setActiveContactId(data.id));

    dispatch(deleteContact(data.id));
  };
  const handlFavourite = () => {
    const updateContactData = {
      id: data.id,
      isFavourite: !data.isFavourite,
    };
    dispatch(setActiveContactId(data.id));
    // console.log('data.id: ', data.id);

    dispatch(changeFavouriteStatus(updateContactData));
  };
  //
  const addActiveIdtoStore = () => {
    // console.log(data.id);
    // console.log('data.id: ', data.id);
    dispatch(setActiveContactId(data.id));
  };
  // console.log(data);
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
              <BsFillPencilFill size={24} />
            </IconButton>
            <IconButton type="button" onClick={handelDelete}>
              <MdClose size={24} />
            </IconButton>
            <StyledLabel>
              <input
                type="checkbox"
                checked={data.isFavourite}
                onChange={handlFavourite}
                title="Add to favourite"
              />

              <AiTwotoneStar size={24} />
            </StyledLabel>

            {/* 
         
            <StyledInput
              type="checkbox"
              id="fafourite-toggle"
              value={data.id}
              onChange={data => {
                handlFavourite(data);
              }}
              checked={data.isFavourite}
              // onChange={event => {
              //   console.log('event: ', event);

              //   handlFavourite();
              // }}
            />
            <StyledLabel htmlFor="fafourite-toggle">
              <AiTwotoneStar size={24} />
            </StyledLabel>
            {/* </IconButton> */}
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
