import { useNavigate } from 'react-router-dom';
import AuthNav from 'components/AuthNav';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './UserNav.styled';
import hooks from 'hooks';

function UserNav({ hidden, closeBurgerMenu }) {
  const { NavUser, ButtonEl } = styles;
  const navigate = useNavigate();
  const { isLoggedIn } = hooks.useAuth();

  return (
    <NavUser hiddenBlock={hidden}>
      {isLoggedIn ? (
        <ButtonEl
          sx={{
            padding: '8px 36px',
            fontFamily: theme => console.log(theme),
            fontSize: '14px',
            lineHeight: '19px',
            letterSpacing: '0.04em',
            border: '2px solid #f59256',
            color: '#fff',
            backgroundColor: '#f59256',
            borderRadius: '40px',
            textTransform: 'inherit',
            ':hover': {
              border: '2px solid #f59256',
              backgroundColor: '#f59256',
              color: '#fff',
            },
          }}
          startIcon={<AccountCircleIcon />}
          onClick={() => {
            navigate('/user');
            closeBurgerMenu && closeBurgerMenu();
          }}
        >
          Account
        </ButtonEl>
      ) : (
        <AuthNav closeBurgerMenu={closeBurgerMenu} />
      )}
    </NavUser>
  );
}

export default UserNav;
