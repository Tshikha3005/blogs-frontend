import { create } from "zustand";
import { persist } from "zustand/middleware";

type authStore = {
  accessToken: string | null;
  refreshToken: string | null;
  //function
  setAuthToken: (data: {
    accessToken: string | null;
    refreshToken: string | null;
  }) => void;
  clearAuthToken: () => void;
};
export const useAuthStore = create<authStore>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setAuthToken: ({ accessToken, refreshToken }) => {
        set({
          accessToken,
          refreshToken,
        });
      },
      clearAuthToken: () => {
        set({
          accessToken: null,
          refreshToken: null,
        });
      },
    }),
    { name: "auth-storage" },
  ),
);
