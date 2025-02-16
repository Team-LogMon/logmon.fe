import { HStack, Table, Tag, Text } from '@chakra-ui/react';

interface MemberRowProps {
  email: string;
  isOwner: boolean;
  status: string;
  permissions: string[];
}

const permissionsColorMap: {
  [key: string]: string;
} = {
  'Register Webhook': 'blue',
  'See Logs': 'yellow',
  'NO PERMISSIONS': 'black',
};

export const MemberRow = (props: MemberRowProps) => {
  const { email, isOwner, status, permissions } = props;

  let statusColor;

  if (status === 'ACTIVE') {
    statusColor = 'green';
  } else if (status === 'DEACTIVE') {
    statusColor = 'red';
  } else if (status === 'PENDING') {
    statusColor = 'yellow';
  }

  return (
    <Table.Row>
      <Table.Cell w={'sm'}>
        <HStack>
          <Text>{email}</Text>
          {isOwner && <Tag.Root>OWNER</Tag.Root>}
          <Tag.Root colorPalette={statusColor}>{status}</Tag.Root>
        </HStack>
      </Table.Cell>

      <Table.Cell display={'flex'} gap={3}>
        {permissions.map((p) => (
          <Tag.Root colorPalette={permissionsColorMap[p]}>{p}</Tag.Root>
        ))}
      </Table.Cell>
    </Table.Row>
  );
};
