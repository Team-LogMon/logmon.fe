import { Status, Table, Text, useDisclosure } from '@chakra-ui/react';
import { Log } from '@/types.ts';

export const LogRow = (props: Log) => {
  const { id, severity, timeStamp, source, message, jsonPayload } = props;
  console.log(jsonPayload);
  const { open, onToggle } = useDisclosure();

  const getSeverityColor = () => {
    switch (severity) {
      case 'ERROR':
        return 'red';
      case 'WARNING':
        return 'orange';
      case 'INFO':
        return 'blue.500';
      case 'DEBUG':
        return 'gray.400';
      case 'TRACE':
        return 'gray.300';
    }

    return 'gray.400';
  };
  return (
    <>
      <Table.Row
        key={id}
        _hover={{
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        <Table.Cell textAlign={'center'}>
          <Status.Root>
            <Status.Indicator bg={getSeverityColor()} />
          </Status.Root>
        </Table.Cell>
        <Table.Cell>{new Date(timeStamp).toISOString()}</Table.Cell>
        <Table.Cell textAlign={'center'}>{source ? source : '-'}</Table.Cell>
        <Table.Cell>{message}</Table.Cell>
      </Table.Row>
      <Table.Row display={open ? 'table-row' : 'none'}>
        <Table.Cell colSpan={4}>
          <Text
            p={2}
            as={'pre'}
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          >
            message: '{message}', {'\n'}
            severity: {severity} ,{'\n'}
            source: {source ? source : 'null'}, {'\n'}
            jsonPayload:{' '}
            {jsonPayload ? JSON.stringify(jsonPayload, null, 2) : 'null'},{'\n'}
            timeStamp: {new Date(timeStamp).toLocaleString()}, {'\n'}
          </Text>
        </Table.Cell>
      </Table.Row>
    </>
  );
};
