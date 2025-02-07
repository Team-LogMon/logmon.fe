import { RouteObject } from 'react-router';
import { LandingPage } from '@/pages/LandingPage.tsx';
import { ProjectsPage } from '@/pages/ProjectsPage.tsx';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { DashboardPage } from '@/pages/DashboardPage/DashboardPage.tsx';
import { CreateProjectNamePage } from '@/pages/createProjectPages/drawer/CreateProjectNamePage.tsx';
import { SettingsPage } from '@/pages/settings/SettingsPage.tsx';
import { SettingMembersPage } from '@/pages/settings/SettingMembersPage.tsx';
import { SettingsApiKeyPage } from '@/pages/settings/SettingsApiKeyPage.tsx';
import { LogsPage } from '@/pages/LogsPage/LogsPage.tsx';

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
    path: '/app/:pId/logs',
    element: <LogsPage />,
  },
  {
    path: '/app/:pId/settings',
    element: <SettingsPage />,
  },
  {
    path: '/app/:pId/settings/members',
    element: <SettingMembersPage />,
  },
  {
    path: '/app/:pId/settings/key',
    element: <SettingsApiKeyPage />,
  },
  {
    path: '/projects/create',
    element: <CreateProjectNamePage />,
  },
];
