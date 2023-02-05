import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BurgerMenu from 'components/BurgerMenu';

import Header from './Header';
const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <BurgerMenu />
    </>
  );
};
export default Layout;
