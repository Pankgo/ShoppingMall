import React, { useEffect, useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import "../Style/login.css"
import "../Style/common.css"

export default function Login() {
  const [isUser, setIsUser] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 추가    
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {      
    e.preventDefault(); // 폼의 기본 동작 막기
};

  // isUser값 바뀔때마다 업데이트
  useEffect (() =>{ 
    console.log("업데이트");
  },[isUser]);


  const changeForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsUser(!isUser);
      setIsAnimating(false);
    }, 300); // 애니메이션의 지속 시간과 맞춰줍니다.
  };

  return (
    <div>
      <div className="flex w-[50vw] h-[40vh] mt-20 mb-32 ml-64 border-none bg-[#F5F5F5] rounded-tl-[10px] rounded-bl-[10px] ">
        <AnimatePresence>
          {isUser ? (
            <>
              <motion.div
                key="login"
                initial={{ x: 0 }} // 처음 위치
                animate={{ x: isAnimating ? -50 : 0 }} // 왼쪽으로 애니메이션
                exit={{ x: 50 }} // 왼쪽으로 나가기
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleLogin}>
                  <h1 className="text-center mt-2">Sign In</h1>
                  <input
                    type="text"
                    className={`w-3/5 h-[6vh] rounded-[10px] border-[0.5px] ml-16 mt-[2%] text-left shadow-lg text-[10px]`}
                    placeholder="아이디입력"
                  />
                  <input
                    type="password"
                    className={`w-3/5 h-[6vh] rounded-[10px] border-[0.5px] ml-16 mt-[2%] text-left shadow-lg text-[10px]`}
                    placeholder="비밀번호입력"
                  />
                  <button
                    type="submit"
                    className="shadow-lg w-3/5 h-[6vh] rounded-[20px] bg-gradient-to-r from-custom-start to-custom-end hover:from-hover-start from-5% hover:to-hover-end mt-5 ml-16 border-[0.5px] text-white text-sm"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={changeForm}
                    className="shadow-lg w-3/5 h-[6vh] rounded-[20px] bg-gradient-to-r from-custom-start to-custom-end hover:from-hover-start from-30% hover:to-hover-end mt-1 ml-16 border-[0.5px] text-white text-sm"
                  >
                    Create
                  </button>
                </form>
              </motion.div>
              <motion.div
                className="w-full text-center text-white text-2xl font-bold content-center h-full rounded-tr-[10px] rounded-br-[10px] bg-gradient-to-r from-custom-start to-custom-end"
                key="signup"
                initial={{ x: 0 }} // 처음 위치
                animate={{ x: isAnimating ? 50 : 0 }} // 오른쪽으로 애니메이션
                exit={{ x: -50 }} // 오른쪽으로 나가기
                transition={{ duration: 0.3 }}
              >
                FirstFloor
              </motion.div>
            </>
          ) : (
            <>
                <motion.div 
                key="signup"
                initial={{ x: -50 }} // 처음에 왼쪽에서 들어오기
                animate={{ x: isAnimating ? -50 : 0 }} // 애니메이션
                exit={{ x: -50 }} // 오른쪽으로 나가기
                transition={{ duration: 0.3 }}
                className={`w-full text-center text-white text-2xl font-bold 
                  content-center h-full rounded-tl-[10px] rounded-bl-[10px] bg-gradient-to-r from-custom-start to-custom-end`}>
                  FirstFloor
                </motion.div>
                <motion.div
                key="login"
                initial={{ x: 0 }} // 처음 위치
                animate={{ x: isAnimating ? 50 : 0 }} // 왼쪽으로 애니메이션
                exit={{ x: 50 }} // 왼쪽으로 나가기
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleLogin}>
                  <h1 className = "text-center mt-2">CREATE</h1>
                  <div className="flex">
                    <input
                      type="text"
                      className={`w-[15vw] h-[6vh] rounded-[10px] border-[0.5px] ml-2 mt-[2%] text-left shadow-lg text-[10px]`}
                      placeholder="아이디입력"/>
                    <input
                      type="password"
                      className={`w-[15vw] h-[6vh] rounded-[10px] border-[0.5px] 
                      ml-2 mt-[2%] mr-2 text-left shadow-lg text-[10px]`}
                      placeholder="비밀번호입력"/>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className={`w-[15vw] h-[6vh] rounded-[10px] border-[0.5px] ml-2 mt-[2%] text-left shadow-lg text-[10px]`}
                      placeholder="이름입력"
                    />
                    <input
                      type="text"
                      className={`w-[15vw] h-[6vh] rounded-[10px] border-[0.5px] 
                        ml-2 mt-[2%] mr-2 text-left shadow-lg text-[10px]`}
                      placeholder="휴대폰입력"/>
                  </div>
                    <button type="submit"
                      className="shadow-lg w-3/5 h-[6vh] rounded-[20px] 
                      bg-gradient-to-r from-custom-start to-custom-end hover:from-hover-start from-30% 
                      hover:to-hover-end mt-3 ml-16 border-[0.5px] text-white text-sm"
                    >CREATE</button>
                    <button type="button"
                      onClick={changeForm}
                      className="shadow-lg w-3/5 h-[6vh] rounded-[20px] bg-gradient-to-r
                      from-custom-start to-custom-end hover:from-hover-start from-30% 
                      hover:to-hover-end mt-1 ml-16 border-[0.5px] text-white text-sm"
                    >CANCEL</button>
                </form></motion.div>

            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

};