import { ReactNode } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import { PageWrapper } from '@/components/PageWrapper.tsx';

interface DrawerCreateProjectPageLayoutProps {
  children: ReactNode;
  onBefore?: () => void;
}

export const CreateProjectPageLayout = ({
  children,
  onBefore,
}: DrawerCreateProjectPageLayoutProps) => {
  return (
    <PageWrapper>
      <Flex w={'full'} h={'100vh'} position={'relative'}>
        <Flex
          grow={1}
          direction={'column'}
          p={{ base: '20px', sm: '100px' }}
          h={'full'}
          bg={'bg'}
        >
          <Flex h={'60px'} shrink={0} />
          <Flex w={{ base: 'full', lg: '2xl' }} direction={'column'}>
            {onBefore && (
              <IconButton
                boxSize={'36px'}
                mb={10}
                onClick={onBefore}
                bg={'bg'}
                color={'fg'}
              >
                <IoArrowBack style={{ width: '100%', height: '100%' }} />
              </IconButton>
            )}
            {children}
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
