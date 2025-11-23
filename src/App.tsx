import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from './features/public/layouts/PublicLayout';
import { HomePage } from './features/public/pages/HomePage';
import { AboutPage } from './features/public/pages/AboutPage';
import { ActivitiesPage } from './features/public/pages/ActivitiesPage';
import { PostListPage } from './features/public/pages/PostListPage';
import { PostDetailPage } from './features/public/pages/PostDetailPage';
import { AdminLayout } from './features/admin/layouts/AdminLayout';
import { DashboardPage } from './features/admin/pages/DashboardPage';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="articles" element={<PostListPage />} />
        <Route path="articles/:slug" element={<PostDetailPage />} />
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
