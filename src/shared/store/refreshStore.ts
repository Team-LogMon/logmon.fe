import { create } from 'zustand/index';

interface RefreshStore {
  logAlertSubscriptionCounter: number;
  refreshLogAlertSubscription: () => void;

  projectListCounter: number;
  refreshProjectList: () => void;

  invitationsCounter: number;
  refreshInvitations: () => void;
}

export const useRefreshStore = create<RefreshStore>((set) => ({
  logAlertSubscriptionCounter: 0,
  projectListCounter: 0,
  invitationsCounter: 0,
  refreshLogAlertSubscription: () => {
    set((state) => ({
      logAlertSubscriptionCounter: state.logAlertSubscriptionCounter + 1,
    }));
  },

  refreshProjectList: () => {
    set((state) => ({
      projectListCounter: state.projectListCounter + 1,
    }));
  },

  refreshInvitations: () => {
    set((state) => ({
      invitationsCounter: state.invitationsCounter + 1,
    }));
  },
}));
