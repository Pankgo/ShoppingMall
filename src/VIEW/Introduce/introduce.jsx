import { motion } from 'framer-motion';

function Introduce(){
    return(
    <>
         <motion.div
            initial={{ opacity: 0, y: 20  }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration : 1 , delay: 0.3  }}}>
        <div class = 'flex mt-28'>
            <div class = 'flex-1 text-center'>1</div>
            <div><hr class="border border-gray-500 w-px h-full" /></div>
            <div class = 'flex-1 text-center'>
                <span class = 'text-10px'>영화 '노팅 힐'을 참 좋아합니다.<br/>
                이야기와 영상미는 물론 '휴 그랜트'의 나무랄 데 없는 스타일링은<br/>
                다시 한번 영화를 들여다보게끔 만드는 매력이 있습니다.<br/>
                괜스레 부끄러운 고백이지만<br/>
                작년에 많은 사랑을 받았었던 딸기우유 셔츠는,<br/>
                노팅 힐의 william thacker에서 시작되었습니다.<br/>
                원단은 부드럽고 여유롭게 흐르며, 느슨하지만 헐겁지 않게 몸을 감싸는 맵시.<br/>
                칼라는 지나치게 클래식하지도 캐주얼하지도 않으며,<br/>
                소매는 무심히 구겨지고 말린 채로 자연스럽게 어우러집니다.<br/>
                색감은 말할 것도 없고요.<br/>
                '부담 없이 편안하게, 자연스러운 멋이 풍기는 셔츠.'<br/>
                작품에서의 주인공 이름을 빌려온 ‘thacker’ 셔츠는<br/>
                제가 좋아하는, 좋은 셔츠라 생각하는 기준을 담은 제품입니다.<br/>
                여러분들께도 좋은 셔츠가 되었으면 좋겠습니다.</span></div>
        </div></motion.div>
        <motion.div
            initial={{ opacity: 0, y : 20}}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration : 1 , delay: 0.3 }}}>
        <div class = 'flex mt-8'>
        <div class = 'flex-1 text-center'>
            <span class ='text-10px'>
            '옷'이라는 매개체를<br/>
            철학적인 접근 보다도, 실용적인 관점에서 바라봅니다.<br/>
            그렇게 우리들의 일상에 자연스럽게 스며들기를 바랍니다.<br/>
            과한 것은 부드럽게, 심심한 것엔 작은 변화를 주어<br/>
            지금의 유행을 담백하고 유용하게 풀어내고자 고민합니다.<br/>
            나아가 이 옷을 소장하고 즐기는 많은분들이<br/>
            상대방으로 하여금 기분 좋은 시선을 받는 것을 최고의 가치로 여깁니다.</span></div>
            <div><hr class="border border-gray-500 w-px h-full" /></div>    
            <div class = 'flex-1 text-center'>2</div>
        </div></motion.div>
    </>
    );
}

export default Introduce;