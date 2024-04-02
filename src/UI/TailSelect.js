export default function TailSelect({ handleSel, selfRef, ops, opDefault }) {

    const optags = ops.map(item =>
        <option className="font-semibold" value={item} key={item}>
            {item}
        </option>);

    return (
        <select 
            onChange={handleSel}
            ref={selfRef}
            className=" w-full bg-gray-50 border border-gray-300
                                  text-gray-900 text-sm rounded-lg
                                  focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
            <option defaultValue=''>{opDefault}</option>
            {optags}
        </select>
    )
}
