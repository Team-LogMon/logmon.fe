import './App.css';
import './shared/css/hideScrollbar.css';
import { RouterProvider } from 'react-router';
import { BaseRouter } from '@/router/BaseRouter.tsx';

function App() {
  return <RouterProvider router={BaseRouter} />;
}

export default App;
