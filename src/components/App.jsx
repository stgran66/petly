import { Route, Routes } from 'react-router-dom';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <div
              style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
              }}
            >
              React homework template
            </div>
          }
        />
        <Route path="/news" />
        <Route path="/notices" />
        <Route path="/friends" />

        <Route path="/register" element={<RestrictedRoute redirectTo="/" />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/" />} />
        <Route path="user" element={<PrivateRoute redirectTo="/login" />} />
      </Route>
    </Routes>
  );
};
