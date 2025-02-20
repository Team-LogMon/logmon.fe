import { Project } from '@/types.ts';
import { Alert, Button, HStack, VStack } from '@chakra-ui/react';
import { accept } from '@/shared/api/api.ts';
import { toaster } from '@/components/ui/toaster.tsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLoading } from '@/contexts/LoadingContext.tsx';

export const Invitation = (props: { project: Project }) => {
  const queryClient = useQueryClient();
  const { showLoading, hideLoading } = useLoading();
  const { project } = props;

  const acceptMutation = useMutation({
    mutationFn: (request: Parameters<typeof accept>[0]) => accept(request),
    onMutate: showLoading,
    onSuccess: async () => {
      hideLoading();
      await queryClient.invalidateQueries({
        queryKey: ['UserProject'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['InvitedProject'],
      });
      toaster.create({
        type: 'success',
        title: 'Joined successfully',
      });
    },
    onError: () => {
      hideLoading();
      toaster.create({
        type: 'error',
        title: 'Something went wrong.',
        description: 'Please try again later or get in touch with support.',
      });
    },
  });

  return (
    <Alert.Root size={'lg'}>
      <Alert.Indicator />
      <Alert.Content>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <Alert.Title w={'full'}>
              You’ve been invited to a project :{' '}
              <strong>{project.title}</strong>
            </Alert.Title>
            <Alert.Description>
              Someone invited you to a project. Accept and start collaborating!
            </Alert.Description>
          </VStack>
          <HStack>
            <Button variant={'subtle'}>Ignore</Button>
            <Button
              onClick={() =>
                acceptMutation.mutate({
                  projectId: project.id,
                })
              }
            >
              Accept
            </Button>
          </HStack>
        </HStack>
      </Alert.Content>
    </Alert.Root>
  );
};
