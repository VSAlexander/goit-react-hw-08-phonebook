import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function register(user) {
  const { data } = await axios.post('/users/signup', user);
  return data;
}

export async function logIn(user) {
  const { data } = await axios.post('/users/login', user);
  return data;
}

export async function logOut() {
  await axios.post('/users/logout');
}

export async function refresh() {
  const { data } = await axios.get('/users/current');
  return data;
}
