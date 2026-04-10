import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from '@/components/layouts/app-layout';
import { ProtedectedRoute } from '@/components/layouts/protected-route';

import LoginRoute from './routes/login/login';

const DashboardRoute = lazy(() => import('./routes/dashboard/dashboard'));

const ProcessDetailsRoute = lazy(
  () => import('./routes/process-details/process-details'),
);
const ProcessesRoute = lazy(() => import('./routes/processes/processes'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginRoute />} />
          <Route element={<ProtedectedRoute />}>
            <Route path="/" element={<DashboardRoute />} />
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
