import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from '@/components/layouts/app-layout';
import { ProtedectedRoute } from '@/components/layouts/protected-route';

import DashboardRoute from './routes/dashboard/dashboard';
import LoginRoute from './routes/login/login';
import ProcessDetailsRoute from './routes/process-details/process-details';
import ProcessesRoute from './routes/processes/processes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardRoute />} />
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
