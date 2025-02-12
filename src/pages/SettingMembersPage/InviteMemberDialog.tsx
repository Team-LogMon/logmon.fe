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
} from '@chakra-ui/react';
import { useThemeStore } from '@/shared/store/themeStore.ts';
import { useState } from 'react';

const floatingStyles = defineStyle({
  pos: 'absolute',
  bg: 'bg',
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
  const appearance = useThemeStore((state) => state.appearance);

  const [emailValue, setEmailValue] = useState<string>('');
  const [emails, setEmails] = useState<string[]>([] as string[]);

  const handleEnterEmail = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const s = new Set([...emails, emailValue]);
      setEmails([...s]);
      setEmailValue('');
    }
  };

  const deleteEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  return (
    <DialogRoot placement={'center'}>
      <DialogTrigger asChild>
        <Button colorPalette={'blue'}>Invite Member</Button>
      </DialogTrigger>
      <DialogContent className={appearance} color={'fg'}>
        <DialogHeader bg={'bg'} color={'fg'}>
          <DialogTitle>Invite Member</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Flex w={'full'}>
            <Field.Root my={3}>
              <Box pos="relative" w={'full'}>
                <Input
                  className="peer"
                  placeholder=""
                  onKeyDown={handleEnterEmail}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <Field.Label css={floatingStyles}>Email</Field.Label>
              </Box>
              <HStack wrap={'wrap'}>
                {emails.map((e) => (
                  <Tag.Root variant={'subtle'} bg={'bg.muted'} color={'fg'}>
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
            <Button
              variant="subtle"
              onClick={() => {
                setEmails([]);
                setEmailValue('');
              }}
            >
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button colorPalette={'blue'}>Invite</Button>
        </DialogFooter>
        <DialogCloseTrigger
          bg={'bg'}
          color={'fg'}
          onClick={() => {
            setEmails([]);
            setEmailValue('');
          }}
        />
      </DialogContent>
    </DialogRoot>
  );
};
