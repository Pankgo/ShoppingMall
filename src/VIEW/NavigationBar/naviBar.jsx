import "../../Style/navibar.css"
import "../../Style/common.css"
import { Link } from "react-router-dom";
import Contents from "./dropcontents";
function NaviBar() {
    return (
                <div className="N_bar">
                        <Contents/>
                        <Link to = {`/`} className="selectHead HomeTxt">First Floor</Link>
                        <div className="contents">
                            <Link to = {`/Login`} className="selectTxt selectHead" >로그인</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >주문내역</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >장바구니</Link>
                        </div>
                </div>


    );
}

export default NaviBar;