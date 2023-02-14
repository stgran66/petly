import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import NoticesCategoryList from './notices/NoticesCategoryList';
import Loader from 'components/Loader';
import operations from 'redux/auth/operations';
import select from 'redux/auth/selectors';

const { refreshUser } = operations;
const { selectIsRefreshing } = select;

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const FriendsPage = lazy(() => import('../pages/FriendsPage'));

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
          <Route index element={<Navigate to="sell" replace={true} />} />
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
