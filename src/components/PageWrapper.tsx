import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';
import { Flex } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster.tsx';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Flex w={'full'} direction={'column'} minH={'100vh'}>
      {children}
      <LoadingOverlay />
      <Toaster />
    </Flex>
  );
};
