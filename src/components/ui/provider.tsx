'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { customConfig } from '@/theme.ts';

const sys = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={sys}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
