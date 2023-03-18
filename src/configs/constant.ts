import {
  MEASURE_UNIT,
  MEDICINE_TYPE,
  NGUYEN_LIEU,
  SIDE_THUOC,
  TINH_THUOC,
  VI_CUA_THUOC,
} from './enum';

export const MEASURE_UNIT_SELECT = [
  {label: 'Mg', value: MEASURE_UNIT.MG},
  {label: 'Ml', value: MEASURE_UNIT.ML},
];

export const MEDICINE_TYPE_SELECT = [
  {label: 'Thang', value: MEDICINE_TYPE.THANG},
  {label: 'Hoàn', value: MEDICINE_TYPE.HOAN},
  {label: 'Tán', value: MEDICINE_TYPE.TAN},
  {label: 'Cao', value: MEDICINE_TYPE.CAO},
  {label: 'Đan', value: MEDICINE_TYPE.DAN},
];
export const TINH_THUOC_SELECT = [
  {label: 'Hàn', value: TINH_THUOC.HAN},
  {label: 'Lương', value: TINH_THUOC.LUONG},
  {label: 'Nhiệt', value: TINH_THUOC.NHIET},
  {label: 'Ôn', value: TINH_THUOC.ON},
  {label: 'Bình', value: TINH_THUOC.BINH},
];

export const VI_CUA_THUOC_SELECT = [
  {label: 'Ngọt', value: VI_CUA_THUOC.NGOT},
  {label: 'Cay', value: VI_CUA_THUOC.CAY},
  {label: 'Đắng', value: VI_CUA_THUOC.DANG},
  {label: 'Chua', value: VI_CUA_THUOC.CHUA},
  {label: 'Mặn', value: VI_CUA_THUOC.MAN},
];

export const NGUYEN_LIEU_SELECT = [
  {label: 'Thực vật', value: NGUYEN_LIEU.THUC_VAT},
  {label: 'Động vật', value: NGUYEN_LIEU.DONG_VAT},
  {label: 'Khác', value: NGUYEN_LIEU.KHAC},
];

export const SIDE_THUOC_SELECT = [
  {label: 'Thuốc bắc', value: SIDE_THUOC.THUOC_BAC},
  {label: 'Thuốc nam', value: SIDE_THUOC.THUOC_NAM},
];
