import { NavLink, Outlet } from 'react-router';

import Header from '../ui/header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
