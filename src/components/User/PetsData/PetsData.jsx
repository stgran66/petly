import PetsList from '../PetsList';
import styles from './PetsData.styled';
const { ContainerWrapp, Title } = styles;

const PetsData = () => {
  return (
    <>
      <ContainerWrapp>
        <Title>My pets:</Title>
        <button type="button">Add pet</button>
      </ContainerWrapp>
      <PetsList />
    </>
  );
};

export default PetsData;
