import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const userInfoState = atom({
  key: 'USER_DATA_STATE',
  default: {
    address: null,
    avatar: null,
    bluetooth_id: null,
    date_created: '2022-11-14T08:08:50+00:00',
    date_of_birth: '',
    full_name: 'vlhei',
    gender: null,
    kyc_status: 'PENDING',
    ref_status: true,
    userId: 2,
  },
});

export const useUserInfoState = () => {
  return useRecoilState(userInfoState);
};

export const useUserInfoStateValue = () => {
  return useRecoilValue(userInfoState);
};

export const useSetUserInfoState = () => {
  return useSetRecoilState(userInfoState);
};
