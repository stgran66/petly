import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import user from '../../components/User';
import styles from './UserPage.styled';
import userSelectors from 'redux/user/selectors';
import userOperations from 'redux/user/operations';

const { UserData, Logout, PetsData } = user;
const { MainContainer, ContainerWrapp, UserContainer, Title } = styles;
const { selectUserInfo } = userSelectors;
const { fetchUserData } = userOperations;

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  console.log(user);

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
