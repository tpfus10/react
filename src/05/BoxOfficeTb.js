import BoxOffice from "./BoxOffice.json"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"; //라이브러리가 같으면 콤마로 이어붙여서 써도 됨
import { FaGripLines } from "react-icons/fa6";
import { useState } from "react";

export default function BoxOfficeTb() {

    const[exp, setExp] = useState("영화를 선택하세요.");
    
    const handleClick = (mv) => {
        setExp(`[순위-${mv.rank}] 
                [영화명-${mv.movieNm}] 
                [누적관객수-${parseInt(mv.audiAcc).toLocaleString()}명]
                [누적매출액-${parseInt(mv.salesAcc).toLocaleString()}원]
                `);
    }

    const boxlist = BoxOffice.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxlist)

    const items = boxlist.map(item => (
        <tr key= {item.movieCd} 
        className="text-center bg-white text-black h-10 hover:bg-blue-50 hover:font-bold" 
        //onClick의 매개변수로 item을 전달하여 items 함수 내에 선언된 데이터를 이용할 수 있게 함
        onClick={()=>handleClick(item)}> 
            <td>{item.rank}</td>
            <td className="text-left">{item.movieNm}</td>
            <td className="w-1/5">{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className="w-1/5">{parseInt(item.audiCnt).toLocaleString()}</td>
            <td className="w-20">
                {parseInt(item.rankInten) === 0 
                ? <FaGripLines className="text-gray-500 w-full text-center"/>
                : parseInt(item.rankInten) > 0 
                ? <TbTriangleFilled className="text-red-500 w-full text-center"/> 
                : <TbTriangleInvertedFilled className="text-blue-700 w-full text-center"/>}
                {/* {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)} */}
            </td>
        </tr>
    ));

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="MV w-4/5">
                <thead>
                    <tr className="text-center bg-blue-400 text-white h-10">
                        <th className="w-10">순위</th>
                        <th className="">영화명</th>
                        <th className="w-1/5">매출액</th>
                        <th className="w-1/5">관객수</th>
                        <th className="w-20">증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            <div className="MV w-4/5 text-center bg-blue-400 text-white h-10 flex justify-center items-center">
                {exp}
            </div>
        </div>
    )
}
