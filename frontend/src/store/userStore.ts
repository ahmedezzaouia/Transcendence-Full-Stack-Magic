import { fetchMe } from '@/services';
import {create} from 'zustand';

interface User {
  id: string;
  username: string;
  email: string;
  isTwofactorsEnabled: boolean;
  avatarUrl: string;
  status: UserStatus;
}

type UserStatus = 'ONLINE' | 'OFFLINE';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  fetchMe: () => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchMe: async () => {
    try {
      
      console.log("🚀 ~ file: userStore.ts:28 ~ fetchMe: ",)
      const user = await fetchMe();
      set({ user: user });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
}));

export default useUserStore;
