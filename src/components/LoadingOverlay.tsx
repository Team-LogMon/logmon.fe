import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useLoading } from '@/contexts/LoadingContext.tsx';

export const LoadingOverlay: React.FC = () => {
  const { loadingCount } = useLoading();

  if (loadingCount === 0) return null;

  return (
    <Center
      position={'fixed'}
      top={'0'}
      left={'0'}
      width={'100vw'}
      height={'100vh'}
      zIndex={'9999'}
      pointerEvents={'all'}
      bg={'bg.inverted/15'}
    >
      <Spinner size={'xl'} color={'blue'} />
    </Center>
  );
};

export default LoadingOverlay;
