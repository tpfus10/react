import TailButton from "../UI/TailButton"
import { Link, useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigator = useNavigate()

    return (
        <div className="w-11/12 flex 
                    justify-center items-center">
            <TailButton caption="Home" hadleClick={() => { navigator("/오렌지") }} color="rose" />
            <TailButton caption="Page1" hadleClick={() => { navigator("/page1/커피") }} color="rose" />
            <TailButton caption="Page2" hadleClick={() => { navigator("/page2?item1=사과&item2=바나나") }} color="rose" />
        </div>
    )
}
