import bank from "./img/bank.png"
import market from "./img/market.png"
import busan from "./img/busan.png"
import { useState } from "react"

export default function FoodCard({fobj}) {

    const [isClick, setIsClick] = useState(false);

    const hadleIsClick = () => {
        setIsClick(!isClick)
    }


    const fimg = fobj.구분 == "광역지원센터" 
                              ?busan 
                              :"기초푸드뱅크"
                              ?bank
                              :market

    return (
        <div className="flex w-11/12 justify-center items-center border"
             onClick={hadleIsClick}>
            <div className="w-1/6 max-w-xl flex justify-center items-center">
                <img src={fimg} alt={fimg} />
            </div>
            <div className="flex flex-col justify-between px-3 w-5/6 p-3">
                <div className="mx-2">
                    <h1 className="font-bold text-2xl text-slate-700">{fobj.사업장명}</h1>
                    <h2 className="font-semibold text-xl text-slate-600">{fobj.운영주체명}</h2>
                    <h3 className="text-slate-500 font-normal">{fobj["사업장 소재지"]}</h3>
                </div>
                <div className="bg-slate-100 w-full h-8 mt-2 px-3 
                                flex justify-start items-center truncate 
                                border" > {/* truncate는 범위가 넘어갈 때 글자가 자동으로 잘리게 해줌 */}
                    <p className="text-black">{ !isClick && "Telephone & Fax"}</p>
                    <p className="text-black text-sm">{ isClick && `Tel: ${fobj["연락처(대표번호)"]}, Fax: ${fobj.팩스번호}`}</p>
                </div>
            </div>
        </div>
    )
}
