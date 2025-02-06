import { CreateProjectPageLayout } from '@/pages/createProjectPages/drawer/CreateProjectPageLayout.tsx';
import { Button, ButtonGroup, Heading } from '@chakra-ui/react';

export const CreateProjectCompletePage = () => {
  return (
    <CreateProjectPageLayout>
      <Heading fontSize={'36px'}>Project created.</Heading>
      <Heading mt={6}>Happy Hacking!</Heading>
      <ButtonGroup display={'flex'} gap={3} justify={'flex-end'} mt={10}>
        <Button
          colorPalette={'blue'}
          size={{ base: 'sm', sm: 'xl' }}
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Go to Dashboard
        </Button>
        <Button
          size={{ base: 'sm', sm: 'xl' }}
          onClick={() => {
            window.location.href = '/documentations';
          }}
        >
          Documentations
        </Button>
      </ButtonGroup>
    </CreateProjectPageLayout>
  );
};
