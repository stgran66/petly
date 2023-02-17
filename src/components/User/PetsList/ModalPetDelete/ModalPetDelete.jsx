import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

import styles from '../../Logout/Logout.styled';

const { deleteUserPet } = userOperations;
const { ModalLogoutWrapp, ModalLogoutTitle, ModalLogoutButtonsGroup, ButtonYes, ButtonNo } = styles;

const ModalPetDelete = ({ setShowModal, petId }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => dispatch(deleteUserPet(petId));

  return (
    <ModalLogoutWrapp>
      <ModalLogoutTitle>Are you sure you want to leave us?</ModalLogoutTitle>
      <ModalLogoutButtonsGroup>
        <ButtonYes type="button" onClick={() => handleDelete(petId)}>
          Yes
        </ButtonYes>
        <ButtonNo type="button" onClick={e => onClose(e)}>
          Cancel
        </ButtonNo>
      </ModalLogoutButtonsGroup>
    </ModalLogoutWrapp>
  );
};

export default ModalPetDelete;
