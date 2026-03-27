import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/processes">Processes</NavLink>
      </nav>
    </header>
  );
}
