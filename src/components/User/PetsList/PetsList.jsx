import { useSelector } from 'react-redux';
import userSelectors from 'redux/user/selectors';
import Loader from 'components/Loader';

import styles from './PetsList.styled';
import PetItem from './PetItem';

const { List, Item } = styles;
const { selectUserInfo, selectErrorUser, selectLoadingUser } = userSelectors;

const PetsList = () => {
  const { pets } = useSelector(selectUserInfo);
  console.log(pets);
  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <>
      <List>
        {error && <h2>You don't have any pets yet </h2>}
        {isLoading && <Loader />}
        {pets.lenght > 0 &&
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
