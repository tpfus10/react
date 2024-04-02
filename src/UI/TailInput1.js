export default function TailInput1({type, ph, ref1, handleChange}) {
  return (
    <input type={type}
    ref={ref1}
    onChange={handleChange}
    className='bg-gray-50 
    border
    text-gray-900
    text-sm rounded-lg
    focus:ring-blue-500
    focus:border-blue-500
            block w-full p-2.5'
            placeholder={ph}>
    </input>
  )
}
