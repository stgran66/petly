import styles from './PetsList.styled';
import PetItem from './PetItem';

const { List, Item } = styles;

const PetsList = () => {
  return (
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
  );
  // return pets.map(pet => (
  //   <li key={pet.id}>
  //     <PetsItem item={pet} />
  //     <button type="button">Delete</button>
  //   </li>
  // ));
};

export default PetsList;
