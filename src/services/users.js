import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signupUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function getToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function updateToDos(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteTasks() {
  const resp = await client.from('todos').delete().eq('is_complete', true);
  return checkError(resp);
}
