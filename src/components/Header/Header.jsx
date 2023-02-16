import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.styled';

const Header = () => {
  const { HeaderEl, Logo } = styles;
  return (
    <HeaderEl>
      <div data-aos="zoom-in-down" data-aos-duration="500">
        <Logo to="/">
          pe
          <span>t</span>
          ly
        </Logo>
      </div>
      <nav>
        <Navigation />
      </nav>
      <BurgerMenu />
    </HeaderEl>
  );
};

export default Header;
