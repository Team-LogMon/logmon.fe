export enum Severity {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  TRACE = 'TRACE',
}

export type TimeStamp = number;

export type Log = {
  id: string;
  projectId: string;
  severity: Severity;
  message: string;
  source?: string;
  timeStamp: TimeStamp;
  jsonPayload?: object;
};

export type LogAlertSubscription = {
  id: string;
  name: string;
  projectId: string;
  platform: string;
  url: string;
  alertThreshold: Severity;
  dailyQuotaLimit: number;
  dailyQuotaUsed: number;
  monthlyQuotaLimit: number;
  monthlyQuotaUsed: number;
  createdAt: number;
  updatedAt: number;
};

export type User = {
  id: string;
  name: string;
  profileImage: string;
  createdAt: number;
  updatedAt: number;
};
