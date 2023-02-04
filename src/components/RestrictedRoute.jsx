import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //add logic when redux state is done
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
