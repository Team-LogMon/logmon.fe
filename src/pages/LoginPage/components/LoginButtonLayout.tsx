import { Button, Flex, Image, Text } from '@chakra-ui/react';

export const LoginButtonLayout = (props: {
  provider: string;
  image: string;
  disabled: boolean;
}) => {
  const { provider, image, disabled } = props;
  return (
    <Button
      w={'full'}
      variant="outline"
      h={'48px'}
      onClick={() => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/oauth2/authorization/google`;
      }}
      fontSize={'md'}
      border={'1px solid'}
      borderColor={'border'}
      disabled={disabled}
    >
      <Flex gap={3} align={'center'}>
        <Image src={image} boxSize={'26px'} />
        <Text ml={1}>Sign up with {provider}</Text>
      </Flex>
    </Button>
  );
};
