import { createBrowserRouter } from 'react-router-dom';
import { DocumentationRouter } from '@/router/DocumentationRouter.tsx';
import { ApplicationRouter } from '@/router/ApplicationRouter.tsx';

export const BaseRouter = createBrowserRouter([
  {
    path: '/',
    children: ApplicationRouter,
  },
  {
    path: '/documentations',
    children: DocumentationRouter,
  },
]);
