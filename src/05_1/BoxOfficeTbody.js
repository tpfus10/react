import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"; //라이브러리가 같으면 콤마로 이어붙여서 써도 됨
import { FaGripLines } from "react-icons/fa6";

export default function BoxOfficeTbody({boxList, setExp}) {
    
    const handleClick = (mv) => {
        setExp(`[순위-${mv.rank}] 
                [영화명-${mv.movieNm}] 
                [누적관객수-${parseInt(mv.audiAcc).toLocaleString()}명]
                [누적매출액-${parseInt(mv.salesAcc).toLocaleString()}원]
                `);
    }
    
    {/* 영화 목록 json에서 가져오기 */}
    const trs = boxList.map( item =>
        <tr key={item.movieCd}
        className="text-center bg-white text-black h-10 hover:bg-blue-50 hover:font-bold"
        //onClick의 매개변수로 item을 전달하여 items 함수 내에 선언된 데이터를 이용할 수 있게 함
        onClick={() => handleClick(item)}>
        <td>{item.rank}</td>
        <td className="text-left">{item.movieNm}</td>
        <td className="w-1/5">{parseInt(item.salesAmt).toLocaleString()}</td>
        <td className="w-1/5">{parseInt(item.audiCnt).toLocaleString()}</td>
        <td className="w-20">
            {parseInt(item.rankInten) === 0
                ? <FaGripLines className="text-gray-500 w-full text-center" />
                : parseInt(item.rankInten) > 0
                ? <TbTriangleFilled className="text-red-500 w-full text-center" />
                : <TbTriangleInvertedFilled className="text-blue-700 w-full text-center" />}
            {/* {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)} */}
        </td>
    </tr>
    );
    
    return (
        <tbody>
            {trs}
        </tbody>
    )
}

// const boxlist = {boxList};
// console.log(boxlist);