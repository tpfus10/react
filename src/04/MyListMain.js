import MyList from "./MyList"
import listData from "./MyListData.json"

export default function MyListMain() {
    console.log(listData)
    const myitems = listData.map(item =>  //item은 배열의 요소를 의미(꼭 item 안 써도 됨)
        <MyList 
        title= {item.title}
        imgUrl= {item.imgUrl}
        content= {item.content}
        key= {item.title}
        />
    );
    
    return (
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {myitems}
        </div>
    )
}
