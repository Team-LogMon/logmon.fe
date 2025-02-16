import { User } from '@/types.ts';
import { create } from 'zustand';
import { getMe, logOut } from '@/shared/api/api.ts';

interface AuthState {
  user: User | null;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  fetchUser: async () => {
    try {
      const response = await getMe();
      if (response.logined) {
        set({ user: response.user });
      } else {
        set({ user: null });
      }
    } catch (error) {
      set({ user: null });
    }
  },
  logout: async () => {
    set({ user: null });
    await logOut();
  },
}));
