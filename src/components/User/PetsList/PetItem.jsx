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

const PetItem = ({ pet }) => {
  const { name, birthday, breed, photo, comments } = pet;
  // const dispatch = useDispatch();

  // const handleDelete = () => dispatch(deleteUserPet(pet.id));
  // додати на кнопку onClick = { handleDelete };

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
        <PetDeleteButton type="button">
          <PetDeleteIcon />
        </PetDeleteButton>
      </PetInfoWrapp>
    </>
  );
};

export default PetItem;
