import {
  Button,
  ButtonGroup,
  EmptyState,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react';
import bannerImage from '../../assets/banner_image.svg';
import { useNavigate } from 'react-router';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Header } from '@/components/Header.tsx';
import { HiColorSwatch } from 'react-icons/hi';
import { toaster } from '@/components/ui/toaster.tsx';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Flex justify={'center'} align={'center'} direction={'column'}>
        <Header>
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
              bg={'#6158FF'}
              onClick={() => navigate('/projects')}
              color={'white'}
            >
              Get started
            </Button>
            <Button onClick={() => navigate('/documentations')}>
              Documentations
            </Button>
          </ButtonGroup>
        </Header>
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
                bg={'#6158FF'}
                color={'white'}
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
      <Grid templateColumns={'repeat(1,1fr)'} gap={4} p={'30px'}>
        <Flex bg={'bg.panel'} border={'1px solid'} borderColor={'border'}>
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Indicator>
                <Icon as={HiColorSwatch} boxSize={'80px'} />
              </EmptyState.Indicator>
              <VStack textAlign="center">
                <EmptyState.Title> Manage your logs with us.</EmptyState.Title>
                <EmptyState.Description></EmptyState.Description>
              </VStack>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    toaster.create({
                      title: 'This service is currently under development.',
                      description: 'Please check back later.',
                      duration: 3000,
                    })
                  }
                >
                  Logs API Documentation
                </Button>
                <Button variant="outline">Pricing</Button>
              </ButtonGroup>
            </EmptyState.Content>
          </EmptyState.Root>
        </Flex>
        <Flex bg={'bg.panel'} border={'1px solid'} borderColor={'border'}>
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Indicator>
                <Icon as={IoMdNotificationsOutline} boxSize={'80px'} />
              </EmptyState.Indicator>
              <VStack textAlign="center">
                <EmptyState.Title>
                  Receive notifications in various formats, including email,
                  Slack, and Discord.
                </EmptyState.Title>
                <EmptyState.Description></EmptyState.Description>
              </VStack>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    toaster.create({
                      title: 'This service is currently under development.',
                      description: 'Please check back later.',
                      duration: 3000,
                    })
                  }
                >
                  Notification Documentation
                </Button>
                <Button variant="outline">Pricing</Button>
              </ButtonGroup>
            </EmptyState.Content>
          </EmptyState.Root>
        </Flex>
      </Grid>
    </PageWrapper>
  );
};
