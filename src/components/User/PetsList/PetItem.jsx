import styles from './PetsList.styled';
import { useDispatch } from 'react-redux/es/exports';
import userOperations from 'redux/user/operations';

const { deleteUserPet } = userOperations;

const {
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
} = styles;

const PetItem = ({ pet }) => {
  const { _id, name, birthday, breed, photo, comments } = pet;
  // console.log(pet);
  const dispatch = useDispatch();

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
        <PetDeleteButton
          type="button"
          onClick={() => {
            dispatch(deleteUserPet(_id));
          }}
        >
          <PetDeleteIcon />
        </PetDeleteButton>
      </PetInfoWrapp>
    </>
  );
};

export default PetItem;
