import TailSelect from "../UI/TailSelect"
import TailButton from "../UI/TailButton"
import TailInput1 from "../UI/TailInput1"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import getxy from "./getxy.json"

export default function Frcst() {

    const dRef = useRef();
    const sRef = useRef();
    const ops = getxy.map((item) => item["1단계"]);


    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();
    const [dt, setDt] = useState();

    const handleDate = () => {
        setDt(dRef.current.value.replaceAll('-', ''));
    };

    const handleArea = () => {
        if(sRef.current.value === '' || sRef.current.value === undefined) return;

        console.log(sRef.current.value)
        let tm = getxy.filter(item => item["1단계"] === sRef.current.value);

        setArea(sRef.current.value);
        setX(tm[0]["격자 X"]); //오브젝트 1개를 가지는 배열이기 때문에 0번째인 것을 표기
        setY(tm[0]["격자 Y"]);
    };

    useEffect(() => {
        console.log(x, y)
    }, [x, y])

    const navigator = useNavigate();
    //초단기예보
    const handleUltra = () => {
        if(dt === '' || dt === undefined) {
            alert('날짜를 선택하세요');
            dRef.current.focus();
        }
        if(area === '' || area === undefined) {
            alert('지역을 선택하세요');
            sRef.current.focus();
        }
        navigator(`/ultra/${dt}/${area}/${x}/${y}`) // ':' 넣으면 안 됨
    };

    //단기예보
    const handleVilage = () => {
        navigator(`/vilage/${dt}/${area}/${x}/${y}`)
    };

    return (
        <>
            <h1 className="w-11/12 font-bold text-2xl text-slate-700 mb-20 mr-30">단기예보 선택</h1>
            <div className="w-11/12 grid grid-cols-1
                        md:grid-cols-2 gap-2 p-2">
                <div>
                    <TailInput1 type="date"
                        ref1={dRef}
                        ph="날짜선택"
                        handleChange={handleDate} />
                </div>
                <div>
                    <TailSelect handleSel={handleArea}
                        selfRef={sRef}
                        ops={ops}
                        opDefault="---지역 선택---"
                    />
                </div>
                <div>
                    <TailButton caption="초단기예보"
                        color="rose" 
                        hadleClick={handleUltra}/>
                </div>
                <div>
                    <TailButton caption="단기예보"
                        color="rose" 
                        hadleClick={handleVilage}/>
                </div>
            </div>
        </>
    )
}
