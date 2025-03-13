import {
  Box,
  Button,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  Flex,
  For,
  Grid,
  Heading,
  List,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Pricing } from '@/shared/const/app/Pricing.ts';
import { CreateProjectPageLayout } from '@/pages/createProjectPages/drawer/CreateProjectPageLayout.tsx';
import { useCreateProjectStore } from '@/shared/store/createProjectStore.ts';
import { CreateProjectCompletePage } from '@/pages/createProjectPages/drawer/CreateProjectCompletePage.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { toaster } from '@/components/ui/toaster.tsx';
import { createProject } from '@/shared/api/api.ts';

interface PlanBoxProps {
  title: string;
  price: number;
  isSelected: boolean;
  descriptions: string[];
  onClick: () => void;
}

const PlanBox = ({
  title,
  price,
  descriptions,
  isSelected,
  onClick,
}: PlanBoxProps) => {
  return (
    <Box
      bg={'bg.emphasized'}
      boxShadow={'sm'}
      borderRadius={'md'}
      p={3}
      border={'2px solid'}
      borderColor={isSelected ? 'border.inverted' : 'border'}
      onClick={onClick}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Text
        fontWeight={700}
        fontSize={'lg'}
        color={isSelected ? 'fg' : 'fg.muted'}
      >
        {title}
      </Text>
      <Text color={isSelected ? 'fg' : 'fg.muted'}>{price}$/month</Text>
      <List.Root pl={3}>
        <For each={descriptions}>
          {(item, index) => (
            <List.Item color={isSelected ? 'fg' : 'fg.muted'} key={index}>
              {item}
            </List.Item>
          )}
        </For>
      </List.Root>
    </Box>
  );
};

interface CreateProjectPricingPageProps {
  onBefore: () => void;
}

export const CreateProjectPricingPage = ({
  onBefore,
}: CreateProjectPricingPageProps) => {
  const { open, setOpen } = useDisclosure();
  const { showLoading, hideLoading } = useLoading();
  const { projectId, setProjectId } = useCreateProjectStore();
  const name = useCreateProjectStore((state) => state.name);
  const description = useCreateProjectStore((state) => state.description);
  const pricing = useCreateProjectStore((state) => state.pricing);
  const setPricing = useCreateProjectStore((state) => state.setPricing);

  const handleOnNext = async () => {
    try {
      showLoading();
      const { projectId: createdProjectId } = await createProject({
        title: name,
        description,
        pricing,
      });

      setProjectId(createdProjectId);
      hideLoading();
      setOpen(true);
    } catch {
      hideLoading();
      toaster.create({
        title: 'Failed to create project.',
        description: 'Please try again later or get in touch with support.',
        type: 'error',
      });
    }
  };

  return (
    <DrawerRoot size={'full'} open={open}>
      <CreateProjectPageLayout onBefore={onBefore}>
        <Heading fontSize={{ base: '26px', sm: '36px' }}>
          Select your pricing plan
        </Heading>
        <Grid gap={3} templateColumns={'repeat(2,1fr)'} mt={6}>
          <PlanBox
            title={'FREE'}
            price={0}
            descriptions={['Logs are retained for 7 days.']}
            isSelected={pricing === Pricing.FREE}
            onClick={() => {
              setPricing(Pricing.FREE);
            }}
          />
          <PlanBox
            title={'BASIC'}
            price={1}
            descriptions={[
              'Logs are retained for 30 days.',
              'Webhook alert supported.',
            ]}
            isSelected={pricing === Pricing.BASIC}
            onClick={() => {
              setPricing(Pricing.BASIC);
            }}
          />
        </Grid>
        <Flex w={{ base: 'full' }} justify={'space-between'} py={6}>
          <Box />
          <DrawerTrigger asChild>
            <Button
              colorPalette={'blue'}
              w={'120px'}
              fontSize={'xl'}
              onClick={handleOnNext}
            >
              Next
            </Button>
          </DrawerTrigger>
        </Flex>
      </CreateProjectPageLayout>
      <DrawerContent position={'fixed'} top={0}>
        <CreateProjectCompletePage projectId={projectId} />
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
