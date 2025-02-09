import { LogAlertSubscription, Severity } from '@/types.ts';
import { Time } from '@/shared/utils/Time.ts';

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
