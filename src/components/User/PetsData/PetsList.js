export const PetsData = () => {
  return pets.map(pet => (
    <li key={pet.id}>
      <PetsItem item={pet} />
      <button type="button">Delete</button>
    </li>
  ));
};
