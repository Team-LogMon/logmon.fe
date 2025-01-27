import { Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';

interface MenuItemProps {
  icon: any;
  title: string;
}

export const MenuItem = ({ icon, title }: MenuItemProps) => {
  return (
    <HStack
      px={4}
      py={1}
      w={'full'}
      color={'gray.400'}
      align={'center'}
      gap={3}
      fontSize={'lg'}
      borderRadius={'md'}
      _hover={{
        bgColor: 'gray.800',
        cursor: 'pointer',
      }}
    >
      <Icon as={icon} boxSize={'26px'} />
      <Text>{title}</Text>
    </HStack>
  );
};
