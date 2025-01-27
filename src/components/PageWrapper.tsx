import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';
import { Box } from '@chakra-ui/react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box>
      {children}
      <LoadingOverlay />
    </Box>
  );
};
