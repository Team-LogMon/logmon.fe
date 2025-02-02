import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SettingMenuProps {
  children?: ReactNode;
  title: string;
  description: string;
}

const SettingMenu = ({ children, title, description }: SettingMenuProps) => {
  return (
    <GridItem display={'flex'} flexDirection={'column'}>
      <Heading as={'h4'} size={'lg'}>
        {title}
      </Heading>
      <Text fontSize={'xs'} color={'gray.400'}>
        {description}
      </Text>
      {children}
    </GridItem>
  );
};

export const SettingsPage = () => {
  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Grid
        p={'12px'}
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}
        gap={3}
      >
        <SettingMenu
          title={'General'}
          description={'Manage your applications and infrastructure'}
        ></SettingMenu>
        <SettingMenu
          title={'Billing'}
          description={
            'Access all information related to your plan, billing, and payments.'
          }
        />
        <SettingMenu
          title={'Team and Access'}
          description={'Configure team and individual rights'}
        />
      </Grid>
    </ProjectPageLayout>
  );
};
