import { PageWrapper } from '@/components/PageWrapper.tsx';
import {
  Button,
  Card,
  Center,
  createListCollection,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field } from '@/components/ui/field.tsx';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select.tsx';
import { LogSeverity } from '@/types.ts';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import { useState } from 'react';
import axios from 'axios';
import { toaster } from '@/components/ui/toaster.tsx';

export function DemoLogPage() {
  const appearance = useThemeStore((state) => state.appearance);
  const logSeverities = createListCollection({
    items: Object.values(LogSeverity).map((severity) => {
      return {
        label: severity,
        value: severity,
      };
    }),
  });

  const [projectId, setProjectId] = useState('');
  const [message, setMessage] = useState('');
  const [source, setSource] = useState('');
  const [severity, setSeverity] = useState<LogSeverity | null>(null);

  const sendLog = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/logs`, {
        projectId,
        message,
        source,
        severity,
        timeStamp: Date.now(),
      });

      toaster.create({
        type: 'success',
        title: 'Success',
        description: 'Log has been sent.',
      });
    } catch (err) {
      const error = err as Error;
      toaster.create({
        type: 'error',
        title: 'Something went wrong.',
        description: error.message,
      });
    }
  };

  return (
    <PageWrapper>
      <Center h={'100vh'} w={'full'}>
        <Card.Root w={'xl'}>
          <Card.Header>Create Log (Demo)</Card.Header>
          <Card.Body gap={3}>
            <Field label={'Project ID'} required>
              <Input
                placeholder={'Project ID'}
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
              />
            </Field>
            <Field label={'message'} required>
              <Input
                placeholder={'message'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
            <Field label={'Source'}>
              <Input
                placeholder={'Source'}
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </Field>
            <Field required>
              <SelectRoot
                collection={logSeverities}
                onValueChange={(details) => {
                  setSeverity(details.value[0] as LogSeverity);
                }}
              >
                <SelectLabel>Severity</SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder={'Select Severity'} />
                </SelectTrigger>
                <SelectContent
                  className={appearance}
                  color={'fg'}
                  zIndex={'popover'}
                >
                  {logSeverities.items.map((severity) => (
                    <SelectItem item={severity} key={severity.value}>
                      <HStack>
                        <Text>{severity.label}</Text>
                      </HStack>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Field>
            <Button mt={10} onClick={sendLog}>
              Send
            </Button>
          </Card.Body>
        </Card.Root>
      </Center>
    </PageWrapper>
  );
}
