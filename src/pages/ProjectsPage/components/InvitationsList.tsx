import { useEffect } from 'react';
import { getInvitedProjects } from '@/shared/api/api.ts';
import { Project } from '@/types.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { VStack } from '@chakra-ui/react';
import { Invitation } from '@/pages/ProjectsPage/components/Invitation.tsx';
import { useQuery } from '@tanstack/react-query';

export const InvitationsList = () => {
  const { showLoading, hideLoading } = useLoading();

  const { data: invitedProjects, isFetching } = useQuery({
    queryKey: ['InvitedProject'],
    queryFn: getInvitedProjects,
    initialData: [] as Project[],
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

  if (invitedProjects.length === 0) return;

  return (
    <VStack mb={8} gap={4}>
      {invitedProjects.map((p) => (
        <Invitation key={p.id} project={p} />
      ))}
    </VStack>
  );
};
