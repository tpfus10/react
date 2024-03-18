import { IoLogoOctocat } from "react-icons/io";
import { useState } from "react"; //상태변수를 사용할 때 변경을 감지하는 장치

export default function MyList({ title, imgUrl, content }) {
    let cnt = 0;//지역변수

    const[stCnt, setStCnt] = useState(0); //상태변수

    const handleLike = (t) => {
        console.log('handleLike' + t);
        cnt = cnt + 1;
        console.log(`cnt = ${cnt}`);
        setStCnt(stCnt + 1); //변수값을 바꾸는 세터함수
    }

    return (
        <div className="flex flex-col justify-between border rounded w-full hover:bg-rose-50">
            <div className="flex">
                <div className="w-full max-w-40">
                    <img src={imgUrl} alt="html" />
                </div>
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold text-gray-700 px-3 py-8">{title}</h1>
                    <p className="text-gray-600 m-2">{content}</p>
                </div>
            </div>
            <p className="flex justify-end  mt-5 font-bold items-center m-3">
                <span className="cat" onClick={() =>{handleLike(title)}}>
                <IoLogoOctocat className="text-rose-500 hover:text-gray-600 text-xl"/>
                </span>
                <span className="mx-2">좋아요</span>
                <span>{stCnt}</span>
            </p>
        </div>
    )
}
