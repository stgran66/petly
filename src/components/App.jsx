import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import pages from 'pages';
import NoticesCategoryList from './notices/NoticesCategoryList';

const { LoginPage, RegisterPage, UserPage, NewsPage, NoticesPage } = pages;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path=":category" element={<NoticesCategoryList />}></Route>
        </Route>
        <Route path="friends" element={<p>friends</p>} />

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
