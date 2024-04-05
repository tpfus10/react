import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json"

export default function UltraSrtFcst() {
    //주소의 경로에서 값을 받아오기
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const gubun = "초단기예보";

    //select 박스 옵션
    const ops = getcode.filter(item => item.예보구분 === gubun)
        .map(item => `${item.항목명} (${item.항목값}) `);

    //Ref 변수 선언
    const itemRef = useRef();

    //fetch data state 변수로 저장
    const [tdata, setTdata] = useState([]); //undefined 오류 예방

    //화면에 표시되는 테이블 tr 저장
    const [trtags, setTrtags] = useState();

    //select 박스 선택값
    const [selItem, setSelItem] = useState();
    const [selItemName, setSelItemName] = useState();
 
    console.log(dt, area, x, y);

    //데이터 가져오기
    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + `serviceKey=${process.env.REACT_APP_APTKEY}`;
        url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;

        getData(url)

    }, []);

    //fetch 함수
    const getData = async (url) => { //async 비동기 함수(.then부분은 모두 await으로 끊어주기)
        const resp = await fetch(url); //await: url fetch가 끝나고 나서 다음 코드가 실행되도록 함
        const data = await resp.json();

        setTdata(data.response.body.items.item)
    }

    //tdata가 공백일 때(usestate로 선언할 때), 값이 저장되었을 때 실행
    useEffect(() => {
        let tm = tdata.filter(item => item.category === selItem)
                        .map(item =>
                            <tr key = {item.category + item.fcstDate + item.fcstTime}
                                className="bg-white border-b hover:bg-rose-50">
                                <td class="px-6 py-2">{selItemName}</td>
                                <td class="px-6 py-2">{`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(4, 2)}-${item.fcstDate.substr(6, 2)}`}</td>
                                <td class="px-6 py-2">{`${item.fcstTime.substr(0, 2)} : ${item.fcstTime.substr(2, 2)}`}</td>
                                <td class="px-6 py-2">{item.fcstValue}</td>
                            </tr>
                        );
        setTrtags(tm);
    }, [selItem]);

    //select 박스 항목 선택
    const handleItem = () => {
        console.log(itemRef.current.value)
        if(itemRef.current.value === '') {
            alert("항목을 선택하세요.");
            itemRef.current.focus();
            return;
        }
        setSelItemName(itemRef.current.value.split(' (')[0])
        setSelItem(itemRef.current.value.split(' (')[1].replace(') ', ''))
    }

    return (
        <div className="w-full flex flex-col justify-between items-center">
            <div className="w-10/12 grid grid-cols-1 mb-3
                            sm:grid-cols-2 gap-4 pt-4">
                <div className="text-slate-700 font-bold text-xl p-4">{`${area} ${gubun} (${dt.substring(0, 4)}/${dt.substring(4, 6)}/${dt.substring(6, 8)})`}</div>
                <div className="flex items-center">
                    <TailSelect handleSel={handleItem}
                        selfRef={itemRef}
                        ops={ops}
                        opDefault="---항목 선택---" />
                </div>
            </div>
            <table className="w-10/12 text-left rtl:text-right text-gray-500">
                <thead className="text-gray-700 uppercase bg-rose-50">
                    <tr>
                        <th scope="col" className="px-6 py-2">
                            항목명
                        </th>
                        <th scope="col" className="px-6 py-2">
                            예측일자
                        </th>
                        <th scope="col" className="px-6 py-2">
                            예측시간
                        </th>
                        <th scope="col" className="px-6 py-2">
                            예보값
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {trtags}
                </tbody>
            </table>
        </div>
    )
}
