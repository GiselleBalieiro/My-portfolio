import { Navigate, Route, Routes } from 'react-router-dom';
import PortfolioPage from './component/PortfolioPage';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { AdminPage } from './admin/AdminPage';
import { LoginPage } from './admin/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
