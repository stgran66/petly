import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

import styles from './ModalPetDelete.styled';

const { deleteUserPet } = userOperations;
const {
  ModalDeletePetWrapp,
  ModalDeletePetTitle,
  ModalDeletePetButtonsGroup,
  ButtonYes,
  ButtonNo,
  ButtonDeletePetIcon,
} = styles;

const ModalPetDelete = ({ setShowModal, petId }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteUserPet(petId));
    onClose();
  };

  return (
    <ModalDeletePetWrapp>
      <ModalDeletePetTitle>Are you sure you want to delete the card?</ModalDeletePetTitle>
      <ModalDeletePetButtonsGroup>
        <ButtonYes type="button" onClick={() => handleDelete(petId)}>
          Yes <ButtonDeletePetIcon />
        </ButtonYes>
        <ButtonNo type="button" onClick={e => onClose(e)}>
          No <ButtonDeletePetIcon />
        </ButtonNo>
      </ModalDeletePetButtonsGroup>
    </ModalDeletePetWrapp>
  );
};

export default ModalPetDelete;
