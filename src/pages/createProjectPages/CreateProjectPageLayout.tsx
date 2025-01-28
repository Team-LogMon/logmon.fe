import { ReactNode } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { useNavigate } from 'react-router';

interface CreateProjectPageOutlineProps {
  children?: ReactNode;
}
export const CreateProjectPageLayout = ({
  children,
}: CreateProjectPageOutlineProps) => {
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
        bgColor={'#242424'}
      >
        <Box>
          <Text
            fontSize={'24px'}
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
        </Box>
      </Flex>

      <Flex w={'full'} h={'full'}>
        <Flex
          grow={1}
          direction={'column'}
          p={{ base: '20px', sm: '100px' }}
          h={'full'}
        >
          <Flex h={'60px'} shrink={0} />
          {children}
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
