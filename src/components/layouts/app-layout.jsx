import { NavLink, Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/processes">Processes</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
