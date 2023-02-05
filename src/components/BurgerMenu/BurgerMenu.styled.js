import styled from 'styled-components';

export const Burger = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const BurgerStyle = {
  /* Position and sizing of burger button */
  bmBurgerButton: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    top: '16px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bmIcon: {
    width: '35px',
    height: '35px',
  },

  /* Color/shape of close button cross */
  bmCrossButton: {
    width: '40px ',
    height: '40px',
    top: '16px ',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bmCross: {
    width: '35px',
    height: '35px',
  },
  /* General sidebar styles */
  bmMenu: {
    width: '100%',
    background: '#fdf7f2',
    padding: '104px 0 35px',
  },

  bmItemList: {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: ' auto !important',
  },
  bmMenuWrap: {
    position: 'fixed',
    right: 0,
    top: 0,
    left: 0,
    zIndex: 1100,
    transition: 'all 0.5s ease 0s',
    bottom: 0,
  },
};
