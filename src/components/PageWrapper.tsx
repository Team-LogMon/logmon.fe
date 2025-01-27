import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay.tsx';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      {children}
      <LoadingOverlay />
    </>
  );
};
