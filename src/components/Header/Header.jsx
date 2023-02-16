import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.styled';
import ToggleThemeButton from './ThemeToggle/ThemeToggle';

const Header = () => {
  const { HeaderEl, Logo } = styles;
  return (
    <HeaderEl>
      <Logo to="/">
        pe<span>t</span>ly
      </Logo>
      <ToggleThemeButton />
      <nav>
        <Navigation />
      </nav>
      <BurgerMenu />
    </HeaderEl>
  );
};

export default Header;
