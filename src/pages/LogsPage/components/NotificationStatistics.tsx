import {
  Card,
  EmptyState,
  Flex,
  Heading,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { LogAlertSubscription } from '@/types.ts';
import { getLogAlertSubscriptionByProjectId } from '@/shared/api/api.ts';
import { useParams } from 'react-router';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { LogAlertSubscriptionStatisticCard } from '@/pages/LogsPage/components/LogAlertSubscriptionStatisticCard.tsx';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';

export const NotificationStatistics = () => {
  const { pId } = useParams();
  const { showLoading, hideLoading } = useLoading();

  const { data, isFetching } = useQuery({
    queryKey: ['LogAlertSubscription'],
    queryFn: async () => getLogAlertSubscriptionByProjectId(pId!),
    initialData: [] as LogAlertSubscription[],
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

  return (
    <Flex direction={'column'}>
      <Card.Root>
        <Card.Body gap={2}>
          <Heading size={'xl'}>Notification</Heading>
          {data.length === 0 && (
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
          {data.length !== 0 && (
            <>
              <Heading size={'lg'}>Quota</Heading>
              {data.map((s) => (
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
