import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Header } from '@/components/Header.tsx';
import {
  Button,
  Field,
  Flex,
  Grid,
  HStack,
  Input,
  Separator,
  Text,
} from '@chakra-ui/react';
import { useAuthStore } from '@/shared/store/authStore.ts';

export const UserPage = () => {
  const user = useAuthStore((state) => state.user)!;

  return (
    <PageWrapper>
      <Header />
      <Flex
        justify={'center'}
        direction={'column'}
        align={'center'}
        bg={'bg.panel'}
        border={'1px solid'}
        borderColor={'border'}
        my={'40px'}
        mx={{ base: '24px', lg: '120px' }}
        p={6}
        pb={'30px'}
      >
        <HStack w={'full'}>
          <Flex w={'full'} direction={{ base: 'column', sm: 'row' }}>
            <Flex w={'300px'} grow={0} shrink={0}>
              <Text fontWeight={'bolder'}>Personal Information</Text>
            </Flex>
            <Flex direction={'column'} w={'full'}>
              <Grid templateColumns={'repeat(2,1fr)'} gap={5}>
                <Field.Root>
                  <Field.Label>Nickname</Field.Label>
                  <Input
                    h={'30px'}
                    borderColor={'border'}
                    value={user.name}
                    disabled
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input
                    h={'30px'}
                    borderColor={'border'}
                    value={user.email}
                    disabled
                  />
                </Field.Root>
              </Grid>
              <Flex justify={'end'} mt={'5'}>
                <Button colorPalette={'blue'} size={'sm'} disabled>
                  Save changes
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </HStack>
        <Separator w={'full'} my={6} />
        <HStack w={'full'}>
          <Flex w={'full'} direction={{ base: 'column', sm: 'row' }}>
            <Flex w={'300px'} grow={0} shrink={0}>
              <Text fontWeight={'bolder'}>Connected accounts</Text>
            </Flex>
            <Flex direction={'column'} w={'full'}>
              <Text fontSize={'sm'}>
                Connected to {user.email} Google account
              </Text>
            </Flex>
          </Flex>
        </HStack>
        <Separator w={'full'} my={6} />
        <HStack w={'full'}>
          <Flex w={'full'} direction={{ base: 'column', sm: 'row' }}>
            <Flex w={'300px'} grow={0} shrink={0}>
              <Text fontWeight={'bolder'}>Delete account</Text>
            </Flex>
            <Flex direction={'column'}>
              <Button colorPalette={'red'} size={'sm'} disabled>
                Delete Account
              </Button>
            </Flex>
          </Flex>
        </HStack>
      </Flex>
    </PageWrapper>
  );
};
