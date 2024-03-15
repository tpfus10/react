import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1, d2, d3}) {

  return (
    <div className= "w-4/5 h-2/3 bg-red-400 flex flex-col justify-center items-center text-white">
      <p className="w-4/5 flex justify-start font-bold text-2xl m-5">
        {`${d1} > ${d2}`}
        </p>
        <MyDiv3 d4={d1} d5={d2} d6={d3}/>
    </div>
  );
}
