import { create } from 'zustand';
import { Project } from '@/types.ts';
import { getProject } from '@/shared/api/api.ts';

interface ProjectStore {
  project: Project | null;
  isLoading: boolean;
  fetchProject: (projectId: string) => Promise<void>;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  isLoading: true,
  fetchProject: async (projectId) => {
    const project = await getProject(projectId);
    set({
      project: project,
      isLoading: false,
    });
  },
}));
