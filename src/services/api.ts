import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

export default api;

export const fetcher = (url: string) => api.get(url).then(({ data }) => data);
