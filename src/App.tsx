import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from './features/public/layouts/PublicLayout';
import { HomePage } from './features/public/pages/HomePage';
import { AdminLayout } from './features/admin/layouts/AdminLayout';
import { DashboardPage } from './features/admin/pages/DashboardPage';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        {/* Add more public routes here */}
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        {/* Add more admin routes here */}
      </Route>
    </Routes>
  );
}

export default App;
