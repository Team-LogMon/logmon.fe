export interface LoggerConfig {
  apiKey?: string;
  projectId: string;
  console?: boolean;
  bulk?: number;
}

export enum LogmonSeverity {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  TRACE = 'TRACE',
}

export interface LogData {
  message: string;
  jsonPayload?: object;
  source?: string;
  uid?: string;
  timeStamp?: number;
}

interface LogApiRequest {
  projectId: string;
  message: string;
  timeStamp: number;
  source?: string;
  severity: LogmonSeverity;
  uid?: string;
  jsonPayload?: object;
}

export class LogmonLogger {
  constructor(private readonly config: LoggerConfig) {}

  private consoleLog(
    severity: LogmonSeverity,
    message: string,
    jsonPayload?: object
  ) {
    if (this.config.console) {
      let logFunction = null;
      switch (severity) {
        case LogmonSeverity.ERROR:
          logFunction = console.error;
          return;
        case LogmonSeverity.WARNING:
          logFunction = console.warn;
          return;
        case LogmonSeverity.INFO:
          logFunction = console.info;
          return;
        case LogmonSeverity.DEBUG:
          logFunction = console.debug;
          return;
        case LogmonSeverity.TRACE:
          logFunction = console.trace;
          return;
        default:
          logFunction = console.log;
      }

      logFunction(message, jsonPayload);
    }
  }

  private apiCall(logRequest: LogApiRequest) {
    fetch('http://localhost:8080/api/logs', {
      method: 'post',
      body: JSON.stringify(logRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public write(severity: LogmonSeverity, logData: LogData) {
    const {
      message,
      jsonPayload,
      timeStamp = Date.now(),
      uid = '',
      source = '',
    } = logData;
    this.consoleLog(severity, message, jsonPayload);
    this.apiCall({
      projectId: this.config.projectId,
      severity,
      message,
      jsonPayload,
      source,
      uid,
      timeStamp,
    });
  }

  public error(logData: LogData) {
    this.write(LogmonSeverity.ERROR, logData);
  }

  public warning(logData: LogData) {
    this.write(LogmonSeverity.WARNING, logData);
  }

  public info(logData: LogData) {
    this.write(LogmonSeverity.INFO, logData);
  }

  public debug(logData: LogData) {
    this.write(LogmonSeverity.DEBUG, logData);
  }

  public trace(logData: LogData) {
    this.write(LogmonSeverity.TRACE, logData);
  }
}
