import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import {
  Box,
  Button,
  defineStyle,
  Field,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Table,
  Tag,
  Text,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const floatingStyles = defineStyle({
  pos: 'absolute',
  bg: 'bg',
  px: '0.5',
  top: '-3',
  insetStart: '2',
  fontWeight: 'normal',
  pointerEvents: 'none',
  transition: 'position',
  _peerPlaceholderShown: {
    color: 'fg.muted',
    top: '2.5',
    insetStart: '3',
  },
  _peerFocusVisible: {
    color: 'fg',
    top: '-3',
    insetStart: '2',
  },
});

export const SettingMembersPage = () => {
  const navigate = useNavigate();
  return (
    <ProjectPageLayout currentTab={'Settings'}>
      <Box w={'full'} bg={'bg'}>
        <Link color={'fg.subtle'} my={4} onClick={() => navigate(-1)}>
          <Icon as={IoChevronBackOutline}></Icon>
          Back to Settings
        </Link>
        <Heading fontSize={'2xl'} mb={10}>
          Members & Team
        </Heading>
        <Heading fontSize={'xl'} my={3}>
          Invite Member
        </Heading>
        <Flex w={'full'} align={'center'}>
          <Field.Root my={3} w={'300px'}>
            <Box pos="relative" w={'280px'}>
              <Input className="peer" placeholder="" />
              <Field.Label css={floatingStyles}>Email</Field.Label>
            </Box>
          </Field.Root>
          <Button pos={'relative'} colorPalette={'blue'}>
            Invite
          </Button>
        </Flex>

        <Heading fontSize={'xl'} my={3}>
          Team
        </Heading>
        <Table.Root w={'full'} interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Member</Table.ColumnHeader>
              <Table.ColumnHeader>Permissions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell w={'sm'}>
                sbslc2000@gmail.com <Tag.Root>OWNER</Tag.Root>
                <Tag.Root colorPalette={'green'}>Active</Tag.Root>
              </Table.Cell>

              <Table.Cell display={'flex'} gap={3}>
                <Tag.Root colorPalette={'blue'}>Register Webhook</Tag.Root>
                <Tag.Root colorPalette={'yellow'}>See logs</Tag.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell w={'400px'}>
                <HStack>
                  <Text>sbslc2000@gmail.com</Text>
                  <Tag.Root colorPalette={'yellow'}>Pending</Tag.Root>
                </HStack>
              </Table.Cell>
              <Table.Cell display={'flex'} gap={3}>
                <Tag.Root colorPalette={'blue'}>Register Webhook</Tag.Root>
                <Tag.Root colorPalette={'yellow'}>See logs</Tag.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell w={'400px'}>
                <HStack>
                  <Text>sbslc2000@gmail.com</Text>
                  <Tag.Root colorPalette={'green'}>Active</Tag.Root>
                </HStack>
              </Table.Cell>

              <Table.Cell display={'flex'} gap={3}>
                <Tag.Root colorPalette={'blue'}>Register Webhook</Tag.Root>
                <Tag.Root colorPalette={'yellow'}>See logs</Tag.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell w={'400px'}>
                <HStack>
                  <Text>sbslc2000@gmail.com</Text>
                  <Tag.Root colorPalette={'green'}>Active</Tag.Root>
                </HStack>
              </Table.Cell>

              <Table.Cell display={'flex'} gap={3}>
                <Tag.Root colorPalette={'blue'}>Register Webhook</Tag.Root>
                <Tag.Root colorPalette={'yellow'}>See logs</Tag.Root>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </ProjectPageLayout>
  );
};
