import { atom } from 'recoil';

export const hoverState = atom({
  key: 'hoverState', // 고유한 ID
  default: false, // 기본값
});

export const userIDState = atom({
  key: 'userIDstate', 
  default: "", 
});

export const isLoginCheck = atom({
  key : "isLoginCheck",
  default : false
});

export const imgNum = atom({
  key : "imgNum",
  default : 0
});


export const isclickCheck = atom({
  key : "isclickCheck",
  default : false
});