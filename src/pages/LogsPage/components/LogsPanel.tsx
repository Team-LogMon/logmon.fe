import { Table } from '@chakra-ui/react';
import { LogMockData } from '@/pages/LogsPage/LogSampelData.ts';
import { LogRow } from '@/pages/LogsPage/components/LogRow.tsx';
import { useEffect, useRef } from 'react';

export const LogsPanel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <Table.ScrollArea
      h={'calc(100vh - 340px)'}
      mt={'20px'}
      borderWidth={'1px'}
      ref={scrollRef}
    >
      <Table.Root stickyHeader interactive size={'sm'} bg={'bg.panel'}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w={'30px'}>Severity</Table.ColumnHeader>
            <Table.ColumnHeader w={'220px'}>Timestamp</Table.ColumnHeader>
            <Table.ColumnHeader>Source</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'start'}>message</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {LogMockData.map((log) => {
            return (
              <LogRow
                id={log.id}
                severity={log.severity}
                timeStamp={log.timeStamp}
                source={log.source}
                message={log.message}
                jsonPayload={log.jsonPayload}
              />
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
