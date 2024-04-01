import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const geti = useParams().item;
    
  return (
    <div>
      RoutePage1 : {geti}
    </div>
  )
}
