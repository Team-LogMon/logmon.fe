import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { MemberRow } from '@/pages/SettingMembersPage/components/MemberRow.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { InviteMemberDialog } from '@/pages/SettingMembersPage/components/InviteMemberDialog.tsx';
import { getMembersByProjectId } from '@/shared/api/api.ts';
import { Member } from '@/types.ts';
import { useQuery } from '@tanstack/react-query';
import { MembersTableLayout } from '@/pages/SettingMembersPage/components/MembersTableLayout.tsx'; // const floatingStyles = defineStyle({

export const SettingMembersPage = () => {
  const { pId } = useParams();
  const [searchWord, setSearchWord] = useState<string>('');
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const { data: members, isFetching } = useQuery({
    queryKey: ['Member'],
    queryFn: () => getMembersByProjectId(pId!),
    initialData: [] as Member[],
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

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
            <InviteMemberDialog />
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
        <MembersTableLayout>
          {members
            .filter((m) => m.userEmail.includes(searchWord))
            .map((m) => (
              <MemberRow
                key={m.id}
                memberId={m.id}
                email={m.userEmail}
                isOwner={m.owner}
                status={m.status}
                permissions={m.permissions}
              />
            ))}
        </MembersTableLayout>
      </Box>
    </ProjectPageLayout>
  );
};
