import { fetchLoggedUser } from "@/services";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "@/types";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  getUser: () => Promise<void>;
}

const useUserStore = create<UserStore>(
  persist(
    devtools((set) => ({
      user: null,
      setUser: (user) => set({ user }),
      getUser: async () => {
        try {
          const newUser = await fetchLoggedUser();
          set({ user: newUser });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      },
    })),
    (set) => ({
      name: 'user-store', // Provide the name for the persisted store (change to your preferred name).
      get storage() {
        // Specify the storage medium (e.g., localStorage or sessionStorage).
        return localStorage;
      },
    })
  )
);

export default useUserStore;
