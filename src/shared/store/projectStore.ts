import { create } from 'zustand';
import { Project } from '@/types.ts';
import { getProject } from '@/shared/api/api.ts';

interface ProjectStore {
  project: Project | null;
  fetchProject: (projectId: string) => Promise<void>;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  fetchProject: async (projectId) => {
    const project = await getProject(projectId);
    set({
      project: project,
    });
  },
}));
