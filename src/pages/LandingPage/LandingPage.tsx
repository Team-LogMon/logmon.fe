import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react';
import bannerImage from '../../assets/banner_image.svg';
import { useNavigate } from 'react-router';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Header } from '@/components/Header.tsx';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { IntroduceLogFeatureCard } from '@/pages/LandingPage/components/IntroduceLogFeatureCard.tsx';
import { IntroductionDashboardFeatureCard } from '@/pages/LandingPage/components/IntroductionDashboardFeatureCard.tsx';

export const LandingPage = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <PageWrapper>
      <Flex justify={'center'} align={'center'} direction={'column'}>
        <Header
          rightChildren={
            <>
              <Link
                onClick={() => {
                  if (user) {
                    logout();
                  } else {
                    navigate('/login');
                  }
                }}
                fontWeight={'700'}
              >
                {user == null ? 'Sign In' : 'Sign Out'}
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
            </>
          }
        ></Header>
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
      <Grid templateColumns={'repeat(1,1fr)'} gap={4} p={'30px'} mb={'120px'}>
        <IntroductionDashboardFeatureCard />
        <IntroduceLogFeatureCard />
      </Grid>
    </PageWrapper>
  );
};
