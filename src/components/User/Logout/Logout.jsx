// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import styles from './Logout.styled';
const { LogoutButton, LogoutIcon } = styles;

const Logout = () => {
  return (
    // const dispatch = useDispatch();
    //   const { user } = useAuth();

    //   const handleLogOut = () => dispatch(logOut());

    //  додати на кнопку: onClick={handleLogOut}

    <>
      <LogoutButton type="button">
        <LogoutIcon />
        Log Out
      </LogoutButton>
    </>
  );
};

export default Logout;
