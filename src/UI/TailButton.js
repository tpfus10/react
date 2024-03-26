export default function TailButton({caption, hadleClick, color}) {
  
  const colorObj = {
    'blue' : 'bg-blue-600' ,
    'red' : 'bg-red-600',
    'lime' : 'bg-lime-600',
    'orange' : 'bg-orange-600',
    'rose'    : 'bg-rose-600'
  }

  const hoverObj = {
    'blue' : 'hover:bg-blue-400' ,
    'red' : 'hover:bg-red-400',
    'lime' : 'hover:bg-lime-400',
    'orange' : 'hover:bg-orange-400',
    'rose'    : 'hover:bg-rose-400'
  }

  const bStyle = `px-4 py-2 m-2 rounded-md
                  w-full
                  ${hoverObj[color]}
                  ${colorObj[color]} text-white`;
  
  return (
    <button className= {bStyle}
            onClick = {hadleClick}>
        {caption}
    </button>
  )
}
