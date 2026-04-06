import { Outlet } from 'react-router';

import Footer from '../ui/footer/footer';
import Header from '../ui/header/header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
