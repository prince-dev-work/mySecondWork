import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { config } from '../constants/config';

const authApi = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

authApi.interceptors.request.use(
  async request => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    request.headers.Authorization = accessToken;
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

authApi.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response && err.response.status === 401) {
      // session expired and redirect to login
    } else {
      return Promise.reject(err);
    }
  },
);
