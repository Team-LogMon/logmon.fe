import {
  Log,
  LogAlertSubscription,
  Member,
  Project,
  Severity,
  TimeStamp,
  User,
} from '@/types.ts';
import { getRandomInt } from '@/shared/utils/random.ts';
import axios from 'axios';
import { Pricing } from '@/shared/const/app/Pricing.ts';
import qs from 'qs';

interface ApiCallConfig {
  path: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  params?: {
    [key in string]: string | string[] | number;
  };
  body?: object;
}

export async function apiCall(apiCallConfig: ApiCallConfig) {
  const { path, method, params, body } = apiCallConfig;
  const axiosResponse = await axios({
    method: method,
    baseURL: import.meta.env.VITE_BACKEND_URL,
    url: path,
    params: params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' }),
    data: body,
    withCredentials: true,
  });

  return axiosResponse.data;
}

export async function createLogAlertDescription(
  projectId: string,
  name: string,
  platform: string,
  url: string,
  alertThreshold: Severity
) {
  return await apiCall({
    path: '/api/logAlertSubscriptions',
    method: 'post',
    body: {
      projectId: projectId,
      name: name,
      platform: platform,
      url: url,
      alertThreshold: alertThreshold,
    },
  });
}

export async function getLogAlertSubscriptionByProjectId(
  projectId: string
): Promise<LogAlertSubscription[]> {
  return await apiCall({
    path: '/api/logAlertSubscriptions',
    method: 'get',
    params: { projectId },
  });
}

export async function deleteLogAlertSubscription(id: string) {
  return await apiCall({
    path: `/api/logAlertSubscriptions/${id}`,
    method: 'delete',
  });
}

export async function getLogs(
  projectId: string,
  from: TimeStamp,
  to: TimeStamp
): Promise<Log[]> {
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

//projects
export async function createProject(
  title: string,
  description: string,
  pricing: Pricing
) {
  return await apiCall({
    path: '/api/projects',
    method: 'post',
    body: {
      title,
      description,
      pricing,
    },
  });
}

export async function getProject(projectId: string): Promise<Project> {
  return await apiCall({
    path: `api/projects/${projectId}`,
    method: 'get',
  });
}

// export async function getProjectsByUserId(userId: string): Promise<Project[]> {
//   return await apiCall({
//     path: '/api/projects',
//     method: 'get',
//     params: { userId },
//   });
// }

export async function getProjectsByIdsIn(
  projectIds: string[]
): Promise<Project[]> {
  if (projectIds.length === 0) {
    return [] as Project[];
  }

  return await apiCall({
    path: '/api/projects',
    method: 'get',
    params: {
      projectIds: projectIds,
    },
  });
}

//users
export async function getMe(): Promise<{
  logined: boolean;
  user: User;
}> {
  return await apiCall({
    path: '/api/users/me',
    method: 'get',
  });
}

export async function getUserByUserIds(userIds: string[]): Promise<User[]> {
  return await apiCall({
    path: '/api/users',
    method: 'get',
    params: {
      userIds: userIds,
    },
  });
}

//members
export async function getMembersByUserId(userId: string): Promise<Member[]> {
  return await apiCall({
    path: '/api/members',
    method: 'get',
    params: {
      userId,
    },
  });
}

export async function getMembersByProjectId(
  projectId: string
): Promise<Member[]> {
  return await apiCall({
    path: '/api/members',
    method: 'get',
    params: {
      projectId,
    },
  });
}

export async function getInvitations(): Promise<Member[]> {
  return await apiCall({
    path: '/api/members/invite',
    method: 'get',
  });
}

export async function invite(projectId: string, emails: string[]) {
  return await apiCall({
    path: '/api/members/invite',
    method: 'post',
    body: {
      projectId,
      inviteeEmails: emails,
    },
  });
}

export async function accept(projectId: string) {
  return await apiCall({
    path: '/api/members/accept',
    method: 'post',
    body: {
      projectId,
    },
  });
}

//auth
export async function logOut() {
  return await apiCall({
    path: '/api/logout',
    method: 'get',
  });
}
