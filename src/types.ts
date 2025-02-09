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
  severity: Severity;
  message: string;
  source?: string;
  timeStamp: TimeStamp;
  jsonPayload?: object;
};
