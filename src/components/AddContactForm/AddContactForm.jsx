import { Formik, Field, ErrorMessage, Form } from 'formik';

import * as Yup from 'yup';
import { addNewContact } from '../../redux/operations';
import { selectModalStatus } from '../../redux/selectors';

import { toggleModal } from '../../redux/modalSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Button } from '../Button/Button';

import css from './AddContactForm.module.css';
export const AddContactForm = () => {
  const dispatch = useDispatch();
  const modalActive = useSelector(selectModalStatus);
  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    phone_number: Yup.string()
      .required('Phone is  required')
      .matches(phoneRegExp, 'Phone number is not valid'),
  });

  const handleSubmit = value => {
    console.log(value);
    dispatch(addNewContact(value));
    dispatch(toggleModal(!modalActive));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        phone_number: '',
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
      <Form className={css.form}>
        <label>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </label>
        <ErrorMessage className={css.error} name="name" component="div" />
        <label htmlFor="phone_number">
          Phone number
          <Field
            className={css.input}
            type="tel"
            name="phone_number"
            placeholder="Enter phone number"
          />
        </label>
        <ErrorMessage
          className={css.error}
          name="phone_number"
          component="div"
        />
        <Button type="submit">Add contact </Button>
      </Form>
    </Formik>
  );
};
