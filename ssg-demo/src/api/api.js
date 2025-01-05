import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const fetchPhotos = async () => {
  const { data } = await axios.get(`${API_BASE}/photos?_limit=50`);
  return data;
};

export const fetchAlbums = async () => {
  const { data } = await axios.get(`${API_BASE}/albums`);
  return data;
};

export const fetchUsers = async () => {
  const { data } = await axios.get(`${API_BASE}/users`);
  return data;
};
