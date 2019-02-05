import React from "react";
import "./BasicSlider.css";

class BasicSlider extends React.Component{

    state = {
        indexToShow: 0
    }

    
    getHelpers = () => {
        return {
            imgs: this.props.imgs,
            onClick: this.updateIndex,
            indexToShow: this.state.indexToShow,
        }
    }

    buildImages = ({Component}) => {
        return  <div className="imgContainer">
                    {this.props.imgs.map((img, index) => <Component key={img} className={this.state.indexToShow === index ? "show": ""} url={img}/>)}
                </div>
    }

    updateIndex = indexToShow => {
        this.setState({indexToShow})
    }

    render(){
        let { imgs } = this.props;

        return  <div className="BasicSlider">
                    {this.props.children({ 
                                            Images: this.buildImages,
                                            getHelpers: this.getHelpers, 
                                        })}
                </div>
    }

}

export default BasicSlider;