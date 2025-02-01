import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import bannerImage from '../assets/banner_image.svg';
import { useNavigate } from 'react-router';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import logo from '@/assets/logo.svg';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Flex justify={'center'} align={'center'} direction={'column'}>
        {/*Header */}
        <Flex
          position={'fixed'}
          top={0}
          w={'full'}
          h={'60px'}
          align={'center'}
          justify={'space-between'}
          px={6}
          borderBottom={'1px solid black'}
          zIndex={99}
          bgColor={'#18181b'}
        >
          <Flex align={'center'} gap={2}>
            <Image src={logo} boxSize={'24px'} />
            <Text
              fontSize={'22px'}
              fontWeight={'600'}
              onClick={() => {
                navigate('/');
              }}
              _hover={{
                cursor: 'pointer',
              }}
            >
              Logmon
            </Text>
          </Flex>
          <Flex gap={5}>
            <Link
              onClick={() => {
                navigate('/login');
              }}
              fontWeight={'700'}
            >
              Sign in
            </Link>
            <ButtonGroup size={'sm'} display={{ base: 'none', sm: 'flex' }}>
              <Button
                colorPalette={'blue'}
                onClick={() => navigate('/projects')}
              >
                Get started
              </Button>
              <Button
                colorPalette={'white'}
                onClick={() => navigate('/documentations')}
              >
                Documentations
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
        <Box h={'60px'} />
        <Flex
          w={'full'}
          direction={{ base: 'column-reverse', lg: 'row' }}
          align={'center'}
          px={2}
          h={'600px'}
          mt={'30px'}
        >
          <Flex
            direction={'column'}
            align={'center'}
            grow={1}
            justify={'center'}
            h={'360px'}
          >
            <Heading
              fontSize={{ base: '27px', sm: '42px' }}
              textAlign={'center'}
            >
              Easy Logging, Fast Searching.
            </Heading>
            <Heading
              fontSize={{ base: '22px', sm: '20px' }}
              mt={4}
              textAlign={'center'}
            >
              Super easy logging system will boost your program management.
            </Heading>
            <ButtonGroup mt={'30px'}>
              <Button
                size={'xl'}
                colorPalette={'blue'}
                onClick={() => {
                  navigate('/projects');
                }}
              >
                Get started
              </Button>
              <Button
                size={'xl'}
                colorPalette={'white'}
                onClick={() => navigate('/documentations')}
              >
                Documentations
              </Button>
            </ButtonGroup>
          </Flex>
          <Flex
            w={{ base: 'full', md: '600px', '2xl': '840px' }}
            justify={'center'}
            align={'center'}
          >
            <Image
              src={bannerImage}
              w={{ base: '260px', md: '320px', '2xl': '420px' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
