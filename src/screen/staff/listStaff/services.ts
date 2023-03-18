import {DEV_BASE_URL} from '@src/request/request';
import {requestApi, REQUEST_METHOD} from '@src/services/api';

export const getListUsers = (size, index, searchText) => {
  return requestApi(
    REQUEST_METHOD.POST,
    DEV_BASE_URL + '/api/admin/list-user',
    {
      size: 10,
      page: 0,
      search_text: searchText,
    },
    {},
    false,
  );
};
