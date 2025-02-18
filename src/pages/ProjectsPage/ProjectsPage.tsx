import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { IoAdd } from 'react-icons/io5';
import { Header } from '@/components/Header.tsx';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { useEffect, useState } from 'react';
import { Project } from '@/types.ts';
import { getMembersByUserId, getProjectsByIdsIn } from '@/shared/api/api.ts';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { InvitationsList } from '@/pages/ProjectsPage/components/InvitationsList.tsx';

interface ProjectItemProps {
  title: string;
  pId: string;
}

const ProjectItem = ({ title, pId }: ProjectItemProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      bg={'bg.panel'}
      border={'1px solid'}
      borderColor={'border'}
      h={{ base: '120px', sm: '200px' }}
      borderRadius={'md'}
      boxShadow={'md'}
      direction={'column'}
      p={{ base: 2, sm: 4 }}
      _hover={{
        bgColor: 'bg.emphasized',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate(`/app/${pId}/dashboard`);
      }}
    >
      <Text fontWeight={700} fontSize={{ base: '16px', sm: '20px' }}>
        {title}
      </Text>
      <Text fontSize={{ base: '12px', sm: '14px' }} color={'fg.muted'}>
        {pId}
      </Text>
    </Flex>
  );
};

export const ProjectsPage = () => {
  const user = useAuthStore((state) => state.user);
  const [projects, setProjects] = useState<Project[]>([] as Project[]);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();
  const [refreshCount, setRefreshCount] = useState(0);

  const refresh = () => setRefreshCount((prev) => ++prev);

  useEffect(() => {
    if (user) {
      showLoading();
      getMembersByUserId(user!.id)
        .then((mResponse) => {
          const projectIds = mResponse.map((m) => m.projectId);

          getProjectsByIdsIn(projectIds).then((pResponse) => {
            setProjects(pResponse);
            hideLoading();
          });
        })
        .catch(() => {
          hideLoading();
        });
    }
  }, [refreshCount]);

  return (
    <PageWrapper>
      <Header />
      <Box h={'70px'} />
      <Flex w={'full'} justify={'center'}>
        <Flex
          w={{ base: 'full', sm: '2xl', lg: '5xl' }}
          px={4}
          direction={'column'}
        >
          <InvitationsList refreshProjects={refresh} />
          <Heading fontSize={'2xl'}>Recent Projects</Heading>
          <Grid
            templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
            w={'full'}
            gap={{ base: 4, sm: 8 }}
            mt={3}
          >
            <Flex
              bg={'bg.panel'}
              border={'1px solid'}
              borderColor={'border'}
              h={{ base: '120px', sm: '200px' }}
              borderRadius={'md'}
              boxShadow={'md'}
              direction={'column'}
              p={3}
              onClick={() => {
                navigate('/projects/create');
              }}
              _hover={{
                bgColor: 'bg.emphasized',
                cursor: 'pointer',
              }}
              justify={'center'}
              align={'center'}
            >
              <Icon as={IoAdd} boxSize={'58px'} color={'fg.muted'} />
              <Text fontSize={{ base: 'sm', sm: 'xl' }} color={'fg.muted'}>
                Create new project
              </Text>
            </Flex>
            {projects.map((p) => (
              <ProjectItem title={p.title} pId={p.id} key={p.id} />
            ))}
          </Grid>
          <Box h={'60px'} />
          <Heading fontSize={'2xl'}>All Projects</Heading>
          <Grid
            templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
            w={'full'}
            gap={{ base: 4, sm: 8 }}
            mt={3}
          >
            <ProjectItem title={'Demo project'} pId={'mnVFhDf0wbQvkAU3pRBw'} />
            {projects.map((p) => (
              <ProjectItem title={p.title} pId={p.id} key={p.id} />
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Box h={'120px'} />
    </PageWrapper>
  );
};
