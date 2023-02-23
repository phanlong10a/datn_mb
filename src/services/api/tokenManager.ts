import TokenManagement from './TokenManagement';
import dayjs from 'dayjs';

import {storage, StorageKey} from '@src/storage';

export const TokenManager = new TokenManagement({
  isTokenValid: async () => {
    const token = storage.getString(StorageKey.Authen);
    const current_time = dayjs(new Date());
  },

  getAccessToken: async () => {
    const token = storage.getString(StorageKey.Authen);
    return token;
  },
  onRefreshToken: async (onDone: any) => {},
});
