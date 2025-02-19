import { LogAlertSubscription } from '@/types.ts';
import { Card, HStack, Text } from '@chakra-ui/react';
import { NotificationQuotaProgress } from '@/pages/LogsPage/components/NotificationQuotaProgress.tsx';

export const LogAlertSubscriptionStatisticCard = (props: {
  subscription: LogAlertSubscription;
}) => {
  const { subscription } = props;

  return (
    <Card.Root>
      <Card.Header>
        <HStack>
          <Text>Subscription:</Text>
          <Text fontWeight={'600'}>{subscription.name}</Text>
        </HStack>
      </Card.Header>
      <Card.Body>
        <NotificationQuotaProgress
          label={'Daily Quota'}
          used={subscription.dailyQuotaUsed}
          max={subscription.dailyQuotaLimit}
        />
        <NotificationQuotaProgress
          label={'Monthly Quota'}
          used={subscription.monthlyQuotaUsed}
          max={subscription.monthlyQuotaLimit}
        />
      </Card.Body>
    </Card.Root>
  );
};
