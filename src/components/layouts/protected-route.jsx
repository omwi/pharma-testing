import { Navigate, Outlet, useLocation } from 'react-router';

import { useAuth } from '@/features/auth/hooks/useAuth';

export function ProtedectedRoute() {
  const location = useLocation();
  const auth = useAuth();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}
