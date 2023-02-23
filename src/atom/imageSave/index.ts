import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const imageSaveState = atom({
  key: "MAP_DATA_STATE",
  default: {},
});

export const useImageSaveState = () => {
  return useRecoilState(imageSaveState);
};

export const useImageSaveStateValue = () => {
  return useRecoilValue(imageSaveState);
};

export const useSetImageSaveState = () => {
  return useSetRecoilState(imageSaveState);
};
