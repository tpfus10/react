import MyClockImage from "./MyClockImage2";
import MyClockTime from "./MyClockTime2";

function MyClock () {
    return(
        <div className="w-full h-full 
                        flex flex-col justify-center items-center
                        bg-white
                        text-black">
        <MyClockImage />
        <MyClockTime />
        </div>
    );

}

export default MyClock;