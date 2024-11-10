import Footer from "./footer/footer";
import NaviBar from "./NavigationBar/naviBar";
import { useRecoilState } from "recoil"
import { imgNum } from "../RECOIL/ATOM/atom"
import clothes1 from  '../IMG/clothes1.jpg';
import clothes2 from  '../IMG/clothes2.jpg';
import clothes3 from  '../IMG/clothes3.jpg';
import clothes4 from  '../IMG/clothes4.jpg';
import clothes5 from  '../IMG/clothes5.jpg';
import clothes6 from  '../IMG/clothes6.jpg';
import clothes7 from  '../IMG/clothes7.jpg';
import clothes8 from  '../IMG/clothes8.jpg';
import clothes9 from  '../IMG/clothes9.jpg';
import clothes10 from  '../IMG/clothes10.jpg';
import clothes11 from  '../IMG/clothes11.jpg';
import { useState } from "react";


export default function ProductInfo(){
    const [img,setimg] = useRecoilState(imgNum);
    const clothesImages = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, 
        clothes7, clothes8, clothes9, clothes10, clothes11];

    const [clothes] = useState<string[]>(clothesImages);
    return(
        <div>
            <NaviBar/>
            <div className="flex mt-5 mb-5">
                <img src={clothes[img]} className='w-[30%] ml-10' alt={`Clothes ${img + 1}`} />
                <div className="border-solid border-2 rounded ml-10 border-gray-400 w-[60%] text-center ">
                    <div className="mt-5 mb-5">
                        <span>
                            Wholegarment cashmere crewneck (brushed shaggy, 8 colors)<br/>
                            <p className="text-xs mt-5">Extra superfine merino wool 95% + cashmere 5% * RWS 인증 원사</p><br/>
                        </span>
                    </div>
                    <div className="flex text-10px text-left ml-5 mb-5">
                        <span>
                            <p className="text-lg">Info</p>                      
                                Fabric & Care
                                소재 : Extra superfine merino wool 95% + cashmere 5%<br/>
                                * RWS, Responsible Wool Standard 인증 원사입니다.<br/>
                                표면을 의도적으로 긁어낸 디자인이므로 불규칙적인 필링 현상이 존재합니다.
                                세탁은 드라이클린 필수입니다.<br/>
                                가정에서 스팀 다리미로 관리해주시면 좋습니다.<br/>
                        </span>
                    </div>
                    <div className="text-10px text-left ml-5 mb-5">
                        <span>
                            <p className="text-lg">Comment</p>
                            멋진 색상의 쉐기 독 니트를 사고 싶었습니다.
                            하지만 거친 촉감 마저 즐기며 입을 자신이 없었기에
                            매해마다 번번히 돌아서곤 했습니다.<br/>

                            작년 여름, 제 취향에 맞는 쉐기 독 스웨터를 만들고자 
                            자신있게 덤벼들었지만 결과는 실패였습니다.<br/>
                            제가 선호하던 원사는 브러쉬 가공을 버티기에는 너무 얇고 부드러웠기에
                            디테일을 표현할 수가 없었습니다.<br/>

                            꼬박 일년이 흘렀습니다.
                            맨살에 입어도 큰 거부감이 없을 만큼 착용감의 완성도를 높였고,
                            홀가먼트 봉제에서 발견되는 넥라인 특유의 어색함과 불균형 또한
                            안정적이고 맵시 있게 개선하여 올해에는 자신 있게 소개해드릴 수 있었습니다.<br/>

                            빼어난 색감과 촉감, 그리고 우수한 원사의 품질이 돋보이는 스웨터라 확신합니다.<br/>
                            그저 눈에 띄기만 하는 색상이 아닌 우리의 일상에 잘 어우러질 수 있는
                            편안하면서도 매력있는 스웨터라 믿습니다.<br/>

                            다가온 겨울 단 하나의 니트만 구매할 수 있다면,
                            가장 실용적이고도 범용적인 선택이 되리라 생각합니다.<br/>
                        </span>
                    </div>
                    <div className="text-left ml-5 mb-5">
                        <p className="text-lg">측정확인</p>
                    </div>
                    <div className="text-10px text-center mb-5">
                            <span>
                                <span className="line-through text-slate-400">KRW 198,000</span><br/>
                                KRW 109,000
                            </span>
                    </div>
                    <div className="flex mb-5">
                         <button className="bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7] shadow-gray-300 shadow-lg hover:shadow-none w-[30%] ml-[15%] border-1 h-8 rounded text-white text-xs">구매하기</button>
                         <button className="bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7] shadow-gray-300 shadow-lg hover:shadow-none w-[30%] ml-[10%] border-1 h-8 rounded text-white text-xs">장바구니</button>
                    </div>
                </div>
            </div>
            
            <Footer/>         
        </div>
   
    );
};