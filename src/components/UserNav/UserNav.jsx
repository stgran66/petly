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
          variant="outlined"
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
