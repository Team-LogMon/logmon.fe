import { useParams } from 'react-router';
import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';

export const DashboardPage = () => {
  const { projectId } = useParams();

  return <ProjectPageLayout></ProjectPageLayout>;
};
