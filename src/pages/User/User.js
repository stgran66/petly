import {
  MainContainer,
  ContainerWrapp,
  UserContainer,
  Title,
} from './User.styled';
import { UserData, Logout, PetsData } from '../../components/User';

export const User = () => {
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
