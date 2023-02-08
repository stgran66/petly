import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.styled';
import Header from '../Header';
const Layout = () => {
  const { Container } = styles;
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default Layout;
