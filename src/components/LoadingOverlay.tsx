import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useLoading } from '@/contexts/LoadingContext.tsx';

export const LoadingOverlay: React.FC = () => {
  const { loadingCount } = useLoading();

  if (loadingCount === 0) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="overlay"
      pointerEvents="all"
    >
      <Spinner size="xl" color="white" />
    </Box>
  );
};

export default LoadingOverlay;
