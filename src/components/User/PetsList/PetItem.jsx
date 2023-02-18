import { useState } from 'react';

import styles from './PetsList.styled';

import ModalUser from '../ModalUser';
import ModalPetDelete from './ModalPetDelete';

const {
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
  PetUpdateButton,
  PetUpdateButtonIcon,
} = styles;

const PetItem = ({ pet }) => {
  const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(true);
  };

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

        <PetUpdateButton type="button" onClick={onClose}>
          <PetUpdateButtonIcon />
        </PetUpdateButton>

        <PetDeleteButton type="button" onClick={onClose}>
          <PetDeleteIcon />
        </PetDeleteButton>
      </PetInfoWrapp>

      {showModal && (
        <ModalUser setShowModal={setShowModal}>
          <ModalPetDelete setShowModal={setShowModal} petId={_id} />
        </ModalUser>
      )}
    </>
  );
};

export default PetItem;

// =======================================================================
// <>
//   <PetInfoFoto src={photo} alt="pet foto" />
//   <PetInfoWrapp>
//     <PetInfo>
//       <li>
//         <PetInfoName>Name: </PetInfoName> {name}
//       </li>
//       <li>
//         <PetInfoName>Date of birth: </PetInfoName> {birthday}
//       </li>
//       <li>
//         <PetInfoName>Breed: </PetInfoName> {breed}
//       </li>
//       <li>
//         <PetInfoName>Comments:</PetInfoName> {comments}
//       </li>
//     </PetInfo>
//     <PetDeleteButton type="button" onClick={onClose}>
//       <PetDeleteIcon />
//     </PetDeleteButton>
//   </PetInfoWrapp>

//   {showModal && (
//     <ModalUser setShowModal={setShowModal}>
//       <ModalPetDelete setShowModal={setShowModal} petId={_id} />
//     </ModalUser>
//   )}
// </>
