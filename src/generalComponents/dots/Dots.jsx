import React from "react";

class Dots extends React.Component{

    state = {}

    getClass(index){
        return this.props.indexToShow === index? "dots selected": "dots";
    }

    render(){
        return  <div className="dotsContainer">
                    {this.props.imgs.map((item, index) => <div className={this.getClass(index)} key={`dot-${index}`} onClick={e => this.props.onClick(index)}></div>)}
                </div>
    }

}

export default Dots;