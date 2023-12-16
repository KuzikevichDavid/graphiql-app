import supabase from './supabase';

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
