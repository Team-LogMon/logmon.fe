import { defineConfig } from '@chakra-ui/react';

export const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        'bg.base': { value: { base: '#f8f9fa', _dark: '#0F0F0F' } },
        'bg.panel': { value: { base: 'white', _dark: '#191C1E' } },
        border: {
          DEFAULT: { value: { base: '#d4d4d8', _dark: '#3f3f46' } },
        },
      },
    },
  },
});
