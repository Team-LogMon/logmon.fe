import { LogRowLayout } from '@/pages/LogsPage/components/LogRowLayout.tsx';
import { useEffect, useState } from 'react';
import { Log } from '@/types.ts';
import { getLogs } from '@/shared/api/api.ts';
import { useLogsTimeSliderStore } from '@/shared/store/logsTimeSliderStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { LogTableLayout } from '@/pages/LogsPage/components/LogTableLayout.tsx';
import { useParams } from 'react-router';

export const LogTable = () => {
  const { pId } = useParams();
  const from = useLogsTimeSliderStore((state) => state.left);
  const to = useLogsTimeSliderStore((state) => state.right);
  const { showLoading, hideLoading } = useLoading();
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {}, [from, to]);

  useEffect(() => {
    showLoading();
    getLogs(pId!, from, to).then((res) => {
      setLogs(res);
      hideLoading();
    });
  }, [from, to]);

  return (
    <LogTableLayout>
      {logs.map((log) => {
        return (
          <LogRowLayout
            key={log.id}
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
    </LogTableLayout>
  );
};
