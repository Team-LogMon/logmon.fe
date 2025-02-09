import { useEffect, useState } from 'react';
import { getLogAlertSubscriptionByProjectId } from '@/shared/api/api.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { Flex } from '@chakra-ui/react';
import { LogAlertSubscription } from '@/types.ts';
import { EmptyNotification } from '@/pages/LogsPage/components/EmptyNotification.tsx';

export const LogAlertSubscriptionsList = () => {
  const [logAlertSubscriptions, setLogAlertSubscriptions] = useState<
    LogAlertSubscription[]
  >([]);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    getLogAlertSubscriptionByProjectId('empty').then((value) => {
      setLogAlertSubscriptions(value);
      hideLoading();
    });
  }, []);

  if (logAlertSubscriptions.length === 0) {
    return <EmptyNotification />;
  }

  return <Flex>Hello</Flex>;
};
