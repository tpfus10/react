export default function MyList({ title, imgUrl, content }) {
    return (
        <div className="flex flex-col justify-between border rounded w-full hover:bg-rose-50">
            <div className="flex">
                <div className="w-full max-w-40">
                    <img src={imgUrl} alt="html" />
                </div>
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold text-gray-700 px-3 py-8">{title}</h1>
                    <p className="text-gray-600 m-2">{content}</p>
                </div>
            </div>
            <p className="flex justify-end  mt-5 font-bold items-center m-3">
                <span className="text-xl">💛</span>
                <span className="mx-2">좋아요</span>
                <span>0</span>
            </p>
        </div>
    )
}
