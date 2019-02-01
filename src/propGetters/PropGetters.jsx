import React from 'react';
import "./PropGetters.css"

class PropGetters extends React.Component{

    state = {
        srcSelected: null
    }

    getHelpers = () => {
        return {
            onClick: this.itemSelected,
            srcSelected: this.state.srcSelected,
        }
    }
    
    itemSelected = srcSelected => {
        this.setState({srcSelected});
    }

    render(){
        console.log("render PropGetters", this.state)
        return <div className="propGetters" >
                    {this.props.children({ getHelpers: this.getHelpers})}
                </div>
    }
}

export default PropGetters;