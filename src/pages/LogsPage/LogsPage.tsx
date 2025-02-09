import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import { LogFilteringSlider } from '@/pages/LogsPage/components/LogFilteringSlider.tsx';
import { Icon, Tabs } from '@chakra-ui/react';
import { MdOutlineMonitorHeart } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LogsPanel } from '@/pages/LogsPage/components/LogsPanel.tsx';
import { EmptyNotification } from '@/pages/LogsPage/components/EmptyNotification.tsx';
import { ImStatsBars } from 'react-icons/im';

export const LogsPage = () => {
  return (
    <ProjectPageLayout currentTab={'Logs'}>
      <Tabs.Root defaultValue="monitoring">
        <Tabs.List>
          <Tabs.Trigger value="monitoring">
            <Icon as={MdOutlineMonitorHeart} boxSize={'20px'} />
            Monitoring
          </Tabs.Trigger>
          <Tabs.Trigger value="notification">
            <Icon as={IoMdNotificationsOutline} boxSize={'20px'} />
            Notification
          </Tabs.Trigger>
          <Tabs.Trigger value="statistics">
            <Icon as={ImStatsBars} boxSize={'20px'} />
            Statistics
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="monitoring">
          <LogFilteringSlider />
          <LogsPanel />
        </Tabs.Content>
        <Tabs.Content value="notification">
          <EmptyNotification />
        </Tabs.Content>
      </Tabs.Root>
    </ProjectPageLayout>
  );
};
