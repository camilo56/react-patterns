import React from 'react';
import "./HigherOrderComponents.css"

class HigherOrderComponents  extends React.Component{

    state = {
        itemSelected: null
    }

    selectItem = itemSelected => {
        this.setState({itemSelected})
    }

    render(){
        let {Content, data} = this.props;

        return <div className="HigherOrderComponents">
                    {data.map(item => <Content key={item.id} {...item} onClick={this.selectItem} itemSelected={this.state.itemSelected}/>)}
                </div>
    }
}

export default HigherOrderComponents ;