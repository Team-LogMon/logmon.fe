import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from '@/components/ui/provider.tsx';
import { Theme } from '@chakra-ui/react';
import { LoadingProvider } from '@/contexts/LoadingContext.tsx';
import { useThemeStore } from '@/shared/store/themeStore.ts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Root = () => {
  const appearance = useThemeStore((state) => state.appearance);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Theme appearance={appearance}>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </Theme>
      </Provider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);
