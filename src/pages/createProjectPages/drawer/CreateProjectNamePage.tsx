import {
  Box,
  Button,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerContext,
  DrawerRoot,
  DrawerTrigger,
  Flex,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { CreateProjectPricingPage } from '@/pages/createProjectPages/drawer/CreateProjectPricingPage.tsx';
import { CreateProjectPageLayout } from '@/pages/createProjectPages/drawer/CreateProjectPageLayout.tsx';
import { useCreateProjectStore } from '@/shared/store/createProjectStore.ts';

export const CreateProjectNamePage = () => {
  const navigate = useNavigate();
  const name = useCreateProjectStore((state) => state.name);
  const setName = useCreateProjectStore((state) => state.setName);

  return (
    <DrawerRoot size={'full'}>
      <CreateProjectPageLayout onBefore={() => navigate('/projects')}>
        <Heading fontSize={{ base: '26px', sm: '36px' }}>
          Enter your project name.
        </Heading>
        <Input
          py={{ base: 6, sm: 10 }}
          w={{ base: 'full' }}
          type={'text'}
          mt={4}
          borderColor={'gray.400'}
          border={'none'}
          borderBottom={'1px solid'}
          placeholder={'YOUR PROJECT NAME'}
          fontSize={{ base: '26px', sm: '44px' }}
          _focus={{
            border: 'none',
            borderBottom: '3px solid',
            boxShadow: 'none', // focus 상태의 시각적 강조 제거
            outline: 'none',
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <DrawerContext>
          {(store) => (
            <CreateProjectPricingPage onBefore={() => store.setOpen(false)} />
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
