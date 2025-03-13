import {
  Log,
  LogAlertSubscription,
  LogSeverity,
  Member,
  Project,
  TimeStamp,
  User,
} from '@/types.ts';
import axios, { AxiosError } from 'axios';
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

export class ApiError extends Error {
  public readonly data: {
    errorMessage: string;
  };

  constructor(e: AxiosError) {
    super(e.message);

    if (e.response) {
      this.data = e.response.data as {
        errorMessage: string;
      };
    } else {
      this.data = {
        errorMessage: 'Something went wrong.',
      };
    }
  }
}

export async function apiCall(apiCallConfig: ApiCallConfig) {
  const { path, method, params, body } = apiCallConfig;

  try {
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
  } catch (e) {
    const error = e as AxiosError;
    throw new ApiError(error);
  }
}

export async function createLogAlertDescription(body: {
  projectId: string;
  name: string;
  platform: string;
  url: string;
  alertThreshold: LogSeverity;
}) {
  return await apiCall({
    path: '/api/logAlertSubscriptions',
    method: 'post',
    body: body,
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
  return await apiCall({
    path: '/api/logs',
    method: 'get',
    params: {
      projectId,
      start: Math.round(from),
      end: Math.round(to),
    },
  });
}

//projects
export async function createProject(body: {
  title: string;
  description: string;
  pricing: Pricing;
}): Promise<{
  projectId: string;
}> {
  return await apiCall({
    path: '/api/projects',
    method: 'post',
    body: body,
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
export async function getMyMembers(): Promise<Member[]> {
  return await apiCall({
    path: '/api/members',
    method: 'get',
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

export async function getPendingMembers(): Promise<Member[]> {
  return await apiCall({
    path: '/api/members/invite',
    method: 'get',
  });
}

export async function deleteMember(request: { memberId: string }) {
  const { memberId } = request;
  return await apiCall({
    path: `/api/members/${memberId}`,
    method: 'delete',
  });
}

export async function getMyProjects() {
  const members = await getMyMembers();
  const projectIds = members.map((m) => m.projectId);
  return await getProjectsByIdsIn(projectIds);
}

export async function invite(body: {
  projectId: string;
  inviteeEmails: string[];
}) {
  return await apiCall({
    path: '/api/members/invite',
    method: 'post',
    body: body,
  });
}

export async function accept(body: { projectId: string }) {
  return await apiCall({
    path: '/api/members/accept',
    method: 'post',
    body: body,
  });
}

//auth
export async function logOut() {
  return await apiCall({
    path: '/api/logout',
    method: 'get',
  });
}

export async function getInvitedProjects() {
  const members = await getPendingMembers();
  const projectIds = members.map((m) => m.projectId);
  return getProjectsByIdsIn(projectIds);
}
