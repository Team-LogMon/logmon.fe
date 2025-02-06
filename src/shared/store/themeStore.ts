import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  appearance: 'dark' | 'light';
  toggle: () => void;
  setAppearance: (theme: 'dark' | 'light') => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      appearance: 'dark', // 기본 테마
      toggle: () =>
        set((state) => ({
          appearance: state.appearance === 'light' ? 'dark' : 'light',
        })),
      setAppearance: (theme) =>
        set({
          appearance: theme,
        }),
    }),
    {
      name: 'theme',
    }
  )
);
