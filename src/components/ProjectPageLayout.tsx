import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Flex } from '@chakra-ui/react';
import { MenuList } from '@/components/MenuList.tsx';

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
      <Flex>
        {/* 왼쪽 고정된 탭 */}
        <Flex
          direction={'column'}
          position={'fixed'}
          w={'220px'}
          grow={0}
          shrink={0}
          h={'100vh'}
          bgColor={'gray.900'}
        >
          <MenuList currentTab={currentTab} />
        </Flex>
        <Flex w={'220px'} grow={0} shrink={0} />
        <Flex direction={'column'} w={'full'} grow={1}>
          {children}
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
