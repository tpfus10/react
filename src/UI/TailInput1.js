export default function TailInput1({type, ph, ref1, handleChange}) {
  return (
    <input type={type}
    max = "2024-03-24"
    ref={ref1}
    onChange={handleChange}
    className='bg-gray-50 
    border
    text-gray-900
    text-sm rounded-lg
    focus:ring-blue-500
    focus:border-blue-500
            block w-5/6 p-2.5'
            placeholder={ph}>
    </input>
  )
}
