import {
  MainContainer,
  ContainerWrapp,
  UserContainer,
  Title,
} from './UserPage.styled';
import { UserData, Logout, PetsData } from '../../components/User';

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
