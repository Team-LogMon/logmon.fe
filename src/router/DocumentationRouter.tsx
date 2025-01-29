import { RouteObject } from 'react-router';
import { DHome } from '@/documentations/pages/DHome.tsx';
import { DGettingStarted } from '@/documentations/pages/DGettingStarted.tsx';
import { DRestApi } from '@/documentations/pages/DRestApi.tsx';
import { DSampleCode } from '@/documentations/pages/DSampleCode.tsx';
import { DLogging } from '@/documentations/pages/DLogging.tsx';
import { DNotification } from '@/documentations/pages/DNotification.tsx';

export const DocumentationRouter: RouteObject[] = [
  { path: '', element: <DHome /> },
  { path: 'getting-started', element: <DGettingStarted /> },
  { path: 'api/rest', element: <DRestApi /> },
  { path: 'api/sample', element: <DSampleCode /> },
  { path: 'console/logging', element: <DLogging /> },
  { path: 'console/notification', element: <DNotification /> },
];
