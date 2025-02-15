import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { IoAdd } from 'react-icons/io5';
import { Header } from '@/components/Header.tsx';
import { PageWrapper } from '@/components/PageWrapper.tsx';

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
  const navigate = useNavigate();

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
            <ProjectItem title={'Explore Demo-project'} pId={'demo-001'} />
          </Grid>
          <Box h={'60px'} />
          <Heading fontSize={'2xl'}>All Projects</Heading>
          <Grid
            templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
            w={'full'}
            gap={{ base: 4, sm: 8 }}
            mt={3}
          >
            <ProjectItem title={'Explore Demo-project'} pId={'demo-001'} />
          </Grid>
        </Flex>
      </Flex>
      <Box h={'120px'} />
    </PageWrapper>
  );
};
