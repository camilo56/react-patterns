import React from "react";
import "./PaginationOptions.css";

function Item(props){
    let{onClick, index, itemSelected} = props;

    return <div className={index === itemSelected.index ? `selected`: ""} onClick={() => onClick(index)}>{index + 1}</div>
}

export default function (props){
    let {pageStart = 0, pageEnd = 4} = props;
    let newData = [];

    for(let i = pageStart; i <= pageEnd; i++){
        newData.push(<Item key={`options${i}`} {...props} index={i}/>)
    }

    return  <div className="PaginationOptions"> {newData} </div>
                
}
