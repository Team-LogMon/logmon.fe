import { EmptyState, HStack, Link, Table, VStack } from '@chakra-ui/react';
import { Children, ReactElement, useRef } from 'react';
import { LogRowLayout } from '@/pages/LogsPage/components/LogRowLayout.tsx';
import { LuExternalLink, LuLogs } from 'react-icons/lu';

interface LogTableLayoutProps {
  children:
    | ReactElement<typeof LogRowLayout>
    | ReactElement<typeof LogRowLayout>[];
  height?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LogTableLayout = (props: LogTableLayoutProps) => {
  let { children, height = 'calc(100vh - 340px)', size = 'sm' } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const childrenArray = Children.toArray(children);

  setTimeout(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
      });
    }
  }, 0);

  const isEmpty = childrenArray.length === 0;

  if (isEmpty) {
    height = '39px';
  }

  return (
    <>
      <Table.ScrollArea
        w={'full'}
        h={height}
        mt={'20px'}
        borderWidth={'1px'}
        ref={scrollRef}
      >
        <Table.Root stickyHeader interactive size={size}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader w={'30px'}>Severity</Table.ColumnHeader>
              <Table.ColumnHeader w={'160px'}>Timestamp</Table.ColumnHeader>
              <Table.ColumnHeader w={'120px'}>Source</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={'start'}>
                message
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{childrenArray.length !== 0 && children}</Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      {childrenArray.length === 0 && (
        <EmptyState.Root
          bg={'bg'}
          h={'calc(100vh - 400px)'}
          className={'no-drag'}
        >
          <EmptyState.Content>
            <EmptyState.Indicator>
              <LuLogs />
            </EmptyState.Indicator>
            <VStack textAlign={'center'}>
              <EmptyState.Title>No Logs Exists . . .</EmptyState.Title>
              <EmptyState.Description>
                Explore Documentation and add log here.
              </EmptyState.Description>
              <HStack>
                <Link colorPalette={'blue'}>
                  Javascript <LuExternalLink />
                </Link>
                <Link colorPalette={'blue'}>
                  Java <LuExternalLink />
                </Link>
              </HStack>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      )}
    </>
  );
};
