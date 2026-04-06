import { Outlet } from 'react-router';

import Footer from '../ui/footer';
import Header from '../ui/header';

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
