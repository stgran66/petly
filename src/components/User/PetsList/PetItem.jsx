import styles from './PetsList.styled';
// import { useDispatch } from 'react-redux/es/exports';
// import { deleteUserPet } from 'redux/operations';

const {
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
} = styles;

const PetItem = () => {
  // const dispatch = useDispatch();

  // const handleDelete = () => dispatch(deleteUserPet(pet.id));
  // додати на кнопку onClick = { handleDelete };

  return (
    <>
      <PetInfoFoto />
      <PetInfoWrapp>
        <PetInfo>
          <li>
            <PetInfoName>Name:</PetInfoName> Jack
          </li>
          <li>
            <PetInfoName>Date of birth:</PetInfoName> 22.04.2018
          </li>
          <li>
            <PetInfoName>Breed:</PetInfoName> Basenji
          </li>
          <li>
            <PetInfoName>Comments:</PetInfoName> Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur{' '}
          </li>
        </PetInfo>
        <PetDeleteButton type="button">
          <PetDeleteIcon />
        </PetDeleteButton>
      </PetInfoWrapp>
    </>
  );
};

export default PetItem;
