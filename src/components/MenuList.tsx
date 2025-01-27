import { Box, VStack } from '@chakra-ui/react';
import { TbLogs } from 'react-icons/tb';
import { MenuItem } from '@/components/MenuItem.tsx';
import { BiMessageError } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';

export const MenuList = () => {
  return (
    <VStack>
      <Box h={'10px'}></Box>
      <Box h={'10px'}></Box>
      <MenuItem title={'Logs'} icon={TbLogs} />
      <MenuItem title={'Errors'} icon={BiMessageError} />
      <Box h={'10px'}></Box>
      <MenuItem title={'Settings'} icon={CiSettings} />
    </VStack>
  );
};
