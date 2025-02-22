import { LogSeverity } from '@/types.ts';
import { Tag } from '@chakra-ui/react';

export const SeverityTag = (props: { severity: LogSeverity }) => {
  const { severity } = props;

  let color;
  switch (severity) {
    case LogSeverity.ERROR:
      color = 'red';
      break;
    case LogSeverity.WARNING:
      color = 'yellow';
      break;
    case LogSeverity.INFO:
      color = 'blue';
      break;
    case LogSeverity.DEBUG:
      color = 'gray';
      break;
    case LogSeverity.TRACE:
      color = 'gray';
  }

  return <Tag.Root colorPalette={color}>{severity}</Tag.Root>;
};
