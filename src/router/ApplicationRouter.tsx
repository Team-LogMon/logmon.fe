import { RouteObject } from 'react-router';
import { LandingPage } from '@/pages/LandingPage.tsx';
import { ProjectsPage } from '@/pages/ProjectsPage.tsx';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { DashboardPage } from '@/pages/project/DashboardPage.tsx';
import { CreateProjectNamePage } from '@/pages/createProjectPages/drawer/CreateProjectNamePage.tsx';
import { SettingsPage } from '@/pages/project/SettingsPage.tsx';

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
    path: '/app/:pId/settings',
    element: <SettingsPage />,
  },
  {
    path: '/projects/create',
    element: <CreateProjectNamePage />,
  },
];
