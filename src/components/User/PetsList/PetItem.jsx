import { useState } from 'react';

import styles from './PetsList.styled';

import ModalUser from '../ModalUser';
import ModalPetDelete from './ModalPetDelete';
import ModalPetUpdate from './ModalPetUpdate';

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
  // const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);
  const [showModalPet, setShowModalPet] = useState(false);

  console.log(pet);

  const onClose = () => {
    setShowModal(true);
  };

  const onClosePet = () => {
    setShowModalPet(true);
  };

  return (
    <>
      <PetInfoFoto src={pet.photo} alt="pet foto" />
      <PetInfoWrapp>
        <PetInfo>
          <li>
            <PetInfoName>Name: </PetInfoName> {pet.name}
          </li>
          <li>
            <PetInfoName>Date of birth: </PetInfoName> {pet.birthday}
          </li>
          <li>
            <PetInfoName>Breed: </PetInfoName> {pet.breed}
          </li>
          <li>
            <PetInfoName>Comments:</PetInfoName> {pet.comments}
          </li>
        </PetInfo>

        <PetUpdateButton type="button" onClick={onClosePet}>
          <PetUpdateButtonIcon />
        </PetUpdateButton>

        <PetDeleteButton type="button" onClick={onClose}>
          <PetDeleteIcon />
        </PetDeleteButton>
      </PetInfoWrapp>

      {/* {showModalPet && (
        <ModalUser setShowModal={setShowModalPet}>
          <ModalPetUpdate setShowModalPet={setShowModalPet} pet={pet} />
        </ModalUser>
      )} */}

      {showModal && (
        <ModalUser setShowModal={setShowModal}>
          <ModalPetDelete setShowModal={setShowModal} petId={pet._id} />
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
