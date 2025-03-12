import { Button, Card, Flex, HStack, Input } from '@chakra-ui/react';

export const LogFilteringCard = () => {
  return (
    <Card.Root w={'full'}>
      <Card.Body>
        <Flex align={'center'} gap={3}>
          <Flex direction={'column'} gap={1}>
            <HStack>
              <Button variant={'subtle'}>Today</Button>
              <Button variant={'subtle'}>Yesterday</Button>
              <Button variant={'subtle'}>Last week</Button>
            </HStack>
          </Flex>
          <Flex w={'full'}>
            <Input />
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};
