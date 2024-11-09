import { motion } from 'framer-motion';
import { hoverState } from '../../RECOIL/ATOM/atom';
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom";
function Contents(){
    const [hover, setHover] = useRecoilState(hoverState);

    return (
        <div>
          <span 
            className="text-xs hover:underline mr-8"
            onMouseEnter={() => setHover(true)}>
            스토어
          </span>
          <span 
            className="text-xs hover:underline mr-8"
            onMouseEnter={() => setHover(true)}>
            게시판
          </span>
          <span 
            className="text-xs hover:underline mr-8"
            onMouseEnter={() => setHover(true)}>
            캠페인
          </span>
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} // 초기 상태
              animate={{ opacity: 1, y: 0 }} // 드롭다운이 나타날 때
              exit={{ opacity: 0, y: -10 }} // 사라질 때 상태
              transition={{ duration: 0.2 }} // 애니메이션 지속 시간
              className="absolute left-0 w-full top-7 shadow-lg bg-white"
              onMouseEnter={() => setHover(true)} // 드롭다운에 마우스가 올려질 때
              onMouseLeave={() => setHover(false)} // 드롭다운에서 마우스가 나갈 때
            >
              <div>
                <Link to = {`/store`} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">
                  옵션 1
                </Link>
                <Link to = {`/store`} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">
                  옵션 2
                </Link>
                <Link to = {`/store`} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">
                  옵션 3
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      );
    }

export default Contents;