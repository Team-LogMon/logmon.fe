import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Table,
  Text,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { MemberRow } from '@/pages/SettingMembersPage/MemberRow.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { InviteMemberDialog } from '@/pages/SettingMembersPage/InviteMemberDialog.tsx';
import { getMembersByProjectId } from '@/shared/api/api.ts';
import { Member } from '@/types.ts'; // const floatingStyles = defineStyle({

export const SettingMembersPage = () => {
  const { pId } = useParams();
  const [members, setMembers] = useState<Member[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  const [membersRefreshCounter, setMembersRefreshCounter] = useState<number>(0);

  const refresh = () => {
    setMembersRefreshCounter((prev) => ++prev);
  };

  useEffect(() => {
    if (!pId) throw Error();
    showLoading();
    getMembersByProjectId(pId).then((res) => {
      setMembers(res);
      hideLoading();
    });
  }, [membersRefreshCounter]);

  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Box w={'full'}>
        <Link color={'fg.subtle'} my={4} onClick={() => navigate(-1)}>
          <Icon as={IoChevronBackOutline}></Icon>
          Back to Settings
        </Link>
        <Flex justify={'space-between'}>
          <Heading fontSize={'2xl'} mb={10}>
            Members & Team
          </Heading>
          <Flex gap={2}>
            <Input
              bg={'bg.panel'}
              placeholder={'Search members...'}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <InviteMemberDialog refresh={refresh} />
          </Flex>
        </Flex>

        <HStack align={'center'} gap={1}>
          <Heading fontSize={'xl'} my={3}>
            Team
          </Heading>
          <Text fontSize={'lg'} color={'fg.muted'}>
            ({members.length})
          </Text>
        </HStack>

        <Table.Root w={'full'} interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Member</Table.ColumnHeader>
              <Table.ColumnHeader>Permissions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {members
              .filter((m) => m.userEmail.includes(searchWord))
              .map((m) => (
                <MemberRow
                  key={m.id}
                  email={m.userEmail}
                  isOwner={m.owner}
                  status={m.status}
                  permissions={m.permissions}
                />
              ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </ProjectPageLayout>
  );
};
