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
} from '@chakra-ui/react';
import { Pricing } from '@/shared/const/app/Pricing.ts';
import { CreateProjectPageLayout } from '@/pages/createProjectPages/drawer/CreateProjectPageLayout.tsx';
import { useCreateProjectStore } from '@/shared/store/createProjectStore.ts';
import { CreateProjectCompletePage } from '@/pages/createProjectPages/drawer/CreateProjectCompletePage.tsx';

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
      bg={'gray.700'}
      color={'gray.50'}
      boxShadow={'sm'}
      borderRadius={'md'}
      p={3}
      border={'2px solid'}
      borderColor={isSelected ? 'white' : 'gray.700'}
      onClick={onClick}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Text
        fontWeight={700}
        fontSize={'lg'}
        color={isSelected ? 'white' : 'gray.500'}
      >
        {title}
      </Text>
      <Text color={isSelected ? 'white' : 'gray.500'}>{price}$/month</Text>
      <List.Root>
        <For each={descriptions}>
          {(item, index) => (
            <List.Item color={isSelected ? 'white' : 'gray.500'} key={index}>
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
  const pricing = useCreateProjectStore((state) => state.pricing);
  const setPricing = useCreateProjectStore((state) => state.setPricing);

  return (
    <DrawerRoot size={'full'}>
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
            <Button colorPalette={'blue'} w={'120px'} fontSize={'xl'}>
              Next
            </Button>
          </DrawerTrigger>
        </Flex>
      </CreateProjectPageLayout>
      <DrawerContent position={'fixed'} top={0}>
        <CreateProjectCompletePage />
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
