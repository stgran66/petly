import user from '../../components/User';
import styles from './UserPage.styled';

const { UserData, Logout, PetsData } = user;
const { MainContainer, ContainerWrapp, UserContainer, Title } = styles;

const UserPage = () => {
  return (
    <MainContainer>
      <ContainerWrapp>
        <Title>My information:</Title>
        <UserContainer>
          <UserData />
          <Logout />
        </UserContainer>
      </ContainerWrapp>
      <ContainerWrapp>
        <PetsData />
      </ContainerWrapp>
    </MainContainer>
  );

  // return (
  //   <>
  //     <MainContainer>
  //       <UserData />
  //       <PetsData />
  //     </MainContainer>
  //   </>
  // );
};

export default UserPage;
