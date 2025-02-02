import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';
import { Flex } from '@chakra-ui/react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Flex w={'full'} h={'100vh'} direction={'column'}>
      {children}
      <LoadingOverlay />
    </Flex>
  );
};
