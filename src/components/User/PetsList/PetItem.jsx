import styles from './PetsList.styled';

const { PetInfo, PetInfoComment, PetInfoName, PetInfoFoto, PetInfoWrapp } =
  styles;

const PetItem = () => {
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
          <PetInfoComment>
            <PetInfoName>Comments:</PetInfoName> Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur{' '}
          </PetInfoComment>
        </PetInfo>
        <button type="button">Delete</button>
      </PetInfoWrapp>
    </>
  );
};

export default PetItem;
