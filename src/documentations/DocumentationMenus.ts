import { IDocumentItem } from '@/documentations/types.ts';

export const DocumentationMenus: IDocumentItem[] = [
  {
    name: 'Home',
    link: '/',
    inner: [
      {
        name: 'Introduction',
        link: '/',
      },
      {
        name: 'Getting Started',
        link: '/getting-started',
      },
    ],
  },
  {
    name: 'API',
    link: '/api',
    inner: [
      {
        name: 'REST API',
        link: '/api/rest',
      },
      {
        name: 'Sample Code',
        link: '/api/sample',
      },
    ],
  },
  {
    name: 'Console',
    link: '/console',
    inner: [
      {
        name: 'Logging',
        link: '/console/logging',
      },
      {
        name: 'Notification',
        link: '/console/notification',
      },
    ],
  },
];

export const findRootName = (innerName: string) => {
  for (const outer of DocumentationMenus) {
    if (outer.inner) {
      for (const inner of outer.inner) {
        if (inner.name === innerName) {
          return outer.name;
        }
      }
    }
  }
  return 'none';
};
