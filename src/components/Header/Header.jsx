import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.styled';
import Logo from './Logo';

const Header = () => {
  const { HeaderEl } = styles;
  return (
    <HeaderEl>
      <Logo />
      <nav>
        <Navigation />
      </nav>
      <BurgerMenu />
    </HeaderEl>
  );
};

export default Header;
