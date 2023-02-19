import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthNav from '../AuthNav';
import hooks from 'hooks';
import userSelectors from 'redux/user/selectors';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './UserNav.styled';

const UserNav = ({ hidden, closeBurgerMenu }) => {
  const { NavUser, ButtonEl, PhotoUser } = styles;
  const navigate = useNavigate();
  const { isLoggedIn } = hooks.useAuth();
  const { selectUserInfo } = userSelectors;
  const user = useSelector(selectUserInfo);
  return (
    <NavUser hiddenBlock={hidden}>
      {isLoggedIn ? (
        <ButtonEl
          // startIcon={<AccountCircleIcon />}
          startIcon={<PhotoUser src={user.avatarURL} alt={user.name} />}
          onClick={() => {
            navigate('/user');
            closeBurgerMenu && closeBurgerMenu();
          }}
        >
          {user.name}
        </ButtonEl>
      ) : (
        <AuthNav closeBurgerMenu={closeBurgerMenu} />
      )}
    </NavUser>
  );
};

export default UserNav;
