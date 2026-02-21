import { create } from "zustand";
import http from "@/lib/http";

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthState = {
  user: User | null;

  checkAuth: () => Promise<void>;
  setUser: (u: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (u) => set({ user: u }),

  checkAuth: async () => {
    try {
      const res = await http.get("/auth/me", {
        headers: {
          "x-from": "client-zustand",
        },
      });

      set({
        user: res.data.data,
      });
    } catch (err) {
      console.error(err);
      set({
        user: null,
      });
    }
  },
}));
