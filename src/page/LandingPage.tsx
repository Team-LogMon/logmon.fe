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
import bannerImage from '../assets/business-people-working-laptop-development-b.png';
import { useNavigate } from 'react-router';

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
      {/*Header */}
      <Flex
        position={'fixed'}
        top={0}
        w={'full'}
        h={'70px'}
        align={'center'}
        justify={'space-between'}
        px={6}
        borderBottom={'1px solid black'}
      >
        <Box>
          <Text fontSize={'24px'} fontWeight={'600'}>
            Logmon
          </Text>
        </Box>
        <Flex gap={5}>
          <Link
            onClick={() => {
              navigate('/login');
            }}
            fontWeight={'700'}
          >
            Sign in
          </Link>
          <ButtonGroup display={{ base: 'none', sm: 'flex' }}>
            <Button colorPalette={'blue'}>Get started</Button>
            <Button colorPalette={'white'}>Documents</Button>
          </ButtonGroup>
        </Flex>
      </Flex>

      <Box h={'70px'} />

      <Flex w={'full'} direction={'row'} align={'center'} px={2}>
        <Flex
          direction={'column'}
          align={'center'}
          grow={1}
          justify={'center'}
          h={'360px'}
        >
          <Heading fontSize={{ base: '27px', sm: '42px' }}>
            Easy Logging, Fast Finding.
          </Heading>
          <Heading
            fontSize={{ base: '22px', sm: '20px' }}
            mt={4}
            textAlign={'center'}
          >
            Super easy logging system will boost your program management.
          </Heading>
          <ButtonGroup mt={'30px'}>
            <Button size={'xl'} colorPalette={'blue'}>
              Get started
            </Button>
            <Button size={'xl'} colorPalette={'white'}>
              Documents
            </Button>
          </ButtonGroup>
        </Flex>
        <Image
          display={{ base: 'none', lg: 'block' }}
          w={{ base: '700px', '2xl': '840px' }}
          src={bannerImage}
        />
      </Flex>
    </Flex>
  );
}
