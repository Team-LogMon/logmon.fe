import { CreateProjectPageLayout } from '@/pages/createProjectPages/CreateProjectPageLayout.tsx';
import { Pricing } from '@/shared/const/app/Pricing.ts';
import {
  Box,
  Button,
  Flex,
  For,
  Grid,
  Heading,
  IconButton,
  List,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

interface CreateProjectPricingPageProps {
  name: string;
  onNext: (name: string, pricing: Pricing) => void;
}

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

export const CreateProjectPricingPage = ({
  onNext,
  name,
}: CreateProjectPricingPageProps) => {
  const navigate = useNavigate();
  const [pricing, setPricing] = useState<Pricing>(Pricing.FREE);

  return (
    <CreateProjectPageLayout>
      <Flex w={{ base: 'full', sm: '5xl' }} direction={'column'}>
        <IconButton
          bg={'inherit'}
          color={'white'}
          boxSize={'36px'}
          mb={10}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBack style={{ width: '100%', height: '100%' }} />
        </IconButton>
        <Heading fontSize={{ base: '26px', sm: '36px' }}>
          Select your pricing plan
        </Heading>
        <Grid gap={3} templateColumns={'repeat(3,1fr)'} mt={6}>
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
        <Flex w={{ base: 'full', sm: 'xl' }} justify={'space-between'} py={6}>
          <Button
            colorPalette={'blue'}
            w={'120px'}
            fontSize={'xl'}
            onClick={() => onNext(name, pricing)}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </CreateProjectPageLayout>
  );
};
