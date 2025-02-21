import { Box, Flex, Grid, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import { useNavigate, useParams } from 'react-router';
import { ReactNode, useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '@/shared/api/api.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { Project } from '@/types.ts';
import { copyToClipboard } from '@/shared/utils/copyToClipboard.ts';

interface ApiKeyItemProps {
  title: string;
  description: string;
  apiKey: string;
  isSecret: boolean;
}

const ApiKeyItem = ({
  title,
  description,
  apiKey,
  isSecret,
}: ApiKeyItemProps) => {
  const [lock, setLock] = useState<boolean>(true);
  const displayApiKey = isSecret && lock ? '*'.repeat(apiKey.length) : apiKey;

  return (
    <Flex justify={'space-between'} align={'center'} p={5}>
      <Flex direction={'column'}>
        <Text>{title}</Text>
        <Text fontSize={'sm'} color={'fg.muted'}>
          {description}
        </Text>
      </Flex>
      <Flex align={'center'} gap={3}>
        {isSecret && (
          <Icon
            as={lock ? CiLock : CiUnlock}
            _hover={{
              cursor: 'pointer',
            }}
            onClick={() => setLock(!lock)}
          />
        )}

        <Text fontSize={'sm'} fontFamily={'monospace'}>
          {displayApiKey}
        </Text>
        <Icon
          as={FaRegCopy}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            copyToClipboard(apiKey);
          }}
        />
      </Flex>
    </Flex>
  );
};

interface ApiKeyListProps {
  children: ReactNode;
}

const ApiKeyList = ({ children }: ApiKeyListProps) => {
  return (
    <Grid
      w={'full'}
      bg={'bg.panel'}
      templateColumns={'repeat(1, 1fr)'}
      gap={1}
      border={'1px solid'}
      borderColor={'border'}
    >
      {children}
    </Grid>
  );
};

export const SettingsApiKeyPage = () => {
  const { pId } = useParams();
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const { data: project, isFetching } = useQuery({
    queryKey: ['Project'],
    queryFn: () => getProject(pId!),
    initialData: {
      id: ' - ',
    } as Project,
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
      </Box>
      <Heading size={'2xl'} mb={8}>
        API Key
      </Heading>
      <ApiKeyList>
        <ApiKeyItem
          title={'Application ID'}
          description={'This is your unique project identifier.'}
          apiKey={project?.id}
          isSecret={false}
        />
        <ApiKeyItem
          title={'Api Secret Key'}
          description={'This is used when calling the REST API.'}
          apiKey={'FD83b3bfkZVHFD83b3bfkZVH'}
          isSecret={true}
        />
        <ApiKeyItem
          title={'Dummy ID'}
          description={'This is Dummy API KEY'}
          apiKey={'FD83b3bfkZVHFD83b3bfkZVH'}
          isSecret={true}
        />
      </ApiKeyList>
    </ProjectPageLayout>
  );
};
