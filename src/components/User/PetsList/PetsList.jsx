import { useSelector } from 'react-redux';
import userSelectors from 'redux/user/selectors';
import Loader from 'components/Loader';
import ErrorUser from 'components/User/ErrorUser';
import NoPetList from '../NoPetList';

import styles from './PetsList.styled';
import PetItem from './PetItem';

const { PetsListWpapp, PetItemWrapp } = styles;
const { selectUserInfo, selectErrorUser, selectLoadingUser } = userSelectors;

const PetsList = () => {
  const { pets } = useSelector(selectUserInfo);

  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <>
      {pets.length === 0 && <NoPetList />}
      {error && <ErrorUser />}
      {isLoading && <Loader />}
      <PetsListWpapp>
        {pets.length > 0 &&
          pets.map(pet => (
            <PetItemWrapp key={pet._id}>
              <PetItem pet={pet} />
            </PetItemWrapp>
          ))}
      </PetsListWpapp>
    </>
  );
};

export default PetsList;
