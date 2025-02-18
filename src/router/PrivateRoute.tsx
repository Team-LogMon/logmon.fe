import { useAuthStore } from '@/shared/store/authStore.ts';
import { Navigate, Outlet, useLocation } from 'react-router';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';

export const PrivateRoute = () => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const location = useLocation();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return user != null ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};
