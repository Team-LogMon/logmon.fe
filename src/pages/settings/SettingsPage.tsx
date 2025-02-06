import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Button,
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
import { useNavigate, useParams } from 'react-router';

interface SettingMenuItemProps {
  title: string;
  description: string;
  icon: any;
  onClick?: () => void;
  color: string;
}

const SettingMenuItem = ({
  title,
  description,
  icon,
  onClick,
  color,
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
    <Button
      display={'flex'}
      justifyContent={'flex-start'}
      h={'64px'}
      my={2}
      boxShadow={'sm'}
      p={4}
      gap={3}
      border={'1px solid'}
      borderColor={'border'}
      onClick={onClick}
      variant={'outline'}
    >
      <Center
        borderRadius={'full'}
        boxSize={'32px'}
        bg={`${color}.100`}
        flexShrink={0}
      >
        <Icon as={icon} boxSize={'18px'} color={`${color}.700`} />
      </Center>
      <Flex direction={'column'} w={'full'} align={'flex-start'}>
        <Text fontWeight={600} fontSize={'sm'}>
          {title}
        </Text>
        <Text fontSize={'xs'}>{description}</Text>
      </Flex>
    </Button>
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
      <Text fontSize={'xs'} color={'fg.muted'} mb={'8px'}>
        {description}
      </Text>
      {children}
    </GridItem>
  );
};

export const SettingsPage = () => {
  const { pId } = useParams();
  const navigate = useNavigate();

  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Flex direction={'column'}>
        <Heading fontSize={'2xl'}>Project Setting</Heading>
        <Box h={'30px'} />
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
              color={'blue'}
            />
            <SettingMenuItem
              title={'API Logs'}
              icon={IoBarChartOutline}
              description={'Monitor your api calls.'}
              color={'blue'}
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
              color={'yellow'}
            />
            <SettingMenuItem
              title={'Usage'}
              icon={IoCellularOutline}
              description={'Monitor your plan usage'}
              color={'yellow'}
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
              onClick={() => navigate(`/app/${pId}/settings/key`)}
              color={'purple'}
            />
            <SettingMenuItem
              title={'Members'}
              icon={IoPeopleOutline}
              description={'Manage your team members permissions'}
              onClick={() => navigate(`/app/${pId}/settings/members`)}
              color={'purple'}
            />
          </SettingMenu>
        </Grid>
      </Flex>
    </ProjectPageLayout>
  );
};
