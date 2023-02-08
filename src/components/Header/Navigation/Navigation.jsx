import Nav from '../Nav'
import UserNav from '../UserNav';

const Navigation = ({ hidden, closeBurgerMenu }) => {
  return (
    <>
      <Nav closeBurgerMenu={closeBurgerMenu} />

      <UserNav hidden={hidden} closeBurgerMenu={closeBurgerMenu} />
    </>
  );
};

export default Navigation;
