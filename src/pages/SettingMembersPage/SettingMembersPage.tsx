import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Button,
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
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { MemberRow } from '@/pages/SettingMembersPage/MemberRow.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx'; // const floatingStyles = defineStyle({

// const floatingStyles = defineStyle({
//   pos: 'absolute',
//   bg: 'bg',
//   px: '0.5',
//   top: '-3',
//   insetStart: '2',
//   fontWeight: 'normal',
//   pointerEvents: 'none',
//   transition: 'position',
//   _peerPlaceholderShown: {
//     color: 'fg.muted',
//     top: '2.5',
//     insetStart: '3',
//   },
//   _peerFocusVisible: {
//     color: 'fg',
//     top: '-3',
//     insetStart: '2',
//   },
// });

export const SettingMembersPage = () => {
  const [members, setMembers] = useState<
    {
      id: string;
      isOwner: boolean;
      status: string;
      permissions: string[];
    }[]
  >(
    [] as {
      id: string;
      isOwner: boolean;
      status: string;
      permissions: string[];
    }[]
  );
  const [searchWord, setSearchWord] = useState<string>('');
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    setTimeout(() => {
      setMembers([
        {
          id: 'sbslc2000@gmail.com',
          isOwner: true,
          status: 'Active',
          permissions: ['Register Webhook', 'See Logs'],
        },
        {
          id: 'limut0913@gmail.com@gmail.com',
          isOwner: false,
          status: 'Active',
          permissions: ['Register Webhook', 'See Logs'],
        },
        {
          id: 'yui5227@gmail.com',
          isOwner: false,
          status: 'Pending',
          permissions: ['Register Webhook', 'See Logs'],
        },
        {
          id: 'sbslc2000.02@gmail.com',
          isOwner: false,
          status: 'Deactive',
          permissions: ['Register Webhook', 'See Logs'],
        },
      ]);
      hideLoading();
    }, 200);
  }, []);

  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Box w={'full'} bg={'bg'}>
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
              placeholder={'Search members...'}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <Button colorPalette={'blue'}>Invite Member</Button>
          </Flex>
        </Flex>

        {/*<Heading fontSize={'xl'} my={3}>*/}
        {/*  Invite Member*/}
        {/*</Heading>*/}
        {/*<Flex w={'full'} align={'center'}>*/}
        {/*  <Field.Root my={3} w={'300px'}>*/}
        {/*    <Box pos="relative" w={'280px'}>*/}
        {/*      <Input className="peer" placeholder="" />*/}
        {/*      <Field.Label css={floatingStyles}>Email</Field.Label>*/}
        {/*    </Box>*/}
        {/*  </Field.Root>*/}
        {/*  <Button pos={'relative'} colorPalette={'blue'}>*/}
        {/*    Invite*/}
        {/*  </Button>*/}
        {/*</Flex>*/}

        <HStack align={'center'} gap={1}>
          <Heading fontSize={'xl'} my={3}>
            Team
          </Heading>
          <Text fontSize={'lg'} color={'fg.muted'}>
            (5)
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
              .filter((m) => m.id.includes(searchWord))
              .map((m) => (
                <MemberRow
                  key={m.id}
                  email={m.id}
                  isOwner={m.isOwner}
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
