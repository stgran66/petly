import NoListWrapp from './NoPetList.styled';
import noListImg from '../../../images/addPet.png';

const NoPetList = () => {
  return (
    <NoListWrapp>
      <h3>Add your first pet! </h3>
      <img src={noListImg} alt="page_not_found" />
    </NoListWrapp>
  );
};

export default NoPetList;
