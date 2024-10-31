import { atom } from 'recoil';

export const hoverState = atom({
  key: 'hoverState', // 고유한 ID
  default: false, // 기본값
});