import React from "react";
import "./OptionNav.css"

export default function OptionNav(props){
        let {index, indexSelected, indexDisable, onClick, name} = props;

       return <div className={index === indexDisable? "disable": ""} data-selected={index === indexSelected} onClick={onClick}>{name}</div>
    
};