import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { IoAdd } from 'react-icons/io5';

interface ProjectItemProps {
  title: string;
  pId: string;
}

const ProjectItem = ({ title, pId }: ProjectItemProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor={'gray.700'}
      h={{ base: '120px', sm: '200px' }}
      borderRadius={'md'}
      boxShadow={'md'}
      direction={'column'}
      p={{ base: 2, sm: 4 }}
      _hover={{
        bgColor: 'gray.600',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate(`/app/${pId}/dashboard`);
      }}
    >
      <Text fontWeight={700} fontSize={{ base: '16px', sm: '20px' }}>
        {title}
      </Text>
      <Text fontSize={{ base: '12px', sm: '14px' }} color={'gray.300'}>
        {pId}
      </Text>
    </Flex>
  );
};

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <Flex w={'full'} direction={'column'} align={'center'}>
      <Flex
        position={'fixed'}
        top={0}
        w={'full'}
        h={'60px'}
        align={'center'}
        justify={'space-between'}
        px={6}
        borderBottom={'1px solid black'}
        zIndex={99}
        bgColor={'gray.900'}
      >
        <Box>
          <Text
            fontSize={'24px'}
            fontWeight={'600'}
            onClick={() => {
              navigate('/');
            }}
            _hover={{
              cursor: 'pointer',
            }}
          >
            Logmon
          </Text>
        </Box>
      </Flex>
      <Box h={'60px'} />
      <Box h={'70px'} />
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
            bgColor={'gray.700'}
            h={{ base: '120px', sm: '200px' }}
            borderRadius={'md'}
            boxShadow={'md'}
            direction={'column'}
            p={3}
            onClick={() => {
              navigate('/projects/create');
            }}
            _hover={{
              bgColor: 'gray.600',
              cursor: 'pointer',
            }}
            justify={'center'}
            align={'center'}
          >
            <Icon as={IoAdd} boxSize={'58px'} />
            <Text fontSize={{ base: 'sm', sm: 'xl' }}>Create new project</Text>
          </Flex>
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
        </Grid>
        <Box h={'60px'} />
        <Heading fontSize={'2xl'}>All Projects</Heading>
        <Grid
          templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
          w={'full'}
          gap={{ base: 4, sm: 8 }}
          mt={3}
        >
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
          <ProjectItem title={'LogMon-backend'} pId={'logmon-backend-0011'} />
        </Grid>
      </Flex>
      <Box h={'120px'} />
    </Flex>
  );
};
