import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LogAlertSubscription } from '@/types.ts';
import { getLogAlertSubscriptionByProjectId } from '@/shared/api/api.ts';
import { useParams } from 'react-router';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { LogAlertSubscriptionStatisticCard } from '@/pages/LogsPage/components/LogAlertSubscriptionStatisticCard.tsx';
import { useRefreshStore } from '@/shared/store/refreshStore.ts';

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
    <Flex direction={'column'} gap={3}>
      <Heading size={'xl'}>Notification</Heading>
      <Heading size={'lg'}>Quota (demo)</Heading>
      {logAlertSubscriptions.map((s) => (
        <LogAlertSubscriptionStatisticCard subscription={s} key={s.id} />
      ))}
    </Flex>
  );
};
