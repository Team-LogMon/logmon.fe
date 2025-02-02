import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react';
import logo from '@/assets/logo.svg';

export const LoginPage = () => {
  return (
    <Flex align={'center'} justify={'center'} w={'100vw'} h={'100vh'}>
      <Flex
        w={'lg'}
        border={'1px solid'}
        borderColor={'gray.500'}
        borderRadius={'md'}
        p={4}
      >
        <VStack gap={3} display={'flex'} align={'center'} p={2} w={'full'}>
          <Image src={logo} boxSize={'48px'} />
          <Box fontWeight={'600'} fontSize={'2xl'}>
            Login
          </Box>
          <Box
            w={'full'}
            h={'54px'}
            border={'1px solid'}
            borderRadius={'md'}
            borderColor={'gray.400'}
          >
            <Box fontSize={'10px'} h={'12px'} mt={1} p={1} ml={1}>
              ID or email
            </Box>
            <Input
              fontSize={'14px'}
              h={'40px'}
              border="none"
              p={2}
              _focus={{
                border: 'none',
                boxShadow: 'none', // focus 상태의 시각적 강조 제거
                outline: 'none',
              }}
            ></Input>
          </Box>
          <Box
            w={'full'}
            h={'54px'}
            border={'1px solid'}
            borderRadius={'md'}
            borderColor={'gray.400'}
          >
            <Box fontSize={'10px'} h={'12px'} p={1} ml={1} mt={1}>
              Password
            </Box>
            <Input
              fontSize={'14px'}
              h={'40px'}
              border="none"
              type={'password'}
              p={2}
              _focus={{
                border: 'none',
                boxShadow: 'none', // focus 상태의 시각적 강조 제거
                outline: 'none',
              }}
            ></Input>
          </Box>

          <Button
            mt={'8px'}
            h={'48px'}
            w={'full'}
            fontSize={'16px'}
            colorPalette={'blue'}
          >
            Login
          </Button>

          <Box w={'full'} textAlign={'center'} mt={'8px'} fontSize={'14px'}>
            Register | Forget Password?
          </Box>

          <HStack w={'full'}>
            <Separator flex="1" size={'lg'} />
            <Text flexShrink={0}>or</Text>
            <Separator flex="1" size={'lg'} />
          </HStack>

          <Button
            w={'full'}
            variant="outline"
            fontSize={'14px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderColor={'gray.400'}
            h={'48px'}
            mt={'8px'}
            onClick={() => {
              window.location.href = `${import.meta.env.VITE_BACKEND_URL}/oauth/google/login?state=${import.meta.env.VITE_PROFILE}`;
            }}
          >
            Continue with Google
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
