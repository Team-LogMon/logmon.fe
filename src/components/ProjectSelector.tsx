import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select.tsx';
import { createListCollection } from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserProjects } from '@/shared/api/api.ts';
import { useAuthStore } from '@/shared/store/authStore.ts';
import { Project } from '@/types.ts';
import { useEffect } from 'react';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { useNavigate, useParams } from 'react-router';

export const ProjectSelector = () => {
  const { pId } = useParams();
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const { data: projects, isFetching } = useQuery({
    queryKey: ['UserProject'],
    queryFn: () => {
      if (user) {
        return getUserProjects({ userId: user?.id });
      } else {
        return [] as unknown as Promise<Project[]>;
      }
    },
    initialData: [] as Project[],
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ['UserProject'],
    });
  }, [user]);

  const projectsCollection = createListCollection({
    items: projects.map((p) => {
      return {
        value: p.id,
        label: p.title,
      };
    }),
  });

  if (projects.length === 0) {
    return;
  }

  const current = projects.filter((p) => p.id === pId!)[0].id;
  return (
    <SelectRoot
      collection={projectsCollection}
      bg={'bg'}
      w={'200px'}
      defaultValue={[current]}
    >
      <SelectTrigger>
        <SelectValueText placeholder="Select Projects" />
      </SelectTrigger>
      <SelectContent bg={'bg'}>
        {projectsCollection.items.map((p) => (
          <SelectItem
            item={p}
            key={p.value}
            onClick={() => navigate(`/app/${p.value}/dashboard`)}
          >
            {p.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
