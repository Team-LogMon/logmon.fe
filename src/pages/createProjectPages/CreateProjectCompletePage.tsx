import { Pricing } from '@/shared/const/app/Pricing.ts';
import { CreateProjectPageLayout } from '@/pages/createProjectPages/CreateProjectPageLayout.tsx';
import { Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';

interface CreateProjectCompletePageProps {
  name: string;
  pricing: Pricing;
}

export const CreateProjectCompletePage = ({
  name,
  pricing,
}: CreateProjectCompletePageProps) => {
  return (
    <CreateProjectPageLayout>
      <Flex w={{ base: 'full', sm: 'xl' }} direction={'column'}>
        <Heading fontSize={'36px'}>Project created.</Heading>
        <Heading mt={6}>Happy Hacking!</Heading>
        <ButtonGroup display={'flex'} gap={3} justify={'flex-end'} mt={10}>
          <Button
            colorPalette={'blue'}
            size={'xl'}
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Go to Dashboard
          </Button>
          <Button
            colorPalette={'white'}
            size={'xl'}
            onClick={() => {
              window.location.href = '/documentations';
            }}
          >
            Documentations
          </Button>
        </ButtonGroup>
      </Flex>
    </CreateProjectPageLayout>
  );
};
