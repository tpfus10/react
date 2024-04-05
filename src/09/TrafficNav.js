import TailButton from "../UI/TailButton"

export default function TrafficNav({ title, category, sel, setSel}) {
    
    const handleBtClick = (item) => {
        setSel(item); //현재 선택된 대분류를 부모에서 업데이트
    }
    
    const bts = category.map(item => 
        <div className="mx-2">
        <TailButton 
        caption={item}
        key={item}
        hadleClick={() => handleBtClick(item)}
        color={item === sel ? "rose" : "blue"}
        />
        </div>
        );

   
    return (
        // 부모의 div에 
        <div className="w-11/12 flex items-center justify-between"> 
            <h1 className="text-xl font-bold text-slate-700">
                교통사고 {title}
            </h1>
            <div className="flex"> 
                {bts}
            </div>
        </div>
    )
}
