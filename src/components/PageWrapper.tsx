import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';
import { Flex } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster.tsx';
import { useThemeStore } from '@/shared/store/themeStore.ts';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const appearance = useThemeStore((state) => state.appearance);
  return (
    <Flex w={'full'} direction={'column'} minH={'100vh'} bg={'bg.base'}>
      {children}
      <LoadingOverlay />
      <Toaster appearance={appearance} />
    </Flex>
  );
};
