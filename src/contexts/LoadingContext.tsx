import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  loadingCount: number;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const showLoading = () => {
    setLoadingCount((prev) => prev + 1);
  };

  const hideLoading = () => {
    setLoadingCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <LoadingContext.Provider value={{ loadingCount, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
