import { PetsList } from './PetsList';
import { ContainerWrapp, Title } from './PetsData.styled';

export const PetsData = () => {
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
