export default function GalleryCard({imgUrl, title, subtitle, trinfo, dtag}) {

    if (!dtag) {
        dtag = dtag.split(',').map(item =>
            <span key={item} 
                  className="inline-block bg-white rounded-full 
                  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
        );
    }
    else {
        dtag = <span key={dtag} 
                className="inline-block bg-gray-200 rounded-md 
                px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{dtag}</span>
    }

    return (
        <div className="max-w-sm rounded overflow-auto shadow-lg">
            <img className="w-full"
                src={imgUrl}
                alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                {/* <p className="text-gray-700 font-semibold text-sm mb-1">{subtitle}</p> */}
                {trinfo 
                ? <p className="text-gray-700 font-semibold text-sm pb-2">[오시는 길]</p> 
                : <p className="text-gray-700 text-xs">[교통정보 없음]</p>}
                <p className="text-gray-700 text-xs truncate">{trinfo}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {dtag}
            </div>
        </div>
    )
}
