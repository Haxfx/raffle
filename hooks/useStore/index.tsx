import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  userAddress: string;
  userFriendlyName: string;
}

interface IGlobalStore {
  store: IStore;
  setUser: (userAddress: string, userFriendlyName: string) => void;
}

export const useStore = create<IGlobalStore>(
  persist(
    (set) => ({
      store: {
        userAddress: '',
        userFriendlyName: '',
      },
      setUser: (userAddress, userFriendlyName) =>
        set((state) => ({
          store: {
            ...state.store,
            userAddress,
            userFriendlyName,
          },
        })),
    }),
    {
      name: 'stakeboard-storage', // storage name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
