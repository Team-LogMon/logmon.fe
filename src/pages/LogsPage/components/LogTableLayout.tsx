import { Table } from '@chakra-ui/react';
import { ReactNode, useRef } from 'react';

interface LogTableLayoutProps {
  children: ReactNode;
  height?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LogTableLayout = (props: LogTableLayoutProps) => {
  const { children, height = 'calc(100vh - 340px)', size = 'sm' } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  setTimeout(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
      });
    }
  }, 0);

  return (
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
            <Table.ColumnHeader>Source</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'start'}>message</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{children}</Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
