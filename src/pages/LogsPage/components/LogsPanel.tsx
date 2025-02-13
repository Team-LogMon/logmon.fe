import { Table } from '@chakra-ui/react';
import { LogRow } from '@/pages/LogsPage/components/LogRow.tsx';
import { useEffect, useRef, useState } from 'react';
import { Log } from '@/types.ts';
import { getLogs } from '@/shared/api/api.ts';
import { useLogsTimeSliderStore } from '@/shared/store/logsTimeSliderStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';

export const LogsPanel = () => {
  const from = useLogsTimeSliderStore((state) => state.left);
  const to = useLogsTimeSliderStore((state) => state.right);
  const { showLoading, hideLoading } = useLoading();
  const [logs, setLogs] = useState<Log[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, [from, to]);

  useEffect(() => {
    showLoading();
    getLogs('p-1', from, to).then((res) => {
      setLogs(res);
      hideLoading();

      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
          });
        }
      }, 100);
    });
  }, [from, to]);

  return (
    <Table.ScrollArea
      h={'calc(100vh - 340px)'}
      mt={'20px'}
      borderWidth={'1px'}
      ref={scrollRef}
    >
      <Table.Root stickyHeader interactive size={'sm'}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w={'30px'}>Severity</Table.ColumnHeader>
            <Table.ColumnHeader w={'160px'}>Timestamp</Table.ColumnHeader>
            <Table.ColumnHeader>Source</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'start'}>message</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {logs.map((log) => {
            return (
              <LogRow
                id={log.id}
                projectId={log.projectId}
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
