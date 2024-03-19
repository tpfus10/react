import BoxOffice from "./BoxOffice.json"
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficdThead from "./BoxOfficdThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOfficeTb() {

    //state 변수
    const[exp, setExp] = useState("영화를 선택해주세요.");

    //영화 목록 json에서 가져오기
    const boxList = BoxOffice.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxList)

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="MV w-4/5">
                 {/* thead */}
                <BoxOfficdThead /> 
                 {/* thead */}
                 {/* tbody: probs로 세터함수도 받아줌*/}
                <BoxOfficeTbody boxList={boxList} setExp={setExp}/> 
                 {/* tbody */}
            </table>
            <BoxOfficeInfo exp={exp}/>
        </div>
    )
}

