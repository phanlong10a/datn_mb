import {DEV_BASE_URL} from '@src/request/request';
import {storage, StorageKey} from '@src/storage';
import axios from 'axios';
import {TokenManager} from './tokenManager';
export const REQUEST_METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

export async function requestApi(method, url, bodyGo, headers, isUploadFile) {
  const token = await storage.getString(StorageKey.Authen);
  let requestHeaders = {...headers, Authorization: 'Bearer ' + token};
  let body = bodyGo;
  if (bodyGo === null || bodyGo === undefined) {
    body = {};
  }
  if (body.length <= 0) {
    body = {};
  }
  const responseData = {
    error: null,
    message: '',
    data: null,
  };

  await axios(url, {
    method,
    headers: requestHeaders,
    data: method === REQUEST_METHOD.GET ? null : body,
    params: method === REQUEST_METHOD.GET ? body : null,
    responseType: 'json',
  })
    .then(response => {
      // success (200)
      if (response.data) {
        responseData.data = response.data;
      } else {
        responseData.error = response.status;
        responseData.data = null;
      }
    })
    .catch(error => {
      // errorgetListMyVoucherUrl
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        responseData.message = responseData.error =
          error?.response?.data?.error?.code;
        responseData.data = null;
      } else if (error?.response?.status === 400) {
        responseData.error =
          error?.response?.data?.error?.code || error?.response?.data?.code;
        responseData.data = null;
      } else {
        responseData.error = error?.response?.status;
        responseData.data = null;
      }
    })
    .then(() => {
      // always call
      console.log('----API CALL FINISH----\n', url);
    });

  return responseData;
}
