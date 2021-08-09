import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  userAddress: string;
  userFriendlyName: string;
  currentEpoch: number;
}

interface IGlobalStore {
  store: IStore;
  setUser: (userAddress: string, userFriendlyName: string) => void;
  setPaymentAddr: (userAddress: string) => void;
  setEpoch: (currentEpoch: number) => void;
  resetUser: () => void;
}

export const useStore = create<IGlobalStore>(
  persist(
    (set) => ({
      store: {
        currentEpoch: 1,
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
      setPaymentAddr: (userAddress) =>
        set((state) => ({
          store: {
            ...state.store,
            userAddress,
          },
        })),
      setEpoch: (currentEpoch) =>
        set((state) => ({
          store: {
            ...state.store,
            currentEpoch,
          },
        })),
      resetUser: () =>
        set((state) => ({
          store: {
            ...state.store,
            userAddress: '',
            userFriendlyName: '',
          },
        })),
    }),
    {
      name: 'stakeboard-storage', // storage name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
