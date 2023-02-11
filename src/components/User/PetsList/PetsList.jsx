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
      {error && <h2>You don't have any pets yet </h2>}
      {isLoading && <Loader />}
      <List>
        <Item>
          <PetItem />
        </Item>
        <Item>
          <PetItem />
        </Item>
        <Item>
          <PetItem />
        </Item>
        <Item>
          <PetItem />
        </Item>
      </List>
    </>
  );

  // return pets.map(pet => (
  //   <li key={pet.id}>
  //     <PetsItem item={pet} />
  //     <button type="button">Delete</button>
  //   </li>
  // ));
};

export default PetsList;
