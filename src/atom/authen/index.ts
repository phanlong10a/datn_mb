import {storage, StorageKey} from '@src/storage';

import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

import {useMount} from 'ahooks';

type TAuthenState = {
  token: string | undefined;
  loading: boolean;
  reinitialized: boolean;
};

const initialState: TAuthenState = {
  token: undefined,
  loading: false,
  reinitialized: true,
};

export const authenAtom = atom<TAuthenState>({
  key: 'AUTHEN',
  default: initialState,
});

export const useAuthenState = () => {
  return useRecoilState(authenAtom);
};

export const useAuthenStateValue = () => {
  return useRecoilValue(authenAtom);
};

export const useSetAuthenState = () => {
  return useSetRecoilState(authenAtom);
};

export const useRehydrateAuthenState = () => {
  const [, setAuthenState] = useAuthenState();

  useMount(() => {
    const token = storage.getString(StorageKey.Authen);
    setAuthenState({loading: false, reinitialized: false, token: token});
  });
};
