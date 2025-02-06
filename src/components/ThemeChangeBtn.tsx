import { Icon, IconButton } from '@chakra-ui/react';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import { IoSunny, IoSunnyOutline } from 'react-icons/io5';

export const ThemeChangeBtn = () => {
  const appearance = useThemeStore((state) => state.appearance);
  const toggle = useThemeStore((state) => state.toggle);
  return (
    <IconButton onClick={toggle} bg={'bg'} color={'fg'}>
      <Icon as={appearance === 'dark' ? IoSunnyOutline : IoSunny} />
    </IconButton>
  );
};
