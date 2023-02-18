import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.styled';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';

import Logo from './Logo';


const Header = () => {
  const { HeaderEl } = styles;
  return (
    <HeaderEl>
      <Logo />
      <nav>
        <Navigation />
      </nav>
      <ThemeToggleButton></ThemeToggleButton>
      <BurgerMenu />
    </HeaderEl>
  );
};

export default Header;
