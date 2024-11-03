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

    const onclick = () => {
        setIsLogin(true);
    }

  // isUser값 바뀔때마다 업데이트
  useEffect (() =>{ 
    console.log("업데이트");
  },[isLogin]);

    return (
                <div className="N_bar">
                        <Contents/>
                        <Link to = {`/`} className="selectHead HomeTxt">First Floor</Link>
                        <div className="contents">
                            { userID == "" ? <div to = {`/Login`} onclick = {onclick} className="selectTxt selectHead" >로그인</div>:
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >내정보</Link>}
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >주문내역</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >장바구니</Link>
                        </div>
                </div>


    );
}

export default NaviBar;