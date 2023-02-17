import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import { clearState } from 'redux/user/userSlise';
import styles from './Logout.styled';

const { logOut } = operations;
const {
  ModalLogoutWrapp,
  ModalLogoutTitle,
  ModalLogoutButtonsGroup,
  ButtonYes,
  ButtonNo,
} = styles;

const ModalLogout = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearState());
  };

  return (
    <ModalLogoutWrapp>
      <ModalLogoutTitle>Are you sure you want to leave us?</ModalLogoutTitle>
      <ModalLogoutButtonsGroup>
        <ButtonYes type="button" onClick={handleLogOut}>
          Yes
        </ButtonYes>
        <ButtonNo type="button" onClick={e => onClose(e)}>
          Cancel
        </ButtonNo>
      </ModalLogoutButtonsGroup>
    </ModalLogoutWrapp>
  );
};

export default ModalLogout;
