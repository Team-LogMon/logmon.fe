import { Button } from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog';
import { Dispatch } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMember } from '@/shared/api/api.ts';
import { toaster } from '@/components/ui/toaster.tsx';
import { useLoading } from '@/contexts/LoadingContext.tsx';

export const RemoveTeamMemberDialog = (props: {
  open: boolean;
  setOpen: Dispatch<import('react').SetStateAction<boolean>>;
  memberId: string;
}) => {
  const queryClient = useQueryClient();
  const { open, setOpen, memberId } = props;
  const { showLoading, hideLoading } = useLoading();

  const deleteMutation = useMutation({
    mutationFn: (request: Parameters<typeof deleteMember>[0]) =>
      deleteMember(request),
    onMutate: () => showLoading,
    onSuccess: async () => {
      hideLoading();
      await queryClient.invalidateQueries({
        queryKey: ['Member'],
      });
      toaster.create({
        type: 'success',
        title: 'Notification deleted successfully.',
      });
    },
    onError: async () => {
      hideLoading();
      toaster.create({
        type: 'error',
        title: 'Something went wrong.',
      });
    },
  });

  return (
    <DialogRoot role="alertdialog" open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action cannot be undone. This will permanently delete your
            members.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            colorPalette="red"
            onClick={() => deleteMutation.mutate({ memberId })}
          >
            Delete
          </Button>
        </DialogFooter>
        <DialogCloseTrigger onClick={() => setOpen(false)} />
      </DialogContent>
    </DialogRoot>
  );
};
