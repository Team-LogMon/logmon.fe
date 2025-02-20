import {
  Card,
  EmptyState,
  Flex,
  Heading,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LogAlertSubscription } from '@/types.ts';
import { getLogAlertSubscriptionByProjectId } from '@/shared/api/api.ts';
import { useParams } from 'react-router';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { LogAlertSubscriptionStatisticCard } from '@/pages/LogsPage/components/LogAlertSubscriptionStatisticCard.tsx';
import { useRefreshStore } from '@/shared/store/refreshStore.ts';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const NotificationStatistics = () => {
  const { pId } = useParams();
  const { showLoading, hideLoading } = useLoading();
  const logAlertSubscriptionCounter = useRefreshStore(
    (state) => state.logAlertSubscriptionCounter
  );
  const [logAlertSubscriptions, setLogAlertSubscriptions] = useState<
    LogAlertSubscription[]
  >([]);

  useEffect(() => {
    showLoading();
    getLogAlertSubscriptionByProjectId(pId!).then((value) => {
      setLogAlertSubscriptions(value);
      hideLoading();
    });
  }, [logAlertSubscriptionCounter]);

  return (
    <Flex direction={'column'}>
      <Card.Root>
        <Card.Body gap={2}>
          <Heading size={'xl'}>Notification</Heading>
          {logAlertSubscriptions.length === 0 && (
            <EmptyState.Root>
              <EmptyState.Content>
                <EmptyState.Indicator>
                  <Icon as={IoMdNotificationsOutline} />
                </EmptyState.Indicator>
                <VStack textAlign={'center'}>
                  <EmptyState.Title>
                    No Notification Registered
                  </EmptyState.Title>
                </VStack>
              </EmptyState.Content>
            </EmptyState.Root>
          )}
          {logAlertSubscriptions.length !== 0 && (
            <>
              <Heading size={'lg'}>Quota</Heading>
              {logAlertSubscriptions.map((s) => (
                <LogAlertSubscriptionStatisticCard
                  subscription={s}
                  key={s.id}
                />
              ))}
            </>
          )}
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
