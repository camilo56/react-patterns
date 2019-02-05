import React from "react";

class Dots extends React.Component{

    state = {}

    render(){
        console.log(this.props)
        return  <div className="dotsContainer">
                    {this.props.imgs.map((item, index) => <div className="dots" key={`dot-${index}`} onClick={e => this.props.onClick(index)}></div>)}
                </div>
    }

}

export default Dots;