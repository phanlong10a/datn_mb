import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const kycInfoState = atom({
  key: 'KYC_INFO_STATE',
  default: {
    address: 'cdf',
    date_of_birth: '14-11-1962',
    date_of_issue: '14-11-1988',
    full_name: 'abx',
    identity_id: '38383847477',
    place_of_issue: 'tq',
    type_identity: 'test',
  },
});

export const useKycInfoState = () => {
  return useRecoilState(kycInfoState);
};

export const useKycInfoStateValue = () => {
  return useRecoilValue(kycInfoState);
};

export const useSetKycInfoState = () => {
  return useSetRecoilState(kycInfoState);
};
