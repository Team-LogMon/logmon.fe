import { useEffect, useState } from 'react';
import { getInvitations, getProject } from '@/shared/api/api.ts';
import { Member, Project } from '@/types.ts';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { VStack } from '@chakra-ui/react';
import { Invitation } from '@/pages/ProjectsPage/components/Invitation.tsx';

interface InvitationsListProps {
  refreshProjects: () => void;
}

export const InvitationsList = (props: InvitationsListProps) => {
  const { refreshProjects } = props;
  const user = useAuthStore((state) => state.user);
  const [invitations, setInvitations] = useState<Member[]>([] as Member[]);
  const [projects, setProjects] = useState<Map<string, Project>>(new Map());
  const { showLoading, hideLoading } = useLoading();
  const [refreshCount, setRefreshCount] = useState(0);

  const refresh = () => setRefreshCount((prev) => ++prev);

  useEffect(() => {
    if (!user) return;

    showLoading();
    getInvitations()
      .then(async (m) => {
        setInvitations(m);

        const projectData = await Promise.all(
          m.map(
            (d) => getProject(d.projectId).catch(() => null) // 실패하면 null 반환
          )
        );

        const newProjectMap = new Map(
          projectData.filter((p) => p !== null).map((p) => [p!.id, p!])
        );

        setProjects(newProjectMap);
        hideLoading();
      })
      .catch(() => hideLoading());
  }, [user, refreshCount]);

  if (invitations.length === 0) return;

  if (invitations.length !== projects.size) return;

  return (
    <VStack mb={8} gap={4}>
      {invitations.map((i) => (
        <Invitation
          key={i.id}
          member={i}
          project={projects.get(i.projectId)!}
          refresh={() => {
            refreshProjects();
            refresh();
          }}
        />
      ))}
    </VStack>
  );
};
