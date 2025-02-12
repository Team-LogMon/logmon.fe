import { Severity } from '@/types.ts';
import { Tag } from '@chakra-ui/react';

export const SeverityTag = (props: { severity: Severity }) => {
  const { severity } = props;

  let color;
  switch (severity) {
    case Severity.ERROR:
      color = 'red';
      break;
    case Severity.WARNING:
      color = 'yellow';
      break;
    case Severity.INFO:
      color = 'blue';
      break;
    case Severity.DEBUG:
      color = 'gray';
      break;
    case Severity.TRACE:
      color = 'gray';
  }

  return <Tag.Root colorPalette={color}>{severity}</Tag.Root>;
};
