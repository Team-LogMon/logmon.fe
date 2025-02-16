import { useEffect, useState } from 'react';
import { getLogAlertSubscriptionByProjectId } from '@/shared/api/api.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import {
  Box,
  Button,
  Card,
  EmptyState,
  Flex,
  Grid,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LogAlertSubscription } from '@/types.ts';
import { EmptyNotification } from '@/pages/LogsPage/components/EmptyNotification.tsx';
import { SeverityTag } from '@/components/SeverityTag.tsx';
import { getIcon } from '@/shared/Icon.ts';
import { RegisterNotificationDialog } from '@/pages/LogsPage/components/RegisterNotificationDialog.tsx';

export const LogAlertSubscriptionsList = () => {
  const [logAlertSubscriptions, setLogAlertSubscriptions] = useState<
    LogAlertSubscription[]
  >([]);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    getLogAlertSubscriptionByProjectId('p-1').then((value) => {
      setLogAlertSubscriptions(value);
      hideLoading();
    });
  }, []);

  if (logAlertSubscriptions.length === 0) {
    return <EmptyNotification />;
  }

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}
        gap={3}
      >
        {logAlertSubscriptions.map((s) => (
          <Card.Root>
            <Card.Header>
              <VStack align={'left'} gap={0}>
                <Text fontWeight={'bolder'}> {s.name}</Text>
                <Text color={'fg.subtle'} fontSize={'xs'}>
                  {s.url}
                </Text>
              </VStack>
            </Card.Header>
            <Card.Body>
              <Flex direction={'column'}>
                <HStack>
                  <Text>Alert when </Text>
                  <SeverityTag severity={s.alertThreshold} />
                  <Text>or above.</Text>
                </HStack>
              </Flex>
            </Card.Body>
            <Card.Footer>
              <HStack justify={'flex-end'}>
                <Button size={'xs'} variant={'surface'}>
                  Update
                </Button>
                <Button size={'xs'} colorPalette={'red'}>
                  Delete
                </Button>
              </HStack>
            </Card.Footer>
            <Icon
              as={getIcon(s.platform)}
              position={'absolute'}
              bottom={5}
              right={5}
              boxSize={'80px'}
              opacity={'20%'}
            />
          </Card.Root>
        ))}
      </Grid>
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator gap={3}>
            <Icon as={getIcon('slack')} boxSize={'60px'} />
            <Icon as={getIcon('discord')} boxSize={'60px'} />
          </EmptyState.Indicator>
          <VStack textAlign={'center'} gap={3}>
            <EmptyState.Title>Register Notification</EmptyState.Title>
            <EmptyState.Description>
              Register a webhook and receive instant notifications.
            </EmptyState.Description>
            <Box h={'8px'} />
            <RegisterNotificationDialog />
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    </>
  );
};
