import { useState, useEffect } from "react";

function MyClockTime() {

    const [currentTime, setCurrentTime] = useState(new Date());
    
    //컴포넌트가 생성시 최초 한 번  실행
    useEffect(() => {
      const t =  setInterval(()=>{
            setCurrentTime(new Date()); //현재 시간을 계속 갱신
        }, 1000);
        console.log("[]=>", currentTime);

        return () => {clearInterval(t)} //clearInterval을 해줄 때는 콜백함수를 써야함
    }, []);

    //defendency 변수가 바뀔 때마다 실행
    useEffect(()=>{
        console.log("[]=>", currentTime);
    }, [currentTime]); //[]은 defendency array: defendency 변수 값이 바뀔 때마다 useEffect 실행(초기화하는 경우도 포함)

    //렌더링이 일어날 때마다 실행
    useEffect(()=> {
        console.log("[]없는 경우=>", currentTime);
    });

    return (
        <h2 className="font-bold text-xl my-10">
           { currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}`}
        </h2>
    );
}

export default MyClockTime;