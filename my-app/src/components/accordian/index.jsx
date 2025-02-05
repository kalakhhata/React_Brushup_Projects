//single selection

import { useState } from "react"
import data from "./data"

//multiple selection
export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false);
    const [multiSelection,setMultiSelection] = useState([]);
    function handleSingleSelection(cid){
        setSelected(cid === selected ? null : cid);
    }
    function handleMultiSelection(cid){
        let cpyMultiple = [...multiSelection];
        const findIndexOfCurrentId = cpyMultiple.indexOf(cid)
        if(findIndexOfCurrentId===-1)
        {
            cpyMultiple.push(cid);
        }
        else
        {
            cpyMultiple.splice(findIndexOfCurrentId,1);
        }
        setMultiSelection(cpyMultiple);
    }

    return(
        <div className="wrapper">
            <buttom className="btn" onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</buttom>
            <div className="accordian">
                {data && data.length > 0 ?
                data.map(dataItem => <div onClick={enableMultiSelection ? ()=>handleMultiSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)} className="item">
                    <div  className="title"><h3>{dataItem.question}</h3></div>
                    {enableMultiSelection  ? multiSelection.indexOf(dataItem.id)!==-1 && (<div className="content">{dataItem.answer}</div>) : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)}
                    <span>{selected===dataItem.id ? "-" : "+"}</span>
                    
                </div>)
                : <h3>No Data Found</h3>
                }
            </div>
        </div>
    )
}