import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from '@/components/ui/provider.tsx';
import { Theme } from '@chakra-ui/react';
import { LoadingProvider } from '@/contexts/LoadingContext.tsx';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import { StrictMode } from 'react';

const Root = () => {
  const appearance = useThemeStore((state) => state.appearance);

  return (
    <StrictMode>
      <Provider>
        <Theme appearance={appearance}>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </Theme>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);
