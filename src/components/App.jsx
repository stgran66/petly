import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import { Login, Register, UserPage } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="news" element={<p>news</p>} />
        <Route path="notices" element={<p>notices</p>} />
        <Route path="friends" element={<p>friends</p>} />

        <Route
          path="register"
          element={<RestrictedRoute component={<Register />} redirectTo="/" />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<Login />} redirectTo="/" />}
        />
        <Route
          path="user"
          element={
            <PrivateRoute component={<UserPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
