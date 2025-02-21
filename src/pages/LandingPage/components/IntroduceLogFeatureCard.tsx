import { Center, Flex, Heading } from '@chakra-ui/react';
import { LogTableLayout } from '@/pages/LogsPage/components/LogTableLayout.tsx';
import { LogRowLayout } from '@/pages/LogsPage/components/LogRowLayout.tsx';
import { Severity } from '@/types.ts';
import { motion } from 'framer-motion';
import { IntroductionCard } from '@/pages/LandingPage/components/IntroductionCard.tsx';

const MotionHeading = motion(Heading);

export const IntroduceLogFeatureCard = () => {
  return (
    <IntroductionCard>
      <Flex
        gap={{ base: '10px', lg: '40px' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        <Flex w={{ base: 'full', lg: '50%' }}>
          <LogTableLayout size={'lg'} height={'auto'}>
            <LogRowLayout
              id={'1'}
              projectId={'p'}
              severity={Severity.ERROR}
              message={'Exception occurs'}
              source={'server.user'}
              timeStamp={Date.now()}
            />
            <LogRowLayout
              id={'2'}
              projectId={'p'}
              severity={Severity.WARNING}
              message={'Something happened'}
              source={'server.user'}
              timeStamp={Date.now()}
            />
            <LogRowLayout
              id={'3'}
              projectId={'p'}
              source={'frontend'}
              severity={Severity.INFO}
              message={'Scheduling job done successfully.'}
              timeStamp={Date.now()}
            />
            <LogRowLayout
              id={'4'}
              projectId={'p'}
              source={'server.auth'}
              severity={Severity.DEBUG}
              message={'Elapsed Time: 1.12s'}
              timeStamp={Date.now()}
            />
            <LogRowLayout
              id={'5'}
              projectId={'p'}
              severity={Severity.TRACE}
              source={'deploy'}
              message={'Container built.'}
              timeStamp={Date.now()}
            />
          </LogTableLayout>
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
              Manage your logs with us.
            </MotionHeading>
          </Center>
        </Flex>
      </Flex>
    </IntroductionCard>
  );
};
