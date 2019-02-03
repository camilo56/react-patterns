import React from 'react';
import "./ItemYoutube.css"

class ItemYoutube extends React.Component{

    state = {};
    
    render(){
        let {srcSelected, onClick, name, src} = this.props;

        return <div className={srcSelected === src? "ItemYoutube selected": "ItemYoutube"} onClick={() => onClick(src)}>{name}</div>
    }
}

export default ItemYoutube;