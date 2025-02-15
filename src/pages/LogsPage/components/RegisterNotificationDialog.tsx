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
  useDisclosure,
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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { toaster } from '@/components/ui/toaster.tsx';
import { createLogAlertDescription } from '@/shared/api/api.ts';

interface RegisterNotificationDialogProps {
  refresh: () => void;
}

export const RegisterNotificationDialog = ({
  refresh,
}: RegisterNotificationDialogProps) => {
  const { pId } = useParams();
  const { open, setOpen } = useDisclosure();
  const { showLoading, hideLoading } = useLoading();
  const appearance = useThemeStore((state) => state.appearance);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [platform, setPlatform] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [alertThreshold, setAlertThreshold] = useState<Severity | null>(null);
  const [url, setUrl] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Map<string, string>>(
    new Map<string, string>()
  );

  if (!pId) {
    throw Error();
  }

  const clear = () => {
    setPlatform(null);
    setName('');
    setAlertThreshold(null);
    setUrl('');
    setFieldErrors(new Map());
    setHasSubmitted(false);
  };

  const close = () => {
    clear();
    setOpen(false);
  };

  useEffect(() => {
    checkFieldErrors();
  }, [name, platform, url, alertThreshold]);

  const checkFieldErrors = (): boolean => {
    let errorFlag = false;
    const newFieldErrors = new Map<string, string>();
    if (!platform) {
      newFieldErrors.set('platform', 'Platform should be selected.');
      errorFlag = true;
    }

    if (name.trim().length === 0) {
      newFieldErrors.set('name', 'Name is required.');
      errorFlag = true;
    }

    if (url.trim().length === 0) {
      newFieldErrors.set('url', 'URL is required.');
      errorFlag = true;
    }

    if (alertThreshold == null) {
      newFieldErrors.set('alertThreshold', 'AlertThreshold should be selected');
      errorFlag = true;
    }

    setFieldErrors(newFieldErrors);
    return errorFlag;
  };

  const onClickRegisterBtn = async () => {
    if (!hasSubmitted) {
      setHasSubmitted(true);
    }

    if (checkFieldErrors()) {
      toaster.create({
        type: 'error',
        title: 'Form submission failed',
        description: 'Please fill in all required fields before proceeding.',
      });
      return;
    }

    showLoading();
    await createLogAlertDescription(pId, name, platform!, url, alertThreshold!);
    hideLoading();
    toaster.create({
      type: 'info',
      title: `LogAlertSubscription "${name}" registered successfully`,
    });
    refresh();
    close();
  };

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
    <DialogRoot placement={'center'} open={open}>
      <DialogTrigger asChild>
        <Button colorPalette={'blue'} onClick={() => setOpen(true)}>
          Add Notification
        </Button>
      </DialogTrigger>
      <DialogContent className={appearance} bg={'bg.panel'} color={'fg'}>
        <DialogHeader>
          <DialogTitle>Add Notification</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <VStack gap={4}>
            <Field
              label={'Name'}
              required
              invalid={hasSubmitted && !!fieldErrors.get('name')}
              errorText={fieldErrors.get('name')}
            >
              <Input
                placeholder={'name'}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Field>
            <Field
              invalid={hasSubmitted && !!fieldErrors.get('platform')}
              errorText={fieldErrors.get('platform')}
              required
            >
              <SelectRoot
                collection={notificationPlatforms}
                onValueChange={(details) => {
                  setPlatform(details.value[0]);
                }}
              >
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
            </Field>

            <Field
              label={'Webhook URL'}
              required
              invalid={hasSubmitted && !!fieldErrors.get('url')}
              errorText={fieldErrors.get('url')}
            >
              <Input
                placeholder={'webhook url'}
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </Field>
            <Field
              required
              invalid={hasSubmitted && !!fieldErrors.get('alertThreshold')}
              errorText={fieldErrors.get('alertThreshold')}
            >
              <SelectRoot
                collection={logSeverities}
                onValueChange={(details) => {
                  setAlertThreshold(details.value[0] as Severity);
                }}
              >
                <SelectLabel>
                  Get notified when log severity exceeds…
                </SelectLabel>
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
          </VStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button colorPalette={'blue'} onClick={onClickRegisterBtn}>
            Register
          </Button>
        </DialogFooter>
        <DialogCloseTrigger
          color={appearance == 'dark' ? 'white' : 'fg'}
          _hover={{
            bg: appearance == 'dark' ? 'gray.950' : 'bg.emphasized',
          }}
          onClick={close}
        />
      </DialogContent>
    </DialogRoot>
  );
};
