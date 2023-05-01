import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useIodStore = create(
  persist(
    (set) => ({
      iod: null,
      setIod: (newIod) => set({ iod: newIod }),
      clearIod: () => set({ iod: null }),
    }),
    {
      name: 'iodStore',
      Storage: () => localStorage
    }
  )
);

export default useIodStore;