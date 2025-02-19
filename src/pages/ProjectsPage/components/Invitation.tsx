import { Member, Project } from '@/types.ts';
import { Alert, Button, HStack, VStack } from '@chakra-ui/react';
import { accept } from '@/shared/api/api.ts';
import { toaster } from '@/components/ui/toaster.tsx';
import { useRefreshStore } from '@/shared/store/refreshStore.ts';

export const Invitation = (props: { member: Member; project: Project }) => {
  const { project } = props;
  const refreshInvitations = useRefreshStore(
    (state) => state.refreshInvitations
  );

  const refreshProjectList = useRefreshStore(
    (state) => state.refreshProjectList
  );

  const onClickAcceptBtn = async () => {
    try {
      await accept(project.id);
      toaster.create({
        title: 'Accepted Successfully.',
        type: 'success',
      });
      refreshInvitations();
      refreshProjectList();
    } catch (e) {
      toaster.create({
        title: 'Something went wrong.',
        description: 'Please try again later or get in touch with support.',
        type: 'error',
      });
    }
  };

  return (
    <Alert.Root size={'lg'}>
      <Alert.Indicator />
      <Alert.Content>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <Alert.Title w={'full'}>
              You’ve been invited to a project :<strong>{project.title}</strong>
            </Alert.Title>
            <Alert.Description>
              Someone invited you to a project. Accept and start collaborating!
            </Alert.Description>
          </VStack>
          <HStack>
            <Button variant={'subtle'}>Ignore</Button>
            <Button onClick={onClickAcceptBtn}>Accept</Button>
          </HStack>
        </HStack>
      </Alert.Content>
    </Alert.Root>
  );
};
