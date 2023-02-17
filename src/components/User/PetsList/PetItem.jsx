import { useState } from 'react';
import styles from './PetsList.styled';
// import { useDispatch } from 'react-redux/es/exports';
// import userOperations from 'redux/user/operations';

import ModalUser from '../ModalUser';
import ModalPetDelete from './ModalPetDelete';

// const { deleteUserPet } = userOperations;

const { PetInfo, PetInfoName, PetInfoFoto, PetInfoWrapp, PetDeleteButton, PetDeleteIcon } = styles;

const PetItem = ({ pet }) => {
  const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(true);
  };
  // const dispatch = useDispatch();

  // const handleDelete = () => dispatch(deleteUserPet(_id));

  return (
    <>
      <PetInfoFoto src={photo} alt="pet foto" />
      <PetInfoWrapp>
        <PetInfo>
          <li>
            <PetInfoName>Name: </PetInfoName> {name}
          </li>
          <li>
            <PetInfoName>Date of birth: </PetInfoName> {birthday}
          </li>
          <li>
            <PetInfoName>Breed: </PetInfoName> {breed}
          </li>
          <li>
            <PetInfoName>Comments:</PetInfoName> {comments}
          </li>
        </PetInfo>
        <PetDeleteButton type="button" onClick={onClose}>
          <PetDeleteIcon />
        </PetDeleteButton>

        {showModal && (
          <ModalUser setShowModal={setShowModal}>
            <ModalPetDelete setShowModal={setShowModal} petId={_id} />
          </ModalUser>
        )}
      </PetInfoWrapp>
    </>
  );
};

export default PetItem;
