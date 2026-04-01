import { NavLink, Outlet } from 'react-router';

import Container from '../ui/container';
import Footer from '../ui/footer';
import Header from '../ui/header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
