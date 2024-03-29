import FestivalCard from "./FestivalCard"
import { useRef, useState, useEffect } from "react"

export default function Festival() {
    //부산 축제 전체 데이터
    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const [optags, setOptags] = useState();
    const [cards, setCards] = useState();

    //select 값
    const selRef = useRef();

    //부산 축제 데이터 fetch
    useEffect(() => {
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        url = url + `serviceKey=${process.env.REACT_APP_APTKEY}`;
        url = url + '&pageNo=1&numOfRows=40&resultType=json';

        getData(url)

    }, [])

    const getData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.getFestivalKr.item))
            .catch(err => console.log(err))
    }
    console.log(tdata)

    //구정보 만들기
    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.map(item => item.GUGUN_NM)
        tm = new Set(tm);
        tm = [...tm].sort();

        console.log(tm)

        setGuname(tm)

    }, [tdata])

    //구데이터로 option 만들기
    useEffect(() => {

        if (!tdata) return;

        let op = guname.map(item =>
            <option className="font-semibold" value={item} key={item}>
                {item}
            </option>)

        setOptags(op)
    }, [guname])


    //selec 선택
    const handleselGu = () => {
        let cd = tdata
        .filter(item => item["GUGUN_NM"] === selRef.current.value)
        .map(item => 
            <div className="transform hover:scale-105 
                            transition duration-300 ease-in-out">
            <FestivalCard
            key ={item.UC_SEQ}
            title={item.TITLE}
            subtitle={item.SUBTITLE}
            trinfo={item.TRFC_INFO}
            imgUrl={item.MAIN_IMG_NORMAL}
            dtag={(item.USAGE_DAY ? item.USAGE_DAY : item.USAGE_DAY_WEEK_AND_TIME)}
            />
            </div>
            )

            setCards(cd)
        // console.log(selRef.current.value)
    }

    return (
        <div className="w-full h-full flex flex-col
                        mb-5    justify-start items-center">
            <h1 className="mt-10 mb-3 font-bold text-2xl text-blue-700">🎉부산축제정보🎉</h1>
            <form className="w-3/5 mx-auto flex
                                    mt-5 mb-5 font-semibold
                                    justify-center items-center">
                {/* <label htmlFor="gu"
                    className="w-1/3 text- font-bold
                                        flex justify-center"></label> */}
                <select id="gu" 
                        className="w-2/3 bg-gray-50 border border-gray-300
                                  text-gray-900 text-sm rounded-lg
                                  focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        onChange={handleselGu}
                        ref={selRef}>
                    <option defaultValue>--지역선택--</option>
                    {optags}
                </select>
            </form>
            <div className="w-full grid grid-cols-1
                            sm:grid-cols-3 gap-4 pt-4">{cards}</div>
        </div>

    )
}
