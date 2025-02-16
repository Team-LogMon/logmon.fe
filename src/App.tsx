import './App.css';
import './shared/css/hideScrollbar.css';
import './shared/css/noDrag.css';
import { RouterProvider } from 'react-router';
import { BaseRouter } from '@/router/BaseRouter.tsx';
import { useEffect } from 'react';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';

function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();

    fetchUser().then(() => {
      hideLoading();
    });
  }, []);

  return <RouterProvider router={BaseRouter} />;
}

export default App;
