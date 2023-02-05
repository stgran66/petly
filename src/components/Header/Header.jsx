import Navigation from 'components/Navigation';
import { HeaderEl, Logo } from './Header.styled';

function Header() {
  return (
    <HeaderEl>
      <Logo>
        pe<span>t</span>ly
      </Logo>

      <Navigation />
    </HeaderEl>
  );
}

export default Header;
