import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';

import { api } from '@/app/api.js';
import { loggedOut } from '@/features/auth/auth-slice.js';

export default function Header() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(loggedOut());
    dispatch(api.util.resetApiState());
  }

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/processes">Processes</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
