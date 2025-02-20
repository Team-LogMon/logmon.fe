import { EmptyState, VStack } from '@chakra-ui/react';
import { GrProjects } from 'react-icons/gr';

export const EmptyProjects = () => {
  return (
    <EmptyState.Root mt={10}>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <GrProjects />
        </EmptyState.Indicator>
        <VStack>
          <EmptyState.Title>No project exists.</EmptyState.Title>
          <EmptyState.Description>
            Create your first project and enjoy programming.
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
