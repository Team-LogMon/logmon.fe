import { create } from 'zustand';

interface DocumentationAccordionStore {
  openMenus: string[];
  toggle: (name: string) => void;
}

export const useDocumentAccordionStore = create<DocumentationAccordionStore>(
  (set) => ({
    openMenus: [],
    toggle: (name: string) => {
      set((state) => {
        const isOpen = state.openMenus.includes(name);
        return {
          openMenus: isOpen
            ? state.openMenus.filter((menu) => menu !== name) // 제거 (닫기)
            : [...state.openMenus, name], // 추가 (열기)
        };
      });
    },
  })
);
