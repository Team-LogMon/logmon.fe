import { HStack, Table, Tag, Text } from '@chakra-ui/react';
import { MemberManageMenu } from '@/pages/SettingMembersPage/components/MemberManageMenu.tsx';

interface MemberRowProps {
  memberId: string;
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
  const { memberId, email, isOwner, status, permissions } = props;

  let statusColor;

  if (status === 'ACTIVE') {
    statusColor = 'green';
  } else if (status === 'INACTIVE') {
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

      <Table.Cell>
        <HStack>
          {permissions.map((p) => (
            <Tag.Root key={p} colorPalette={permissionsColorMap[p]}>
              {p}
            </Tag.Root>
          ))}
        </HStack>
      </Table.Cell>
      <Table.Cell p={0}>
        <MemberManageMenu memberId={memberId} />
      </Table.Cell>
    </Table.Row>
  );
};
