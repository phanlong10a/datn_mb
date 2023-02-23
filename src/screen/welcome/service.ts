import {DEV_BASE_URL} from '@src/request/request';
import axios from 'axios';

export const onLogin = async (params: any) => {
  const res = await axios.post(DEV_BASE_URL + '/api/auth/login', params);
  return res;
};
