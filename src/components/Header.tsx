import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { ThemeChangeBtn } from '@/components/ThemeChangeBtn.tsx';

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        bg={'bg'}
        position={'fixed'}
        top={0}
        w={'full'}
        h={'60px'}
        align={'center'}
        justify={'space-between'}
        px={6}
        borderBottom={'1px solid'}
        borderColor={'border.emphasized'}
        zIndex={99}
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
        <Flex gap={5}>
          {children}
          <ThemeChangeBtn />
        </Flex>
      </Flex>
      <Box h={'60px'} />
    </>
  );
};
