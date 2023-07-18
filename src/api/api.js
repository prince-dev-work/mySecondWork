import axios from 'axios';
import { config } from '../constants/config';

const api = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

// intersepter (application ==>  request first come here)
api.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  },
);
