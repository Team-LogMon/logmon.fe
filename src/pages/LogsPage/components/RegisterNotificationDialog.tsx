import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {
  Button,
  createListCollection,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select.tsx';
import { Field } from '@/components/ui/field.tsx';
import { Severity } from '@/types.ts';
import { getIcon } from '@/shared/Icon.ts';

export const RegisterNotificationDialog = () => {
  const appearance = useThemeStore((state) => state.appearance);

  const notificationPlatforms = createListCollection({
    items: [
      {
        label: 'Slack',
        value: 'slack',
        icon: getIcon('slack'),
      },
      {
        label: 'Discord',
        value: 'discord',
        icon: getIcon('discord'),
      },
    ],
  });

  const logSeverities = createListCollection({
    items: Object.values(Severity).map((severity) => {
      return {
        label: severity,
        value: severity,
      };
    }),
  });

  return (
    <DialogRoot placement={'center'}>
      <DialogTrigger asChild>
        <Button colorPalette={'blue'}>Add Notification</Button>
      </DialogTrigger>
      <DialogContent className={appearance} bg={'bg.panel'} color={'fg'}>
        <DialogHeader>
          <DialogTitle>Add Notification</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <VStack gap={4}>
            <SelectRoot collection={notificationPlatforms}>
              <SelectLabel>Platform</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder={'Select platform'} />
              </SelectTrigger>
              <SelectContent
                className={appearance}
                zIndex={'popover'}
                bg={'bg.panel'}
                color={'fg'}
              >
                {notificationPlatforms.items.map((platform) => (
                  <SelectItem item={platform} key={platform.value}>
                    <HStack>
                      <Icon as={platform.icon} />
                      <Text>{platform.label}</Text>
                    </HStack>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <Field label={'Webhook URL'} required>
              <Input placeholder={'webhook url'} />
            </Field>
            <SelectRoot collection={logSeverities}>
              <SelectLabel>Get notified when log severity exceeds…</SelectLabel>
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
          </VStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="subtle">Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette={'blue'}>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger
          color={appearance == 'dark' ? 'white' : 'fg'}
          _hover={{
            bg: appearance == 'dark' ? 'gray.950' : 'bg.emphasized',
          }}
        />
      </DialogContent>
    </DialogRoot>
  );
};
