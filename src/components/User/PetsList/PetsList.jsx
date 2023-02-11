import { useSelector } from 'react-redux';
import userSelectors from 'redux/user/selectors';
import Loader from 'components/Loader';
import NotFound from 'components/notices/NotFound';
import NoPetList from 'components/User/noPetList';

import styles from './PetsList.styled';
import PetItem from './PetItem';

const { List, Item } = styles;
const { selectUserInfo, selectErrorUser, selectLoadingUser } = userSelectors;

const PetsList = () => {
  const { pets } = useSelector(selectUserInfo);
  console.log(pets);
  console.log(pets.length);

  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <>
      {pets.length === 0 && <NoPetList />}
      {error && <NotFound />}
      {isLoading && <Loader />}
      <List>
        {pets.length > 0 &&
          pets.map(pet => (
            <Item key={pet._id}>
              <PetItem pet={pet} />
            </Item>
          ))}
      </List>
    </>
  );
};

export default PetsList;
