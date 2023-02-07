import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import hooks from 'hooks';
import styles from './Logout.styled';
const { LogoutButton, LogoutIcon } = styles;

const { logOut } = operations;
const { useAuth } = hooks;

console.log(useAuth);
const Logout = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
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
