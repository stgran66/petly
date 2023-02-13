import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import pages from 'pages';
import NoticesCategoryList from './notices/NoticesCategoryList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader';
import operations from 'redux/auth/operations';
import select from 'redux/auth/selectors';

const { refreshUser } = operations;
const { selectIsRefreshing } = select;

const {
  HomePage,
  LoginPage,
  RegisterPage,
  UserPage,
  NewsPage,
  NoticesPage,
  FriendsPage,
} = pages;

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />}>
          <Route index element={<Navigate to="sell" />} />
          <Route path=":category" element={<NoticesCategoryList />} />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                component={<NoticesCategoryList />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute
                component={<NoticesCategoryList />}
                redirectTo="/login"
              />
            }
          />
        </Route>
        <Route path="friends" element={<FriendsPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/user" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
          }
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
