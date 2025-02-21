import { ErrorLogCount } from '@/components/dashboard/ErrorLogCount.tsx';
import { IntroductionCard } from '@/pages/LandingPage/components/IntroductionCard.tsx';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);
export const IntroductionDashboardFeatureCard = () => {
  return (
    <IntroductionCard>
      <Flex
        gap={{ base: '10px', lg: '40px' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
        h={'400px'}
      >
        <Flex w={{ base: 'full', lg: '50%' }} h={'full'}>
          <ErrorLogCount />
        </Flex>
        <Flex w={{ base: 'full', lg: '50%' }}>
          <Center display={'flex'} direction={'column'}>
            <MotionHeading
              size="3xl"
              pl="20px"
              textAlign="center"
              color="fg" // ✅ 텍스트 가독성 유지
              initial={{ opacity: 0, y: 20 }} // ✅ 아래에서 올라오는 효과
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: '240% 0', // ✅ 움직이는 그라디언트 효과
              }}
              transition={{
                duration: 1.2,
                ease: 'easeOut',
              }}
            >
              Is everything running as expected? <br />
              Verify your application’s status.
            </MotionHeading>
          </Center>
        </Flex>
      </Flex>
    </IntroductionCard>
  );
};
