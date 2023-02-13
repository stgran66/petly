import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import styles from './Logout.styled';
import { clearState } from 'redux/user/userSlise';
const { LogoutButton, LogoutIcon } = styles;

const { logOut } = operations;

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearState());
  };

  return (
    <>
      <LogoutButton type="button" onClick={handleLogOut}>
        <LogoutIcon />
        Log Out
      </LogoutButton>
    </>
  );
};

export default Logout;
