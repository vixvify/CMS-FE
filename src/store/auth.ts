import { create } from "zustand";
import http from "@/lib/http";

type User = {
  id: string;
  email: string;
};

type AuthState = {
  user: User | null;
  loading: boolean;

  checkAuth: () => Promise<void>;
  setUser: (u: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (u) => set({ user: u }),

  checkAuth: async () => {
    console.log("CHECK AUTH RUN (client)", typeof window);
    try {
      const res = await http.get("/auth/me", {
        headers: {
          "x-from": "client-zustand",
        },
      });

      set({
        user: res.data.data,
        loading: false,
      });
    } catch (err) {
      set({
        user: null,
        loading: false,
      });
    }
  },
}));
