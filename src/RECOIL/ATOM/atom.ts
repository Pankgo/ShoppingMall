import { atom } from 'recoil';

export const hoverState = atom({
  key: 'hoverState', // 고유한 ID
  default: false, // 기본값
});

export const userIDState = atom({
  key: 'userIDstate', // 고유한 ID
  default: "", // 기본값
});

export const isLoginCheck = atom({
  key : "isLoginCheck",
  default : false
});
