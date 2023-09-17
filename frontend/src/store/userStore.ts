import { fetchMe } from '@/services';
import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from '@/types';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  fetchMe: () => Promise<void>;
}

const useUserStore = create<UserStore>(
    devtools((set) => ({
      user: null,
      setUser: (user) => set({ user }),
      fetchMe: async () => {
        try {
          const newUser = await fetchMe();
          set({ user: newUser });
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      },
    })),
  
);

export default useUserStore;
