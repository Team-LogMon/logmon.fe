import { Box, EmptyState, Icon, VStack } from '@chakra-ui/react';
import { RegisterNotificationDialog } from '@/pages/LogsPage/components/RegisterNotificationDialog.tsx';
import { getIcon } from '@/shared/Icon.ts';

export const EmptyNotification = () => {
  return (
    <EmptyState.Root className={'no-drag'}>
      <EmptyState.Content>
        <EmptyState.Indicator gap={4}>
          <Icon as={getIcon('slack')} boxSize={'60px'} />
          <Icon as={getIcon('discord')} boxSize={'60px'} />
        </EmptyState.Indicator>
        <VStack textAlign={'center'} gap={3}>
          <EmptyState.Title>No Notification registered.</EmptyState.Title>
          <EmptyState.Description>
            Register your first webhook link.
          </EmptyState.Description>
          <Box h={'8px'} />
          <RegisterNotificationDialog />
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
