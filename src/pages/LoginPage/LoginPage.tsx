import {
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import logo from '@/assets/logo.svg';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { GithubLoginButton } from '@/pages/LoginPage/components/GithubLoginButton.tsx';
import { AppleLoginButton } from '@/pages/LoginPage/components/AppleLoginButton.tsx';
import { GoogleLoginButton } from '@/pages/LoginPage/components/GoogleLoginButton.tsx';
import loginBg from '@/shared/assets/login-bg.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

export const LoginPage = () => {
  return (
    <PageWrapper>
      <Flex w={'100vw'} h={'100vh'}>
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          bgImage={`url(${loginBg})`}
          w={'50%'}
          bgSize={'cover'}
        >
          <Center w={'full'}>
            <Card.Root
              w={'xl'}
              border={'1px solid'}
              borderColor={'border'}
              p={2}
              className={'no-drag'}
              draggable={false}
            >
              <Card.Header>
                <Heading size={'2xl'}>Easy Logging, Fast Searching</Heading>
              </Card.Header>
              <Card.Body>
                <Swiper
                  scrollbar={{
                    hide: true,
                  }}
                  modules={[Scrollbar]}
                  style={{
                    width: '100%',
                    height: '400px',
                  }}
                >
                  <SwiperSlide>
                    <Heading>Logging with REST API</Heading>
                    <Image mt={'16px'} w={'full'} h={'340px'} bg={'gray.200'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Heading>Simply add Notification</Heading>
                    <Image mt={'16px'} w={'full'} h={'340px'} bg={'gray.200'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Heading>Add members and collaborate with us</Heading>
                    <Image mt={'16px'} w={'full'} h={'340px'} bg={'gray.200'} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Heading>
                      Logmon will boost your programming experience
                    </Heading>
                    <Image mt={'16px'} w={'full'} h={'340px'} bg={'gray.200'} />
                  </SwiperSlide>
                </Swiper>
              </Card.Body>
            </Card.Root>
          </Center>
        </Flex>
        <Flex w={{ base: 'full', lg: '50%' }}>
          <Center w={'full'}>
            <Card.Root
              w={'md'}
              border={'1px solid'}
              p={4}
              borderColor={'border'}
            >
              <Card.Body>
                <VStack gap={3} display={'flex'} align={'center'}>
                  <Image src={logo} boxSize={'48px'} />
                  <Box fontWeight={'600'} fontSize={'2xl'}>
                    Login
                  </Box>
                  <VStack gap={2} w={'full'}>
                    <GoogleLoginButton />
                    <AppleLoginButton />
                    <GithubLoginButton />
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Center>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
