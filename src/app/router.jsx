import { BrowserRouter, Route, Routes } from 'react-router';

import AppLayout from '@/components/layouts/app-layout.jsx';

import AuthRoute from './routes/auth.jsx';
import DashboardRoute from './routes/dashboard.jsx';
import HomeRoute from './routes/home.jsx';
import ProcessDetailsRoute from './routes/process-details.jsx';
import ProcessesRoute from './routes/processes.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/auth" element={<AuthRoute />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/processes" element={<ProcessesRoute />} />
          <Route path="/processes/:id" element={<ProcessDetailsRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
