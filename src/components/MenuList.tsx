import { Box, VStack } from '@chakra-ui/react';
import { TbLogs } from 'react-icons/tb';
import { MenuItem } from '@/components/MenuItem.tsx';
import { BiMessageError } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md';

interface MenuListProps {
  currentTab: string;
}

export const MenuList = ({ currentTab }: MenuListProps) => {
  return (
    <VStack gap={1}>
      <Box h={'10px'}></Box>
      <Box h={'10px'}></Box>
      <Box h={'10px'}></Box>
      <MenuItem
        title={'Dashboard'}
        icon={MdOutlineDashboard}
        isSelected={currentTab === 'Dashboard'}
      />
      <Box h={'10px'}></Box>
      <MenuItem
        title={'Logs'}
        icon={TbLogs}
        isSelected={currentTab === 'Logs'}
      />
      <MenuItem
        title={'Errors'}
        icon={BiMessageError}
        isSelected={currentTab === 'Errors'}
      />
      <Box h={'10px'}></Box>
      <MenuItem
        title={'Settings'}
        icon={CiSettings}
        isSelected={currentTab === 'Settings'}
      />
    </VStack>
  );
};
