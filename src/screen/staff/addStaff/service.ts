import {DEV_BASE_URL} from '@src/request/request';
import {requestApi, REQUEST_METHOD} from '@src/services/api';

export const createUser = (body, id) => {
  return requestApi(
    REQUEST_METHOD.POST,
    DEV_BASE_URL + '/api/admin/create-employee',
    {
      ...body,
    },
    {},
    false,
  );
};
export const updateUser = (body, id) => {
  return requestApi(
    REQUEST_METHOD.POST,
    DEV_BASE_URL + '/api/admin/user/' + id,
    {
      ...body,
    },
    {},
    false,
  );
};
export const deleteUser = id => {
  return requestApi(
    REQUEST_METHOD.DELETE,
    DEV_BASE_URL + '/api/admin/user/' + id,
    null,
    {},
    false,
  );
};

export const upload_avatar = async (
  data: any,
  onSuccess?: any,
  onError?: any,
  onRefresh?: any,
) => {
  const formData = new FormData();
  formData.append('file', {
    originalname: data.fileName,
    name: data.fileName,
    type: data.type,
    uri: data.uri,
  });

  fetch(DEV_BASE_URL + `/upload-service/file`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      onSuccess && onSuccess(res);
    })
    .then(() => {
      onRefresh && onRefresh();
    })
    .catch(e => onError(e));
};
