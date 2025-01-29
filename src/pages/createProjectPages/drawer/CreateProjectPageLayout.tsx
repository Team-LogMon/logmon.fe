import { ReactNode } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';

interface DrawerCreateProjectPageLayoutProps {
  children: ReactNode;
  onBefore?: () => void;
}

export const CreateProjectPageLayout = ({
  children,
  onBefore,
}: DrawerCreateProjectPageLayoutProps) => {
  return (
    <Flex w={'full'} h={'full'} position={'relative'}>
      <Flex
        grow={1}
        direction={'column'}
        p={{ base: '20px', sm: '100px' }}
        h={'full'}
        bgColor={'gray.900'}
      >
        <Flex h={'60px'} shrink={0} />
        <Flex w={{ base: 'full', lg: '2xl' }} direction={'column'}>
          {onBefore && (
            <IconButton
              bg={'inherit'}
              color={'white'}
              boxSize={'36px'}
              mb={10}
              onClick={onBefore}
            >
              <IoArrowBack style={{ width: '100%', height: '100%' }} />
            </IconButton>
          )}
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
