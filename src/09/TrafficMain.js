import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";
import car from "./car.jpg"

export default function TrafficMain() {
    const [tdata, setTdata] = useState(); //전체 fetch 데이터
    const [c1, setC1] = useState(); //대분류, 중복제거
    const [c2, setC2] = useState(); //중분류, 중복제거
    const [selC1, setSelC1] = useState(); //선택된 대분류
    const [selC2, setSelC2] = useState(); //선택된 중분류
    const [detail, setDetail] = useState(); //상세 정보
    const [info, setInfo] = useState();

    const getDataFetch = (url) => {
        //then chanining(위의 then이 수행되어야 연쇄적으로 수행됨)
        fetch(url) //비동기 형식
            .then(resp => resp.json()) //fetch(데이터 요청) 후에 응답을 가지고 오면 json 형태로 저장해라
            .then(data => setTdata(data.data))//data의 data를 tdata에 저장하기
            .catch(err => console.log(err));
    }

    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APTKEY}`;

        console.log(url)

        getDataFetch(url);
    }, []); //초기에 한 번 무조건 useEffect 안의 함수가 무조건 실행됨

    useEffect(() => {
        if (!tdata) return; //tdata가 두 번 실행되는데, 첫 번째는 undefined(false)이기 때문에 걸러줘야 함

        let tm = tdata.map(item => item["사고유형_대분류"])
        tm = new Set(tm); //집합으로 만들기
        tm = [...tm]; //배열로 바꾸기
        console.log(tm)

        setC1(tm)

    }, [tdata]); //tdata가 변경될 때마다 useEffect 안의 함수가 무조건 실행됨

    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
            .map(item => item.사고유형_중분류)
        tm = new Set(tm); //집합으로 만들기
        tm = [...tm]; //배열로 바꾸기
        console.log(tm)

        setC2(tm); 
        setInfo(undefined); //다른 버튼을 선택했을 때 detail 초기화
        
    }, [selC1]);
    
    useEffect(() => {
        if (!tdata) return;
        
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1
            && item.사고유형_중분류 === selC2)
            
            console.log(tm)
            setDetail(tm[0])

    }, [selC2]);

    useEffect(() => {
        if (!tdata) return;
        const keyArr = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]
        let tm = keyArr.map(k =>
            <div className="w-full mt-5 flex justify-center items-center border"
                 key ={k}>
                <div className="w-2/3 h-10 flex justify-center items-center bg-slate-200 font-bold">{k}</div>
                <div className="w-1/3 flex justify-center items-center mx-2">{parseInt(detail[k]).toLocaleString()}<div>{k === "사고건수" ? "회" : "명"}</div></div> 
            </div>
        )

        setInfo(tm);

    }, [detail])

    //  useEffect(() => {
    //     console.log(detail)
    //  },[detail])
    return (
        <div className="w-full h-full 
        flex flex-col 
        items-center
        mt-5">
            <img src={car} alt="car Image" className="my-10"/>
            {c1 && <TrafficNav title="대분류" //c1이 있을 때만 TrafficNav로 c1 전달
                category={c1}
                sel={selC1}
                setSel={setSelC1}
            />}
            {c2 && <TrafficNav title="중분류" //c2가 있을 때만 TrafficNav로 c2 전달
                category={c2}
                sel={selC2}
                setSel={setSelC2}
            />}
            <div className="w-11/12 grid grid-cols-2 
                                md:grid-cols-5 sm:grid-cols-3
                                gap-4">
                {info}
            </div>
        </div>
    )
}
