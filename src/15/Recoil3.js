import TailButton from "../UI/TailButton"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import {rcnt} from "./RecoilAtom"

export default function Recoil3() {

    // const cnt = useRecoilValue(rcnt);
    // const setCnt = useSetRecoilState();

    const [cnt, setCnt] = useRecoilState(rcnt);

    const handleUp = () => {
        setCnt(cnt +1);
    }

  return (
    <div>
      <TailButton caption="증가"
                  color="blue"
                  hadleClick = {handleUp} />
    </div>
  )
}
