import React from 'react';
import "./PropGetters.css"

class PropGetters extends React.Component{

    state = {
        srcSelected: undefined
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
        return <div className="propGetters" >
                    {this.props.children({ getHelpers: this.getHelpers})}
                </div>
    }
}

export default PropGetters;