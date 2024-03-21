import fdata from "./fooddata.json"
import FoodCard from "./FoodCard"
import TailButton from "../UI/TailButton"
import { useState } from "react"

export default function FoodMain() {


    let c1 = fdata.map(item => item["운영주체 분류"]
    )
    c1 = new Set(c1) //set으로 만들어서 중복을 제거함
    c1 = [...c1]; //set을 array로 바꿔줌(전개연산자)
    console.log(c1)

    const c1Bts = c1.map(item =>
        <TailButton
            caption={item}
            hadleClick={() => hadleList(item)}
            color="rose"
            key={item} />
    )

    const [cards, setCards] = useState([])
    const hadleList = (citem) => {
        console.log(citem)

        const tm = fdata.filter(item => item["운영주체 분류"] === citem)
            .map(item =>
                <FoodCard fobj={item} key={"사업장명"} />

            )
        
        setCards(tm)
    }

    return (
        <div className=" w-full h-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-center items-center bg-red-50" >
                {c1Bts}
            </div>
            <div className="w-full grid grid-cols-1
                        md:grid-cols-2 
                        xl:grid-cols-3
                        gap-2
                        my-3">
                {cards} {/* state 변수 */}
            </div>

        </div>
    )
}
