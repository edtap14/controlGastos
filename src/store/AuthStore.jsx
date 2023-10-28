import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((set) => ({
  isAuth: false,
  signInWhithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw new Error("Ocurrio un error durante la autenticación");
      set({ isAuth: true });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      set({ isAuth: false });
      if (error)
        throw new Error("Ocurrio un error durante el cierre de sesión");
    } catch (error) {
      console.log(error);
    }
  },
}));
