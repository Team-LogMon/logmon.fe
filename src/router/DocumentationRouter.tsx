import { RouteObject } from 'react-router';
import { DHome } from '@/documentations/items/DHome.tsx';
import { DGettingStarted } from '@/documentations/items/DGettingStarted.tsx';

export const DocumentationRouter: RouteObject[] = [
  { path: '', element: <DHome /> },
  { path: 'getting-started', element: <DGettingStarted /> },
];
