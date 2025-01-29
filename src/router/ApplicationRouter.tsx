import { RouteObject } from 'react-router';
import { LandingPage } from '@/pages/LandingPage.tsx';
import { ProjectsPage } from '@/pages/ProjectsPage.tsx';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { DashboardPage } from '@/pages/DashboardPage.tsx';
import { CreateProjectNamePage } from '@/pages/createProjectPages/drawer/CreateProjectNamePage.tsx';

export const ApplicationRouter: RouteObject[] = [
  { path: '', element: <LandingPage /> },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/app/:pId/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/projects/create',
    element: <CreateProjectNamePage />,
  },
];
