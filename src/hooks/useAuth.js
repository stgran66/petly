import { useSelector } from 'react-redux';
import selectors from '../redux/auth/selectors';

const useAuth = () => {
  return {
    user: useSelector(selectors.selectUser),
    isLoggedIn: useSelector(selectors.selectIsLoggedIn),
    isRefreshing: useSelector(selectors.selectIsRefreshing),
    error: useSelector(selectors.selectError),
  };
};
export default useAuth;
