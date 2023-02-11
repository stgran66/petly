import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import user from '../../components/User';
import styles from './UserPage.styled';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';

const { UserData, Logout, PetsData } = user;
const { MainContainer, ContainerWrapp, UserContainer, Title } = styles;
const { fetchUserData } = userOperations;

const { selectUserInfo } = userSelectors;

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

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
};

export default UserPage;
