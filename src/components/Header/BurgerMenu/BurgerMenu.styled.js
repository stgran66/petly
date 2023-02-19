import { styled } from '@mui/system';

const Burger = styled('div')`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

const BurgerStyle = {
  /* Position and sizing of burger button */
  bmBurgerButton: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    top: '16px',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bmIcon: {
    width: '30px',
    height: '30px',
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

  bmMenuWrap: {
    position: 'fixed',
    top: 0
  },
  
  bmMenu: {
    position: 'relative',
    top: '70px',
  },

  bmItemList: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    marginTop: '60px',
    height: '400px',
  },
};
const styles = { Burger, BurgerStyle };
export default styles;
