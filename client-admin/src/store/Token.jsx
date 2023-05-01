import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (newToken) => set({ token: newToken }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'authStore',
      Storage: () => localStorage
    }
  )
);

export default useAuthStore;
