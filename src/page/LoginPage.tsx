import { Box, Button, Flex, Input, VStack } from '@chakra-ui/react';

export function LoginPage() {
  return (
    <Flex align={'center'} justify={'center'} w={'100vw'} h={'100vh'}>
      <Flex
        w={'lg'}
        border={'1px solid'}
        borderColor={'gray.600'}
        borderRadius={'md'}
        p={4}
      >
        <VStack gap={3} display={'flex'} align={'center'} p={2} w={'full'}>
          <Box fontWeight={'600'} fontSize={'2xl'}>
            Login
          </Box>
          <Box w={'full'} h={'54px'} border={'1px solid'} borderRadius={'md'}>
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
          <Box w={'full'} h={'54px'} border={'1px solid'} borderRadius={'md'}>
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

          <Button
            w={'full'}
            variant="outline"
            fontSize={'14px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            h={'48px'}
            mt={'8px'}
          >
            Login with Google account
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}
