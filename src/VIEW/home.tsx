import "../Style/home.css"
import "../Style/common.css"
import NaviBar from "./NavigationBar/naviBar"
import Exportbtt from "./ExportButton/exportbtt"
import ImgSlide from "./Slideimg/imgSlide"
import Introduce from "./Introduce/introduce";
import Footer from "./footer/footer"; 
import Login from "./login"
import { isLoginCheck } from "../RECOIL/ATOM/atom"
import { useRecoilState } from "recoil"

export default function Home() {

    const [isLogin, setIsLogin] = useRecoilState(isLoginCheck);
    return (
        <div className="home_background">
            <NaviBar/>
            <Exportbtt/>
            {!isLogin ? 
            <>
            <ImgSlide/>
            <Introduce/></>
            :
            <Login/>}
            <Footer/>
        </div>
        
    );
};