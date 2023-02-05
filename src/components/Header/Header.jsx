import Navigation from 'components/Navigation';
import styles from './Header.styled';

const Header = () => {
  const { HeaderEl, Logo } = styles;
  return (
    <HeaderEl>
      <Logo>
        pe<span>t</span>ly
      </Logo>

      <Navigation />
    </HeaderEl>
  );
};

export default Header;
