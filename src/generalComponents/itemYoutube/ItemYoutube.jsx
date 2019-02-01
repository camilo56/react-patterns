import React from 'react';
import "./ItemYoutube.css"

class ItemYoutube extends React.Component{

    state = {};
    
    render(){
        return <div className="ItemYoutube" onClick={() => this.props.onClick(this.props.src)}>{this.props.name}</div>
    }
}

export default ItemYoutube;