import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;

export const fetcher = (url: string) => api.get(url).then(({ data }) => data);
