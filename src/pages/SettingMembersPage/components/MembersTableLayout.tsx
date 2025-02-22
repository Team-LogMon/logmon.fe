import { Table } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const MembersTableLayout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <Table.Root w={'full'} interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Member</Table.ColumnHeader>
          <Table.ColumnHeader w={'full'}>Permissions</Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{children}</Table.Body>
    </Table.Root>
  );
};
