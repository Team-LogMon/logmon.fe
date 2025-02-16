import { Log, LogAlertSubscription, Severity, TimeStamp } from '@/types.ts';
import { Time } from '@/shared/utils/Time.ts';
import { getRandomInt } from '@/shared/utils/random.ts';

export async function getLogAlertSubscriptionByProjectId(
  projectId: string
): Promise<LogAlertSubscription[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (projectId === 'empty') {
    return [];
  }

  return [
    {
      id: 'log-alert-subscription-1',
      name: 'Slack Notifier',
      projectId: projectId,
      platform: 'slack',
      url: 'https://logmon-slack.webhook.com',
      alertThreshold: Severity.DEBUG,
      dailyQuotaLimit: 100,
      dailyQuotaUsed: 20,
      monthlyQuotaLimit: 1000,
      monthlyQuotaUsed: 60,
      createdAt: Date.now() - Time.months(1),
      updatedAt: Date.now() - Time.minutes(3),
    },
    {
      id: 'log-alert-subscription-2',
      name: 'Discord Critical Error Bot',
      projectId: projectId,
      platform: 'discord',
      url: 'https://logmon-discord.webhook.com',
      alertThreshold: Severity.ERROR,
      dailyQuotaLimit: 100,
      dailyQuotaUsed: 10,
      monthlyQuotaLimit: 1000,
      monthlyQuotaUsed: 10,
      createdAt: Date.now() - Time.months(1),
      updatedAt: Date.now() - Time.minutes(3),
    },
  ];
}

export async function getLogs(
  projectId: string,
  from: TimeStamp,
  to: TimeStamp
): Promise<Log[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const randomMessage = [
    'veniam Duis sit Ut in commodo ex sit.',
    'dolor nostrud ex dolore ut dolore adipiscing eiusmod nisi.',
    'aute quis minim amet Sed in adipiscing sit.',
    'dolor reprehenderit ut aliqua exercitation nostrud incididunt reprehenderit nisi.',
    'in Sed consectetur ex Lorem ullamco incididunt amet in aute labore.',
    'Lorem reprehenderit ullamco et aute aliquip aliquip ullamco magna labore ipsum et enim tempor irure.',
    'nostrud tempor irure consectetur ullamco dolor eiusmod minim.',
    'Lorem magna ipsum dolor consequat amet tempor amet incididunt ullamco.',
    'tempor reprehenderit Sed nostrud Lorem nisi irure reprehenderit labore ut laboris ut Ut.',
    'amet irure minim elit minim ex tempor Lorem veniam aliquip Sed dolor adipiscing enim.',
  ];

  const severities = [
    Severity.ERROR,
    Severity.WARNING,
    Severity.INFO,
    Severity.DEBUG,
    Severity.TRACE,
  ];

  const logs: Log[] = [];

  let t = from;
  while (t < to) {
    logs.push({
      id: `log-${t}`,
      projectId: projectId,
      severity: severities[getRandomInt(0, 5)],
      message: randomMessage[getRandomInt(0, 10)],
      source: getRandomInt(0, 10) > 8 ? 'server' : '-',
      timeStamp: t,
      jsonPayload:
        getRandomInt(0, 2) > 1
          ? {
              orderId: 'order-123',
              userId: 'user-123',
            }
          : undefined,
    });

    t += 1000 * 60;
  }

  return logs;
}
