export default function MyDiv3({d4, d5, d6}) {

  return (
    <div className= "w-4/5 h-2/3 bg-red-300 flex justify-center items-start text-white">
      <p className="w-4/5 flex justify-start font-bold text-xl m-5">
        {`${d4} > ${d5} > ${d6}`}
          
      </p>

    </div>
  );
}
