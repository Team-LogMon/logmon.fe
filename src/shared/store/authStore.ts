import { User } from '@/types.ts';
import { create } from 'zustand';
import { getMe, logOut } from '@/shared/api/api.ts';

interface AuthState {
  user: User | null;
  fetchUser: () => Promise<void>;
  isLoading: boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  fetchUser: async () => {
    try {
      const response = await getMe();
      if (response.logined) {
        set({ user: response.user, isLoading: false });
      } else {
        set({ user: null, isLoading: false });
      }
    } catch (error) {
      set({ user: null, isLoading: false });
    }
  },
  logout: async () => {
    set({ user: null });
    await logOut();
  },
}));
