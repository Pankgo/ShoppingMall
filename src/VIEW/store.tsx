import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';
import { useState } from 'react';
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

import NaviBar from "./NavigationBar/naviBar"
import Exportbtt from "./ExportButton/exportbtt"
import Footer from "./footer/footer"; 

export default function Introduce(){

    const clothesImages = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, 
        clothes7, clothes8, clothes9, clothes10, clothes11];
    const [clothes] = useState<string[]>(clothesImages);

    // 옷출력
    const ptrClothes = () => {
        return clothes.map((image, index) => (
            <div key={index} className='border-gray-200 hover:border-gray-500 border-2 w-[18%] h-[55vh] place-items-center'>
                <img src={image} className='w-[70%] mt-2' alt={`Clothes ${index + 1}`} />
                <div className='text-[0.6vw] w-[100%] mt-3 ml-10'>
                    [11/8 순차발송] Uniform cotton setup (3 colors)<br />
                    Cotton 100%, Japanese processed.<br />
                    유니폼 코튼 셋업으로 구매시 5% 할인.<br />
                    KRW 271,700
                </div>
            </div>
        ));
    };


    return(
    <>  
        <NaviBar/>
        <h1 className='text-center mt-10'>신상품</h1>
        <div className='flex flex-wrap justify-center mb-16 mt-10'>
            {ptrClothes()}
        </div>
        <Footer/>  
    </>
    );
}