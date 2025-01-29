import { createBrowserRouter } from 'react-router';
import { ApplicationRouter } from '@/router/ApplicationRouter.tsx';
import { DocumentationRouter } from '@/router/DocumentationRouter.tsx';

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
