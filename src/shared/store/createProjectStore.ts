import { create } from 'zustand';
import { Pricing } from '@/shared/const/app/Pricing.ts';

interface CreateProjectStore {
  name: string;
  setName: (name: string) => void;
  pricing: Pricing;
  setPricing: (pricing: Pricing) => void;
  description: string;
  setDescription: (description: string) => void;
}

export const useCreateProjectStore = create<CreateProjectStore>((set) => ({
  name: '',
  pricing: Pricing.FREE,
  setName: (name: string) => set({ name: name }),
  setPricing: (pricing: Pricing) => set({ pricing: pricing }),
  description: '',
  setDescription: (description: string) => set({ description: description }),
}));
