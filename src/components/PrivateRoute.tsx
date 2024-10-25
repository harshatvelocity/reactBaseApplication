// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../context/authContext';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
