import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.styled';

const Header = () => {
  const { HeaderEl, Logo } = styles;
  return (
    <HeaderEl>
      <Logo to="/">
        pe<span>t</span>ly
      </Logo>
      <nav>
        <Navigation />
      </nav>
      <BurgerMenu />
    </HeaderEl>
  );
};

export default Header;
