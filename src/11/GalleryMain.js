import TailInput1 from "../UI/TailInput1"
import TailButton from "../UI/TailButton"
import GalleryCard from "./GalleryCard"
import { useRef, useState, useEffect } from "react"

export default function GalleryMain() {

    const [tdata, setTdata] = useState(); //필요한 데이터를 불러와서 저장하는 변수
    const [tags, setTags] = useState(); //데이터를 필요한 형태로 변경하고 저장하는 변수

    const keyword = useRef();

    //키워드를 입력받아 인코딩
    const handleFetch = () => {
        if(keyword.current.value == "") {
            alert('키워드를 입력하세요.')
            keyword.current.focus();
            return;
        }

        let w = encodeURI(keyword.current.value) //인코딩(한글은 url로 바꿀 때 인코딩을 해줘야 함)
        getData(w)
    }

    //키워드를 입력받을 때마다 url을 변경하고 fetch로 필요한 데이터 받아오기
    const getData = (w) => {
        //가독성을 위해 url을 조각내기
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${process.env.REACT_APP_APTKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${w}&_type=json`

        //웹 API 호출해서 데이터 가져오기(+json 형태로 바꾸고 필요한 데이터만 고르기)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err))
    }

    //필요한 변수 형태로 데이터 가공하고 저장하기(키워드가 변경될 때마다 일어나는 작업)
    useEffect(()=> {
        if(!tdata) return;
        
        let tm = tdata.map((item) =>
        <GalleryCard 
        imgUrl={item.galWebImageUrl.replace('http://', 'https://')} 
        title={item.galTitle} 
        ptitle={item.galPhotographyLocation} 
        ktag={item.galSearchKeyword}
        key = {item.galContentId}
        />)

        setTags(tm)
        
    },[tdata]) //tdata가 변경되면 자동으로 호출

    //다음 키워드를 입력하고 작업이 이루어질 수 있도록 기존의 데이터 클리어
    const handleClear = () => {
        setTdata('');
        setTags('');
        keyword.current.value = '';
        keyword.current.focus();
    }

    return (
        <div className="w-11/12 flex flex-col
                        my-5 border
                        h-full justify-start items-center">
            <div className="w-full grid grid-cols-1 
                            md:grid-cols-3 gap-4 p-2
                            bg-slate-100">
                <div className="px-2 m-2">
                    <TailInput1 type="text"
                        ph="키워드 입력"
                        ref1={keyword} 
                        className="bg-white"/>
                </div>
                
                <div className="px-2">
                    <TailButton caption="조회"
                        hadleClick={handleFetch}
                        color="rose" />
                </div>
                <div className="px-2">
                    <TailButton caption="취소"
                        hadleClick={handleClear}
                        color="rose" />
                </div>
            </div>
                <div className="w-full grid grid-cols-1 
                            sm:grid-cols-3 gap-4 p-2
                           ">{tags}</div>
        </div>

    )
}
