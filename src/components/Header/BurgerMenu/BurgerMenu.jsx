import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Navigation from '../Navigation';
import styles from './BurgerMenu.styled';

const BurgerMenu = () => {
  const { Burger, BurgerStyle } = styles;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return (
    <Burger id="burger">
      <Menu
        outerContainerId={'burger'}
        width={'100%'}
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        styles={{
          ...BurgerStyle,
          bmMenuWrap: { top: '0', background: ({theme}) => console.log(theme) },
        }}
        right
        noOverlay
        customBurgerIcon={<MenuIcon sx={{ color: theme => theme.colors.text }} />}
        customCrossIcon={<CloseIcon sx={{ color: theme => theme.colors.text }} />}
        itemListElement="div"
      >
        <Navigation hidden closeBurgerMenu={closeMenu} />
      </Menu>
    </Burger>
  );
};

export default BurgerMenu;
