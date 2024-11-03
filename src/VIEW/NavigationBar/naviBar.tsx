import "../../Style/navibar.css"
import "../../Style/common.css"
import { Link } from "react-router-dom";
import Contents from "./dropcontents";
import { userIDState,isLoginCheck } from '../../RECOIL/ATOM/atom';
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function NaviBar() {
    const [userID, setuserId] = useRecoilState(userIDState);
    const [isLogin, setIsLogin] = useRecoilState(isLoginCheck);

    const onclick = () => {//로그인버튼누를 경우 로그인화면값으로 변경
        setIsLogin(true);
    }

    const onclick2 = () =>{ // 로그인화면도중다른버튼누르면 다른화면으로 초기화
        setIsLogin(false);
    }

  // isUser값 바뀔때마다 업데이트
  useEffect (() =>{ 
    console.log("업데이트");
  },[isLogin]);

    return (
                <div className="N_bar">
                        <Contents/>
                        <Link to = {`/`} onClick={onclick2} className="selectHead HomeTxt">First Floor</Link>
                        <div className="contents">
                            { userID == "" ? <div onClick = {onclick} className="selectTxt selectHead" >로그인</div>:
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >내정보</Link>}
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >주문내역</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >장바구니</Link>
                        </div>
                </div>


    );
}

export default NaviBar;