import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertarUsuarios } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user?.user_metadata);
          insetarUsuarios(session?.user.user_metadata, session?.user.id)
          console.log("event", event);
          console.log("session", session.user);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  const insetarUsuarios = async (dataProvider, idAuthSupabase) => {
    const param = {
      nombres: dataProvider.name,
      foto: dataProvider.picture,
      idauth_supabase: idAuthSupabase,
    };
    await InsertarUsuarios(param)
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
