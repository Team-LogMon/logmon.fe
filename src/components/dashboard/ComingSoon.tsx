import { Flex, Icon, Text } from '@chakra-ui/react';
import { IoBarChartSharp } from 'react-icons/io5';

export const ComingSoon = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      w={'full'}
      h={'full'}
      direction={'column'}
    >
      <Icon as={IoBarChartSharp} boxSize={'48px'} mb={3} color={'gray.400'} />
      <Text fontSize={'xl'} color={'gray.400'}>
        Coming Soon
      </Text>
    </Flex>
  );
};
