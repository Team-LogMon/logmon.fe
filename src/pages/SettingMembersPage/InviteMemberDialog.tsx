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
  Box,
  Button,
  defineStyle,
  Field,
  Flex,
  HStack,
  Input,
  Tag,
  useDisclosure,
} from '@chakra-ui/react';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import { useState } from 'react';
import { invite } from '@/shared/api/api.ts';
import { useParams } from 'react-router';
import { toaster } from '@/components/ui/toaster.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const floatingStyles = defineStyle({
  pos: 'absolute',
  bg: 'bg.panel',
  px: '0.5',
  top: '-3',
  insetStart: '2',
  fontWeight: 'normal',
  pointerEvents: 'none',
  transition: 'position',
  _peerPlaceholderShown: {
    color: 'fg.muted',
    top: '2.5',
    insetStart: '3',
  },
  _peerFocusVisible: {
    color: 'fg',
    top: '-3',
    insetStart: '2',
  },
});

export const InviteMemberDialog = () => {
  const { pId } = useParams();
  const queryClient = useQueryClient();
  const { open, setOpen } = useDisclosure();

  const appearance = useThemeStore((state) => state.appearance);

  const [emailValue, setEmailValue] = useState<string>('');
  const [emails, setEmails] = useState<string[]>([] as string[]);

  const { showLoading, hideLoading } = useLoading();

  const addMutation = useMutation({
    mutationFn: (request: Parameters<typeof invite>[0]) => invite(request),
    onMutate: showLoading,
    onSuccess: async () => {
      hideLoading();
      toaster.create({
        type: 'success',
        title: 'Successfully invited.',
      });
      await queryClient.invalidateQueries({
        queryKey: ['Member'],
      });
      onClose();
    },
    onError: () => {
      hideLoading();
      toaster.create({
        title: 'Something went wrong.',
        description: 'Please try again later or get in touch with support.',
        type: 'error',
      });
    },
  });

  const handleEnterEmail = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmed = emailValue.trim();
      const s = new Set([...emails, trimmed]);
      setEmails([...s]);
      setEmailValue('');
    }
  };

  const deleteEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const onClose = () => {
    setEmails([]);
    setEmailValue('');
    setOpen(false);
  };

  return (
    <DialogRoot placement={'center'} open={open}>
      <DialogTrigger asChild>
        <Button colorPalette={'blue'} onClick={() => setOpen(true)}>
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className={appearance} color={'fg'}>
        <DialogHeader bg={'bg.panel'} color={'fg'}>
          <DialogTitle>Invite Member</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Flex w={'full'}>
            <Field.Root my={3}>
              <Box pos="relative" w={'full'}>
                <Input
                  className="peer"
                  placeholder="Enter to add"
                  onKeyDown={handleEnterEmail}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <Field.Label css={floatingStyles}>Email</Field.Label>
              </Box>
              <HStack wrap={'wrap'}>
                {emails.map((e) => (
                  <Tag.Root
                    key={e}
                    variant={'subtle'}
                    bg={'bg.muted'}
                    color={'fg'}
                  >
                    <Tag.Label>{e}</Tag.Label>
                    <Tag.EndElement>
                      <Tag.CloseTrigger
                        onClick={() => deleteEmail(e)}
                        _hover={{
                          cursor: 'pointer',
                        }}
                      />
                    </Tag.EndElement>
                  </Tag.Root>
                ))}
              </HStack>
            </Field.Root>
          </Flex>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="subtle" onClick={onClose}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            colorPalette={'blue'}
            onClick={() => {
              addMutation.mutate({
                projectId: pId!,
                inviteeEmails: emails,
              });
            }}
          >
            Invite
          </Button>
        </DialogFooter>
        <DialogCloseTrigger bg={'bg.panel'} color={'fg'} onClick={onClose} />
      </DialogContent>
    </DialogRoot>
  );
};
