import { supabase } from "../index";

export const InsertarUsuarios = async (params) => {
  try {
    const { data } = await supabase
      .from("usuarios")
      .insert(params)
      .select();
      return data
  } catch (error) {
    console.log(error);
  }
};
