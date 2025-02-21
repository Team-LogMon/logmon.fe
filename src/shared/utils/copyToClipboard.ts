import { toaster } from '@/components/ui/toaster.tsx';

export const copyToClipboard = (copyStr: string) => {
  navigator.clipboard
    .writeText(copyStr)
    .then(() => {
      toaster.create({
        type: 'success',
        title: 'Clipboard copied.',
      });
    })
    .catch(() => {
      toaster.create({
        type: 'error',
        title: 'Failed to copy clipboard.',
      });
    });
};
