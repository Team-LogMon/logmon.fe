import { Box, Flex, For, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IDocumentItem } from '@/documentations/types.ts';
import { useNavigate } from 'react-router';
import { DocumentationMenus } from '@/documentations/DocumentationMenus.ts';
import './documentations.css';

interface DocumentationLayoutProps {
  children: ReactNode;
  name: string;
}

const DocumentItem = ({
  name,
  link,
  selected,
}: IDocumentItem & { selected: boolean }) => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor={selected ? 'gray.700' : 'gray.900'}
      borderRadius={'md'}
      p={3}
      onClick={() => navigate(`/documentations${link}`)}
      fontSize={'xl'}
    >
      <Text>{name}</Text>
    </Flex>
  );
};

export const DocumentationLayout = ({
  children,
  name,
}: DocumentationLayoutProps) => {
  const navigate = useNavigate();
  return (
    <Flex w={'full'}>
      <Flex
        w={'400px'}
        shrink={0}
        direction={'column'}
        mt={20}
        position={'sticky'}
        top={'20px'}
        height="calc(100vh - 40px)" // 화면 전체 높이에서 여백 제외
        overflowY="auto" // 내용이 많아질 경우 스크롤 가능
      >
        <Box
          m={4}
          fontSize={'24px'}
          fontWeight={800}
          onClick={() => navigate('/')}
          _hover={{
            cursor: 'pointer',
          }}
        >
          Logmon
        </Box>
        <For each={DocumentationMenus}>
          {(item, index) => (
            <DocumentItem
              key={index}
              name={item.name}
              link={item.link}
              selected={item.name === name}
            />
          )}
        </For>
      </Flex>
      <Flex
        direction={'column'}
        grow={1}
        gap={2}
        px={'60px'}
        className={'documentations'}
      >
        <Box h={'80px'} />
        {children}
      </Flex>
    </Flex>
  );
};
