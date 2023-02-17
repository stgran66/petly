import { useState } from 'react';

import ModalUser from '../ModalUser';
import ModalLogout from './ModalLogout';
import styles from './Logout.styled';
const { LogoutButton, LogoutIcon } = styles;

const Logout = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(true);
  };

  return (
    <>
      <LogoutButton type="button" onClick={onClose}>
        <LogoutIcon />
        Log Out
      </LogoutButton>
      {showModal && (
        <ModalUser setShowModal={setShowModal}>
          <ModalLogout setShowModal={setShowModal} />
        </ModalUser>
      )}
    </>
  );
};

export default Logout;
