import { ProjectPageLayout } from '@/components/ProjectPageLayout.tsx';
import { LogFilteringSlider } from '@/pages/LogsPage/components/LogFilteringSlider.tsx';

export const LogsPage = () => {
  return (
    <ProjectPageLayout currentTab={'Logs'}>
      <LogFilteringSlider />
    </ProjectPageLayout>
  );
};
