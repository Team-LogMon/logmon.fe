import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Box, Flex } from '@chakra-ui/react';
import { MenuList } from '@/components/MenuList.tsx';
import { Header } from '@/components/Header.tsx';

export interface ProjectPageLayoutProps {
  children?: React.ReactNode;
  currentTab: string;
}

export const ProjectPageLayout = ({
  children,
  currentTab,
}: ProjectPageLayoutProps) => {
  return (
    <PageWrapper>
      <Header />
      <Flex flex={1}>
        {/* 왼쪽 고정된 탭 */}
        <Flex
          direction={'column'}
          position={'fixed'}
          w={'210px'}
          h={'calc(100vh - 60px)'}
        >
          <MenuList currentTab={currentTab} />
        </Flex>
        <Flex w={'220px'} grow={0} shrink={0} />
        <Flex
          direction={'column'}
          w={'full'}
          grow={1}
          px={'48px'}
          bg={'bg.base'}
          minH={'calc(100vh-60px)'}
        >
          <Box h={'40px'} />
          {children}
          <Box h={'40px'} />
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
