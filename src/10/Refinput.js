import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react"
import TailInput1 from "../UI/TailInput1";


export default function Refinput() {
    const inputRef = useRef()
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        if (inputRef.current.value === '') { //공백 표기할 때는 '' 이렇게 하기 ' ' 이렇게 공간 주면 안 됨
            alert('값을 입력하세요');
            return;
        }

        setBts([inputRef.current.value, ...bts]) //기존의 bts에 새로운 값 추가
    }

    const handleRemove = () => {
        setBts([])
        // 값을 지웠을 때 input 비우고 커서 넣어주기
        inputRef.current.value = '';
        inputRef.current.focus();

    }

    useEffect(() => {
        // 새로 입력할 때 input 비우고 커서 넣어주기
        inputRef.current.value = '';
        inputRef.current.focus();

        //입력되는 값을 버튼으로 만들어줌
        let tm = bts.map((item, idx) =>
            <TailButton caption={item}
                key={`bt${idx}`}
                color="blue" />
        );

        setTags(tm)
    }, [bts])

    return (
        <div className="w-11/12 flex flex-col
                         items-center border rounded-lg">
            <h1 className="text-slate-600 font-bold text-2xl m-5">과일 데이터 입력</h1>
            <div className="w-11/12 flex justify-center items-center">
                <div className="w-2/3 flex justify-start items-center">
                    <TailButton caption="입력:"
                        color="rose"
                        className="w-1/6" />
                    <TailInput1 type="text"
                        ref1={inputRef}
                        ph="값 입력"
                    />
                </div>
                <div className="w-1/3 flex justify-end items-center">
                    <TailButton caption="등록"
                        color="rose"
                        hadleClick={handleAdd} />
                    <TailButton caption="취소"
                        color="rose"
                        hadleClick={handleRemove} />
                </div>
            </div>
            <div className="w-11/12 p-5 m-7 bg-gray-50 rounded-lg border">
                {tags}
            </div>
        </div>
    )
}
