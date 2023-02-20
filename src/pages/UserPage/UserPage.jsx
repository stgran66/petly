import { useSelector } from 'react-redux';

import user from '../../components/User';
import styles from './UserPage.styled';
import userSelectors from 'redux/user/selectors';
import Loader from 'components/Loader';

const { UserData, Logout, PetsData } = user;
const { MainContainer, ContainerWrappUser, ContainerWrappPets, UserContainer, Title } = styles;

const { selectLoadingUser, selectErrorUser } = userSelectors;

const UserPage = () => {
  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <MainContainer>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          <ContainerWrappUser>
            <Title>My information:</Title>
            <UserContainer>
              <UserData />
              <Logout />
            </UserContainer>
          </ContainerWrappUser>
          <ContainerWrappPets>
            <PetsData />
          </ContainerWrappPets>
        </>
      )}
    </MainContainer>
  );
};

export default UserPage;
