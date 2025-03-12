import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { IoAdd } from 'react-icons/io5';
import { Header } from '@/components/Header.tsx';
import { PageWrapper } from '@/components/PageWrapper.tsx';
import { Project } from '@/types.ts';
import { getMyProjects } from '@/shared/api/api.ts';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { InvitationsList } from '@/pages/ProjectsPage/components/InvitationsList.tsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { EmptyProjects } from '@/pages/ProjectsPage/components/EmptyProjects.tsx';

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
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const { data: projects, isFetching } = useQuery({
    queryKey: ['UserProject'],
    queryFn: () => {
      if (user) {
        return getMyProjects();
      } else {
        return [] as unknown as Promise<Project[]>;
      }
    },
    initialData: [],
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ['UserProject'],
    });
  }, [user]);

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
          {user && <InvitationsList />}
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
          {projects.length === 0 && <EmptyProjects />}
          <Grid
            templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
            w={'full'}
            gap={{ base: 4, sm: 8 }}
            mt={3}
          >
            {/*<ProjectItem title={'Demo project'} pId={'mnVFhDf0wbQvkAU3pRBw'} />*/}
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
