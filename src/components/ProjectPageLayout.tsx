import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Flex, Image, Text } from '@chakra-ui/react';
import { MenuList } from '@/components/MenuList.tsx';
import logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router';
import { Toaster } from '@/components/ui/toaster.tsx';

export interface ProjectPageLayoutProps {
  children?: React.ReactNode;
  currentTab: string;
}

export const ProjectPageLayout = ({
  children,
  currentTab,
}: ProjectPageLayoutProps) => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
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
        bgColor={'gray.900'}
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
      </Flex>
      <Flex h={'60px'} shrink={0}></Flex>
      <Flex flex={1}>
        {/* 왼쪽 고정된 탭 */}
        <Flex
          direction={'column'}
          position={'fixed'}
          w={'220px'}
          h={'calc(100vh - 60px)'}
        >
          <MenuList currentTab={currentTab} />
        </Flex>
        <Flex w={'220px'} grow={0} shrink={0} />
        <Flex direction={'column'} w={'full'} grow={1}>
          {children}
        </Flex>
      </Flex>
      <Toaster />
    </PageWrapper>
  );
};
