import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { CreateProjectPageLayout } from '@/pages/createProjectPages/CreateProjectPageLayout.tsx';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

interface CreateProjectNamePageProps {
  onNext: (name: string) => void;
}

export const CreateProjectNamePage = ({
  onNext,
}: CreateProjectNamePageProps) => {
  const [name, setName] = useState<string>('');
  return (
    <CreateProjectPageLayout>
      <IconButton
        bg={'inherit'}
        color={'white'}
        boxSize={'36px'}
        mb={10}
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <IoArrowBack style={{ width: '100%', height: '100%' }} />
      </IconButton>

      <Heading fontSize={{ base: '26px', sm: '36px' }}>
        Enter your project name.
      </Heading>
      <Input
        py={{ base: 6, sm: 10 }}
        w={{ base: 'full', sm: 'xl' }}
        type={'text'}
        mt={4}
        borderColor={'gray.400'}
        border={'none'}
        borderBottom={'1px solid'}
        placeholder={'YOUR PROJECT NAME'}
        fontSize={{ base: '26px', sm: '44px' }}
        _focus={{
          border: 'none',
          borderBottom: '3px solid',
          boxShadow: 'none', // focus 상태의 시각적 강조 제거
          outline: 'none',
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Flex w={{ base: 'full', sm: 'xl' }} justify={'space-between'} py={6}>
        <Box></Box>
        <Button
          colorPalette={'blue'}
          w={'120px'}
          fontSize={'xl'}
          onClick={() => onNext(name)}
        >
          Next
        </Button>
      </Flex>
    </CreateProjectPageLayout>
  );
};
