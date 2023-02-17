import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import operations from 'redux/auth/operations';
import ModalUser from '../ModalUser';
import ModalLogout from './ModalLogout';
import styles from './Logout.styled';
// import { clearState } from 'redux/user/userSlise';
const { LogoutButton, LogoutIcon } = styles;

// const { logOut } = operations;

const Logout = () => {
  // const dispatch = useDispatch();
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
