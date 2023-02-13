import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import user from '../../components/User';
import styles from './UserPage.styled';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import Loader from 'components/Loader';

const { UserData, Logout, PetsData } = user;
const {
  MainContainer,
  ContainerWrappUser,
  ContainerWrappPets,
  UserContainer,
  Title,
} = styles;
const { fetchUserData } = userOperations;

const { selectLoadingUser, selectErrorUser } = userSelectors;

const UserPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);
  // console.log(isLoading);
  // console.log(error);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <MainContainer>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          {' '}
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

// return (
//   <MainContainer>
//     {isLoading && !error ? (
//       <Loader />
//     ) : (
//       <>
//         {' '}
//         <ContainerWrapp>
//           <Title>My information:</Title>
//           <UserContainer>
//             <UserData />
//             <Logout />
//           </UserContainer>
//         </ContainerWrapp>
//         <ContainerWrapp>
//           <PetsData />
//         </ContainerWrapp>
//       </>
//     )}
//   </MainContainer>
// );
