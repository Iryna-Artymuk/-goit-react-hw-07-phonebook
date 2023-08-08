import { useEffect } from 'react';

import { MdClose } from 'react-icons/md';
import { StyledOverlay, StyledModal, ContentWrraper } from './StyledModal';
import { CloseButton } from '../Button/StyledButton';
export default function Modal({
  toggleModal,
  children,
  deActivateAddForm,
  deActivateChangeForm,
}) {
  const closeOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
      deActivateAddForm();
      deActivateChangeForm();
    }
  };

  useEffect(() => {
    const closeOnESC = event => {
      // console.log('event.code : ', event.code);
      if (event.code === 'Escape') {
        toggleModal();
        deActivateAddForm();
        deActivateChangeForm();
      }
    };
    window.addEventListener('keydown', closeOnESC);
    return () => {
      window.removeEventListener('keydown', closeOnESC);
    };
  }, [toggleModal, deActivateAddForm, deActivateChangeForm]);

  return (
    <StyledOverlay onClick={closeOnBackdropClick}>
      {/* <div className={css.modal}> */}
      <StyledModal>
        <ContentWrraper>{children}</ContentWrraper>
        <CloseButton
          closeModalIcon
          onClick={() => {
            deActivateAddForm();
            deActivateChangeForm();
            toggleModal();
          }}
          aria-label="close"
          type="button"
        >
          <MdClose />
        </CloseButton>
      </StyledModal>
    </StyledOverlay>
  );
}
