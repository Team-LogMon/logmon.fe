export const Time = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
  YEAR: 365 * 24 * 60 * 60 * 1000,

  // 가독성을 위한 함수
  seconds: (n: number) => n * 1000,
  minutes: (n: number) => n * 60 * 1000,
  hours: (n: number) => n * 60 * 60 * 1000,
  days: (n: number) => n * 24 * 60 * 60 * 1000,
  weeks: (n: number) => n * 7 * 24 * 60 * 60 * 1000,
  months: (n: number) => n * 30 * 24 * 60 * 60 * 1000,
  years: (n: number) => n * 365 * 24 * 60 * 60 * 1000,
} as const;
