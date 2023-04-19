import {DEV_BASE_URL} from '@src/request/request';
import {requestApi, REQUEST_METHOD} from '@src/services/api';

export const getList = date => {
  return requestApi(
    REQUEST_METHOD.POST,
    DEV_BASE_URL + '/receipt/getListRevenue',
    {
      month: date,
    },
    {},
    false,
  );
};
