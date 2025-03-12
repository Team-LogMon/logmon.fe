import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select.tsx';
import { createListCollection } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getMyProjects } from '@/shared/api/api.ts';
import { useLoading } from '@/contexts/LoadingContext.tsx';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';

export const ProjectSelector = () => {
  const { pId } = useParams();
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const { data: projects = [], isFetching } = useQuery({
    queryKey: ['UserProject'],
    queryFn: () => {
      return getMyProjects();
    },
    placeholderData: [],
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isFetching) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isFetching]);

  if (projects.length === 0) {
    return;
  }

  const projectsCollection = createListCollection({
    items: (projects || []).map((p) => {
      return {
        value: p.id,
        label: p.title,
      };
    }),
  });

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
