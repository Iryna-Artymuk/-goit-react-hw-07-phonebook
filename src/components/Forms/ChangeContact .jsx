import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


import { getActiveContactId, contacts } from '../../redux/selectors';
import {
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLable,
} from './StyledForm';
import IconButton from '../Button/Button';
import { changeContact } from '../../redux/operations';

export default function ChangeContactForm({
  toggleModal,
  deActivateChangeForm,
}) {
  const activeContactId = useSelector(getActiveContactId);

  const contactsList = useSelector(contacts);

  const getDefaultName = () => {
    // console.log('activeContactId: ', activeContactId);
    // console.log('contactsList: ', contactsList);
    const activeContact = contactsList.find(
      contact => contact.id === activeContactId
    );

    // console.log('activeContact: ', activeContact);
    return activeContact?.name;
  };
  const getDefaultNumber = () => {
    const activeContact = contactsList.find(
      contact => contact.id === activeContactId
    );
    return activeContact.phone_number;
  };
  const [defaultName] = useState(() => getDefaultName());
  const [defaultNumber] = useState(() => getDefaultNumber());

  const dispatch = useDispatch();

  // const phoneRegExp =
  //   /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    phone_number: Yup.string()
      .required('Phone is  required')
      // .matches(phoneRegExp, 'Phone number is not valid'),
  });

  const handleSubmit = value => {
    console.log({ id: activeContactId, ...value });
    dispatch(changeContact({ id: activeContactId, ...value }));
    toggleModal();
    deActivateChangeForm();
  };
  return (
    <Formik
      initialValues={{
        name: defaultName,
        phone_number: defaultNumber,
      }}
      // по сабміту форми буде відправлятись action
      // в payload якого буде новий обєкт контакту
      // contactsReducer буде обробляти цей action і додавати новий контакт в список сонтаків
      onSubmit={(value, action) => {
        handleSubmit(value);
        action.resetForm();
      }}
      validationSchema={ContactValidationSchema}
    >
      <StyledForm
      //   className={css.form}
      >
        <StyledLable>
          Name
          <StyledField
            // className={css.input}
            type="text"
            name="name"
            autoFocus
          />
        </StyledLable>
        <StyledErrorMessage
          // className={css.error}
          name="name"
          component="div"
        />
        <StyledLable htmlFor="phone_number">
          Phone number
          <StyledField
            // className={css.input}
            type="tel"
            name="phone_number"
          />
        </StyledLable>
        <StyledErrorMessage
          //   className={css.error}
          name="phone_number"
          component="div"
        />
        <IconButton type="submit"> Change contact </IconButton>
      </StyledForm>
    </Formik>
  );
}
