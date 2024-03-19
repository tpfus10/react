export default function TailBall({ n }) {

    const bColor = [
        'bg-red-600',
        'bg-orange-600',
        'bg-lime-600',
        'bg-blue-600',
        'bg-purple-600'
    ]

    const ballColor = `w-16 h-16 
                       flex justify-center items-center 
                       ${bColor[parseInt(n / 10)]} rounded-full
                       text-white font-bold text-xl m-2`

    return (
        <div className={ballColor}>
            {n}
        </div>
    )
}
