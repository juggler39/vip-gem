import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents(): Promise<AxiosResponse> {
    return apiClient.get('/events');
  },
  getEvent(id: number): Promise<AxiosResponse> {
    return apiClient.get('/events/' + id);
  }
};
