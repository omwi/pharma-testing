import { NavLink, Outlet } from 'react-router';

import Header from '../ui/header.jsx';

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
