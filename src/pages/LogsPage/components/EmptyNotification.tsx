import { EmptyState, VStack } from '@chakra-ui/react';
import { HiColorSwatch } from 'react-icons/hi';
import { RegisterNotificationDialog } from '@/pages/LogsPage/components/RegisterNotificationDialog.tsx';

export const EmptyNotification = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiColorSwatch />
        </EmptyState.Indicator>
        <VStack textAlign={'center'} gap={3}>
          <EmptyState.Title>No Notification registered.</EmptyState.Title>
          <EmptyState.Description>
            Register your webhook link.
          </EmptyState.Description>
          <RegisterNotificationDialog />
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
