import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import pages from 'pages';

const {
  LoginPage,
  RegisterPage,
  UserPage,
  NewsPage,
  NoticesPage,
  FriendsPage,
} = pages;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices">
          <Route
            path="favorite"
            element={
              <PrivateRoute component={<NoticesPage />} redirectTo="/login" />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute component={<NoticesPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="notices/:category" element={<NoticesPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
        <Route
          path="user"
          element={
            <PrivateRoute component={<UserPage />} redirectTo="/login" />
          }
        />
        <Route
          path="news"
          element={<PrivateRoute component={<NewsPage />} redirectTo="/news" />}
        />
      </Route>
    </Routes>
  );
};
