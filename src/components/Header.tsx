import { Box, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { ThemeChangeBtn } from '@/components/ThemeChangeBtn.tsx';
import { IoPersonCircleOutline } from 'react-icons/io5';

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        bg={'bg.base'}
        position={'fixed'}
        top={0}
        w={'full'}
        h={'60px'}
        align={'center'}
        justify={'space-between'}
        px={6}
        borderBottom={'1px solid'}
        borderColor={'border'}
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
          <Flex>
            <ThemeChangeBtn />
            <IconButton
              bg={'bg.base'}
              color={'fg'}
              onClick={() => navigate('/user')}
            >
              <Icon as={IoPersonCircleOutline} />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
      <Box h={'60px'} />
    </>
  );
};
