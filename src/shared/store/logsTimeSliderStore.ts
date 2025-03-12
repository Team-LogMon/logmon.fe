import { create } from 'zustand';
import { Time } from '@/shared/utils/Time.ts';

interface LogsTimeSliderStore {
  min: number;
  max: number;
  left: number;
  right: number;

  onChangeMin: (min: number) => void;
  onChangeMax: (max: number) => void;
  onChangeLeft: (left: number) => void;
  onChangeRight: (right: number) => void;

  clear: () => void;
  optimize: () => void;
  onChange: (newLeft: number, newRight: number) => void;
}

export const useLogsTimeSliderStore = create<LogsTimeSliderStore>((set) => {
  const now = Date.now();
  const threeHoursAgo = now - Time.hours(3);
  const oneHourAgo = now - Time.hours(1);

  return {
    min: threeHoursAgo,
    max: now,
    left: oneHourAgo,
    right: now,

    onChangeMin: (min) => set({ min }),
    onChangeMax: (max) => set({ max }),
    onChangeLeft: (left) => set({ left }),
    onChangeRight: (right) => set({ right }),

    clear: () => {
      const now = Date.now();
      set({
        min: now - Time.hours(3),
        max: now,
        left: now - Time.hours(1),
        right: now,
      });
    },

    optimize: () => {
      set((state) => {
        console.log('optimize');
        const now = Date.now();
        const range = state.right - state.left;

        // ✅ 1. 새로운 전체 범위 설정 (현재 range * 3)
        let newMin = state.left - range;
        let newMax = state.right + range;

        // ✅ 2. 우측이 현재 시간과 가까운 경우
        if (newMax > now) {
          newMax = now; // max는 현재 시간을 초과하지 않음
          newMin = newMax - range * 2; // 전체 범위가 유지되도록 min 조정
        }

        return {
          min: newMin,
          max: newMax,
          left: state.left, // ✅ 기존 값 유지
          right: state.right, // ✅ 기존 값 유지
        };
      });
    },

    onChange: (newLeft, newRight) => {
      set((state) => {
        let newMin = state.min;
        let newMax = state.max;
        const range = state.right - state.left;
        const now = Date.now();

        if (newLeft === state.min) {
          newMin = state.min - range * 2;
        }

        if (newRight === state.max) {
          newMax = Math.min(now, state.max + range * 2);
        }

        console.log(newMin, newMax, newLeft, newRight);

        return {
          min: newMin,
          max: newMax,
          left: newLeft,
          right: newRight,
        };
      });
    },
  };
});
