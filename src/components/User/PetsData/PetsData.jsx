import PetsList from '../PetsList';
import styles from './PetsData.styled';
const { ContainerWrapp, Title, UserPetAddButton, PetAddIcon } = styles;

const PetsData = () => {
  // state = {
  //   isModalOpen: false,
  // };
  // openModal = () => this.setState({ isModalOpen: true });
  // closeModal = () => this.setState({ isModalOpen: false });

  // додати на кнопку onClick={this.openModal} та в код умову:
  // {
  //   isModalOpen && (
  //     <Modal
  //       largeImageLink={largeImageLink}
  //       other={other}
  //       closeModal={this.closeModal}
  //     />
  //   );
  // }

  return (
    <>
      <ContainerWrapp>
        <Title>My pets:</Title>
        <UserPetAddButton type="button">
          Add pet <PetAddIcon />
        </UserPetAddButton>
      </ContainerWrapp>
      <PetsList />
    </>
  );
};

export default PetsData;
