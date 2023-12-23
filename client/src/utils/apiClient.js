import axios from 'axios';
import {BASE_API_URL} from '@env';

const apiClient = axios.create({
  baseURL: BASE_API_URL || 'http://10.0.2.2:8080/api/v1',
  timeout: 3000
  // other settings...
});

export default apiClient;
