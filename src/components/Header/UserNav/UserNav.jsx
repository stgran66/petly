import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav';
import hooks from 'hooks';
import userSelectors from 'redux/user/selectors';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './UserNav.styled';
const { selectUserInfo } = userSelectors;

const UserNav = ({ hidden, closeBurgerMenu }) => {
  const { NavUser, ButtonEl, PhotoUser } = styles;
  const { isLoggedIn } = hooks.useAuth();
  const user = useSelector(selectUserInfo);
  const navigate = useNavigate();

  return (
    <NavUser hiddenBlock={hidden}>
      {isLoggedIn ? (
        <ButtonEl
          startIcon={
            user?.avatarURL ? (
              <PhotoUser src={user.avatarURL} alt={user.name} />
            ) : (
              <AccountCircleIcon />
            )
          }
          onClick={() => {
            navigate('/user');
            closeBurgerMenu && closeBurgerMenu();
          }}
        >
          {user?.name ? user.name : 'Account'}
        </ButtonEl>
      ) : (
        <AuthNav closeBurgerMenu={closeBurgerMenu} />
      )}
    </NavUser>
  );
};
export default UserNav;
