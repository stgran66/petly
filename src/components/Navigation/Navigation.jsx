import Nav from 'components/Nav';
import UserNav from 'components/UserNav';

const Navigation = ({ hidden, closeBurgerMenu }) => {
  return (
    <>
      <Nav closeBurgerMenu={closeBurgerMenu} />

      <UserNav hidden={hidden} closeBurgerMenu={closeBurgerMenu} />
    </>
  );
};

export default Navigation;
