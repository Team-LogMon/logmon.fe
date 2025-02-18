import { Card, Flex, Heading } from '@chakra-ui/react';
import { NotificationQuotaProgress } from '@/pages/LogsPage/components/NotificationQuotaProgress.tsx';

export const NotificationStatistics = () => {
  return (
    <Flex direction={'column'} gap={3}>
      <Heading size={'xl'}>Notification</Heading>
      <Heading size={'lg'}>Quota (demo)</Heading>
      <Card.Root>
        <Card.Header>Subscription: Demo-alert</Card.Header>
        <Card.Body>
          <NotificationQuotaProgress
            label={'Daily Quota'}
            used={30}
            max={100}
          />
          <NotificationQuotaProgress
            label={'Monthly Quota'}
            used={90}
            max={1000}
          />
        </Card.Body>
      </Card.Root>
      <Card.Root>
        <Card.Header>Subscription: IDIDIDID</Card.Header>
        <Card.Body>
          <NotificationQuotaProgress
            label={'Daily Quota'}
            used={90}
            max={100}
          />
          <NotificationQuotaProgress
            label={'Monthly Quota'}
            used={700}
            max={1000}
          />
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
