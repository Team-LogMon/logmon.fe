import { Box, Flex, For, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IDocumentItem } from '@/documentations/types.ts';
import { useNavigate } from 'react-router';
import './documentations.css';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/components/ui/accordion.tsx';
import {
  DocumentationMenus,
  findRootName,
} from '@/documentations/DocumentationMenus.ts';
import { useDocumentAccordionStore } from '@/shared/store/documentationAccordionStore.ts';
import { Header } from '@/components/Header.tsx';

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
      bgColor={selected ? 'bg.emphasized' : 'bg.base'}
      borderRadius={'md'}
      p={3}
      px={10}
      onClick={() => navigate(`/documentations${link}`)}
      fontSize={'md'}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Text>{name}</Text>
    </Flex>
  );
};

export const DocumentationLayout = ({
  children,
  name,
}: DocumentationLayoutProps) => {
  const openMenus = useDocumentAccordionStore((state) => state.openMenus);
  const toggle = useDocumentAccordionStore((state) => state.toggle);
  const defaultOpenMenu = findRootName(name);

  return (
    <Flex w={'full'} h={'100vh'} bg={'bg.base'}>
      <Header />
      <Flex
        w={'400px'}
        shrink={0}
        height={'calc(100vh-60px)'}
        pt={'60px'}
        direction={'column'}
        position={'sticky'}
        overflowY="auto" // 내용이 많아질 경우 스크롤 가능
        borderRight={'1px solid'}
        borderColor={'border'}
        className={'hide-scrollbar'}
      >
        <AccordionRoot
          multiple
          defaultValue={openMenus}
          colorPalette={'purple'}
        >
          {DocumentationMenus.map((item, index) => (
            <AccordionItem key={index} value={item.name}>
              <AccordionItemTrigger
                fontSize={'lg'}
                p={4}
                pl={6}
                bgColor={defaultOpenMenu === item.name ? 'blue.500' : 'bg.base'}
                onClick={() => toggle(item.name)}
              >
                {item.name}
              </AccordionItemTrigger>
              <AccordionItemContent border={'1px solid'} borderColor={'border'}>
                <For each={item.inner}>
                  {(item, index) => (
                    <DocumentItem
                      key={index}
                      name={item.name}
                      link={item.link}
                      selected={item.name === name}
                    />
                  )}
                </For>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
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
