import { Box, Flex } from '@chakra-ui/react';
import { TbLogs } from 'react-icons/tb';
import { MenuItem } from '@/components/MenuItem.tsx';
import { BiMessageError } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import { toaster } from '@/components/ui/toaster.tsx';

interface MenuListProps {
  currentTab: string;
}

export const MenuList = ({ currentTab }: MenuListProps) => {
  const { pId } = useParams();
  const navigate = useNavigate();

  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      h={'full'}
      borderRight={'1px solid'}
      borderColor={'border'}
    >
      <Flex direction={'column'}>
        <Box h={'10px'}></Box>
        <Box h={'10px'}></Box>
        <Box h={'10px'}></Box>
        <MenuItem
          title={'Dashboard'}
          icon={MdOutlineDashboard}
          isSelected={currentTab === 'Dashboard'}
          onClick={() => navigate(`/app/${pId}/dashboard`)}
        />
        <Box h={'10px'}></Box>
        <MenuItem
          title={'Logs'}
          icon={TbLogs}
          isSelected={currentTab === 'Logs'}
          onClick={() =>
            toaster.create({
              title: 'This service is currently under development.',
              description: 'Please check back later.',
              duration: 3000,
            })
          }
        />
        <MenuItem
          title={'Errors'}
          icon={BiMessageError}
          isSelected={currentTab === 'Errors'}
          onClick={() =>
            toaster.create({
              title: 'This service is currently under development.',
              description: 'Please check back later.',
              duration: 3000,
            })
          }
        />
      </Flex>

      <Flex direction={'column'}>
        <MenuItem
          title={'Settings'}
          icon={CiSettings}
          isSelected={currentTab === 'Settings'}
          onClick={() => navigate(`/app/${pId}/settings`)}
        />
        <Box h={'20px'}></Box>
      </Flex>
    </Flex>
  );
};
