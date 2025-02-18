import { Member, Project } from '@/types.ts';
import { Alert, Button, HStack, VStack } from '@chakra-ui/react';
import { accept } from '@/shared/api/api.ts';
import { toaster } from '@/components/ui/toaster.tsx';

export const Invitation = (props: {
  member: Member;
  project: Project;
  refresh: () => void;
}) => {
  const { project, refresh } = props;

  const onClickAcceptBtn = async () => {
    try {
      await accept(project.id);
      toaster.create({
        title: 'Accepted Successfully.',
        type: 'success',
      });
      refresh();
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
