import React from "react";

class Image extends React.Component{

    initialState = {url: this.props.url}
    
    state = this.initialState

    onError = () => {
        this.setState({url: "https://www.clipartmax.com/png/small/5-56314_law-firm-testimonials-error-icon.png"})
    }

    render(){
        return  <img style={this.props.style} className={this.props.className} src={this.state.url} onError={this.onError} onLoad={this.onLoad}/>
    }

}

export default Image;