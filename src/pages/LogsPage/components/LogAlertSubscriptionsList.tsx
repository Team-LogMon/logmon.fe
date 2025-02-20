import {
  deleteLogAlertSubscription,
  getLogAlertSubscriptionByProjectId,
} from '@/shared/api/api.ts';
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
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toaster } from '@/components/ui/toaster.tsx';

export const LogAlertSubscriptionsList = () => {
  const { pId } = useParams();
  const queryClient = useQueryClient();
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

  const deleteMutation = useMutation({
    mutationFn: (request: Parameters<typeof deleteLogAlertSubscription>[0]) =>
      deleteLogAlertSubscription(request),
    onMutate: () => showLoading,
    onSuccess: async () => {
      hideLoading();
      await queryClient.invalidateQueries({
        queryKey: ['LogAlertSubscription'],
      });
      toaster.create({
        type: 'success',
        title: 'Notification deleted successfully.',
      });
    },
    onError: async () => {
      hideLoading();
      toaster.create({
        type: 'error',
        title: 'Something went wrong.',
      });
    },
  });

  if (!pId) {
    throw Error();
  }

  if (data.length === 0) {
    return <EmptyNotification />;
  }

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}
        gap={3}
      >
        {data.map((s) => (
          <Card.Root key={s.id}>
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
                <Button
                  size={'xs'}
                  colorPalette={'red'}
                  onClick={() => deleteMutation.mutate(s.id)}
                >
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
