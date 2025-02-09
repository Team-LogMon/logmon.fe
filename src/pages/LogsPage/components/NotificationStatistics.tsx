import { Card, Flex, Heading, HStack, Progress } from '@chakra-ui/react';

export const NotificationStatistics = () => {
  return (
    <Flex direction={'column'} gap={3}>
      <Heading size={'xl'}>Notification</Heading>
      <Heading size={'lg'}>Quota</Heading>
      <Card.Root>
        <Card.Header>Subscription: IDIDIDID</Card.Header>
        <Card.Body>
          <Progress.Root defaultValue={40}>
            <HStack gap={5}>
              <Progress.Label w={'100px'}>Daily Quota</Progress.Label>
              <Progress.Track w={'360px'}>
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>40%</Progress.ValueText>
            </HStack>
          </Progress.Root>
          <Progress.Root defaultValue={10}>
            <HStack gap={5}>
              <Progress.Label w={'100px'}>Monthly Quota</Progress.Label>
              <Progress.Track w={'360px'}>
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>10%</Progress.ValueText>
            </HStack>
          </Progress.Root>
        </Card.Body>
      </Card.Root>
      <Card.Root>
        <Card.Header>Subscription: IDIDIDID</Card.Header>
        <Card.Body>
          <Progress.Root defaultValue={10}>
            <HStack gap={5}>
              <Progress.Label w={'100px'}>Daily Quota</Progress.Label>
              <Progress.Track w={'360px'}>
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>10%</Progress.ValueText>
            </HStack>
          </Progress.Root>
          <Progress.Root defaultValue={5}>
            <HStack gap={5}>
              <Progress.Label w={'100px'}>Monthly Quota</Progress.Label>
              <Progress.Track w={'360px'}>
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>5%</Progress.ValueText>
            </HStack>
          </Progress.Root>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
