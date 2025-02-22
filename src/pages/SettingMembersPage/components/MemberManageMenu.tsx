import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu.tsx';
import { Icon, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { RemoveTeamMemberDialog } from '@/pages/SettingMembersPage/components/RemoveTeamMemberDialog.tsx';

export const MemberManageMenu = (props: { memberId: string }) => {
  const { memberId } = props;
  const { open, setOpen } = useDisclosure();
  return (
    <>
      <MenuRoot>
        <MenuTrigger>
          <IconButton bg={'inherit'} color={'fg'}>
            <Icon as={IoEllipsisVerticalSharp}></Icon>
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          <MenuItem
            value={'remove'}
            color={'red'}
            onClick={() => setOpen(true)}
          >
            Remove team member
          </MenuItem>
        </MenuContent>
      </MenuRoot>
      <RemoveTeamMemberDialog
        open={open}
        setOpen={setOpen}
        memberId={memberId}
      />
    </>
  );
};
