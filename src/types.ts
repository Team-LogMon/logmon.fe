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
  email: string;
  socialType: string;
  profileImageURL: string;
  createdAt: number;
  updatedAt: number;
  status: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: 'ACTIVE' | 'DEACTIVE';
  pricing: 'FREE' | 'BASIC';
  createdAt: number;
  updatedAt: number;
};

export type Member = {
  id: string;
  projectId: string;
  userId: string;
  owner: boolean;
  userEmail: string;
  permissions: string[];
  status: 'ACTIVE' | 'DEACTIVE' | 'PENDING';
  createdAt: number;
  updatedAt: number;
};
