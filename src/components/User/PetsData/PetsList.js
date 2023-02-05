import { List, Item } from './PetsData.styled';
import { PetItem } from './PetItem';

export const PetsList = () => {
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
