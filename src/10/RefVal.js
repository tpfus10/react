import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";

export default function RefVal() {

    let cnt = 0;                           //컴포넌트 변수
    const [stCnt, setStCnt] = useState(0); //state 변수
    const refCnt = useRef(0);              //ref 변수

    const hadleLocal = () => {//변수를 호출할 때 변화 자동 업데이트X(콘솔에만)
        cnt = cnt+1;
        console.log('cnt =', cnt);
    }
    
    const hadleState = () => {//변수를 호출할 때 변화 자동 업데이트O(콘솔, 화면 모두)
        setStCnt(stCnt+1)
    }
    
    const hadleRef = () => {//변수를 호출하고 렌더링이 이루어질 때 업데이트(콘솔, 화면 모두/ 화면에는 렌더링이 일어날 때만)
                            //매번 렌더링이 이루어지지 않아도 되는 변수에 사용(폼태그의 값을 가져올 때 주로 사용)
        refCnt.current = refCnt.current + 1;
        console.log("refCnt=", refCnt.current)
    }
    
    useEffect(()=> {
        console.log('stCnt =', stCnt);
    }, [stCnt])

    return (
        // 한 줄에 세 개가 나오기 때문에 div 6개가 있으면 3개씩 두 줄로 나오게 됨
        <div className="w-10/12 grid grid-cols-3  
                            text-center gap-4">
            <div>
                컴포넌트 변수(지역변수): {cnt}
            </div>
            <div>
                State 변수: {stCnt}
            </div>
            <div>
                {/* Ref변수는 .current를 써줘야 함 */}
                Ref 변수: {refCnt.current} 
            </div>
            <div>
                    <TailButton caption="컴포넌트 변수"
                        color="rose"
                        hadleClick={hadleLocal} />
            </div>
            <div>
                <TailButton caption="State 변수"
                    color="rose"
                    hadleClick={hadleState} />
            </div>
            <div>

                <TailButton caption="Ref 변수"
                    color="rose"
                    hadleClick={hadleRef} />
            </div>
        </div>
    )
}
