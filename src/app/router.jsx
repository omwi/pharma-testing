import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router';

import AppLayout from '@/components/layouts/app-layout.jsx';
import { useAuth } from '@/hooks/useAuth.js';

import DashboardRoute from './routes/dashboard.jsx';
import HomeRoute from './routes/home.jsx';
import LoginRoute from './routes/login.jsx';
import ProcessDetailsRoute from './routes/process-details.jsx';
import ProcessesRoute from './routes/processes.jsx';

function ProtedectedRoute() {
  const location = useLocation();
  const auth = useAuth();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route element={<ProtedectedRoute />}>
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/processes" element={<ProcessesRoute />} />
            <Route path="/processes/:id" element={<ProcessDetailsRoute />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
