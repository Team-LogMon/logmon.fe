import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  IoBarChartOutline,
  IoCardOutline,
  IoCellularOutline,
  IoKeyOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { toaster } from '@/components/ui/toaster.tsx';

interface SettingMenuItemProps {
  title: string;
  description: string;
  icon: any;
  onClick?: () => void;
}

const SettingMenuItem = ({
  title,
  description,
  icon,
  onClick,
}: SettingMenuItemProps) => {
  if (!onClick) {
    onClick = () => {
      toaster.create({
        title: 'This service is currently under development.',
        description: 'Please check back later.',
        duration: 3000,
      });
    };
  }

  return (
    <Flex
      align={'center'}
      h={'64px'}
      bg={'gray.600'}
      boxShadow={'md'}
      my={2}
      p={4}
      gap={3}
      _hover={{
        cursor: 'pointer',
        bgColor: 'gray.500',
      }}
      onClick={onClick}
    >
      <Center borderRadius={'full'} bg={'gray.200'} boxSize={'32px'}>
        <Icon as={icon} color={'black'} boxSize={'20px'} />
      </Center>
      <Flex direction={'column'}>
        <Text fontWeight={600} fontSize={'sm'}>
          {title}
        </Text>
        <Text fontSize={'xs'}>{description}</Text>
      </Flex>
    </Flex>
  );
};

interface SettingMenuProps {
  children?: ReactNode;
  title: string;
  description: string;
}

const SettingMenu = ({ children, title, description }: SettingMenuProps) => {
  return (
    <GridItem display={'flex'} flexDirection={'column'}>
      <Heading as={'h4'} size={'md'}>
        {title}
      </Heading>
      <Text fontSize={'xs'} color={'gray.400'} mb={'8px'}>
        {description}
      </Text>
      {children}
    </GridItem>
  );
};

export const SettingsPage = () => {
  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Flex direction={'column'} p={'48px'}>
        <Heading>Project Setting</Heading>
        <Box h={'40px'} />
        <Grid
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}
          gap={8}
        >
          <SettingMenu
            title={'General'}
            description={'Manage your applications and infrastructure'}
          >
            <SettingMenuItem
              title={'Project Configuration'}
              icon={IoSettingsOutline}
              description={'Configure your project settings.'}
            />
            <SettingMenuItem
              title={'API Logs'}
              icon={IoBarChartOutline}
              description={'Monitor your api calls.'}
            />
          </SettingMenu>
          <SettingMenu
            title={'Billing'}
            description={
              'Access all information related to your plan, billing, and payments.'
            }
          >
            <SettingMenuItem
              title={'Your plan and billing'}
              icon={IoCardOutline}
              description={'Check your plan details and upgrade'}
            />
            <SettingMenuItem
              title={'Usage'}
              icon={IoCellularOutline}
              description={'Monitor your plan usage'}
            />
          </SettingMenu>
          <SettingMenu
            title={'Team and Access'}
            description={'Configure team and individual rights'}
          >
            <SettingMenuItem
              title={'API Keys'}
              icon={IoKeyOutline}
              description={'Add, edit, and manage your API keys'}
            />
            <SettingMenuItem
              title={'Members'}
              icon={IoPeopleOutline}
              description={'Manage your team members permissions'}
            />
          </SettingMenu>
        </Grid>
      </Flex>
    </ProjectPageLayout>
  );
};
