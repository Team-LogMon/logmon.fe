import { useParams } from 'react-router';
import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import { ErrorLogCount } from '@/components/dashboard/ErrorLogCount.tsx';
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ComingSoon } from '@/components/dashboard/ComingSoon.tsx';
import { TransactionCount } from '@/components/dashboard/TransactionCount.tsx';

interface DashboardGridItem {
  title: string;
  children: ReactNode;
  colSpan?: number;
}

const DashboardGridItem = ({
  title,
  children,
  colSpan = 1,
}: DashboardGridItem) => {
  return (
    <GridItem
      colSpan={{ base: 2, md: colSpan, lg: colSpan }} // base(모바일)에서는 두 칸 차지
      h={'300px'}
      p={4}
      bg={'gray.800'}
      borderRadius={'lg'}
      boxShadow={'md'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Text fontWeight={500}>{title}</Text>
      <Flex grow={1} h={'280px'}>
        {children}
      </Flex>
    </GridItem>
  );
};

export const DashboardPage = () => {
  const { pId } = useParams();
  return (
    <ProjectPageLayout currentTab={'Dashboard'}>
      <Grid
        w={'full'}
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))', // 모바일: 1열
          md: 'repeat(auto-fill, minmax(250px, 1fr))', // 태블릿 이상: 자동 채우기
          lg: 'repeat(4, minmax(0, 1fr))', // 데스크탑: 최대 4열
        }}
        gap={4}
        p={10}
      >
        <DashboardGridItem title={'Error Log Count'} colSpan={2}>
          <ErrorLogCount />
        </DashboardGridItem>
        <DashboardGridItem title={'Summary'} colSpan={1}>
          <ComingSoon />
        </DashboardGridItem>

        <DashboardGridItem title={'Recent Errors'} colSpan={1}>
          <ComingSoon />
        </DashboardGridItem>
        <DashboardGridItem title={'Transactions per days'} colSpan={1}>
          <TransactionCount />
        </DashboardGridItem>
        <DashboardGridItem title={'Recent Notification'} colSpan={1}>
          <ComingSoon />
        </DashboardGridItem>
        <DashboardGridItem title={'Transactions per days'} colSpan={2}>
          <TransactionCount />
        </DashboardGridItem>
        <DashboardGridItem title={'Coming Soon'} colSpan={1}>
          <ComingSoon />
        </DashboardGridItem>
        <DashboardGridItem title={'Coming Soon'} colSpan={2}>
          <ComingSoon />
        </DashboardGridItem>
        <DashboardGridItem title={'Coming Soon'} colSpan={1}>
          <ComingSoon />
        </DashboardGridItem>
      </Grid>
    </ProjectPageLayout>
  );
};
