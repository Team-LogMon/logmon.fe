import { HStack, Icon, Text } from '@chakra-ui/react';

interface MenuItemProps {
  icon: any;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export const MenuItem = ({
  icon,
  title,
  isSelected,
  onClick,
}: MenuItemProps) => {
  return (
    <HStack
      px={4}
      py={2}
      w={'full'}
      color={isSelected ? 'white' : 'fg.muted'}
      bgColor={isSelected ? 'blue.600' : 'inherit'}
      align={'center'}
      gap={3}
      borderRadius={'md'}
      _hover={{
        bgColor: isSelected ? 'blue.700' : 'bg.emphasized',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Icon as={icon} boxSize={'26px'} />
      <Text>{title}</Text>
    </HStack>
  );
};
