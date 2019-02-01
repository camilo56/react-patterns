import React from 'react';
import "./RenderProps.css"

class RenderProps extends React.Component{

    state = {
        title: "hajime no ippo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque feugiat purus, sit amet gravida libero ornare in. Maecenas ultricies."
    };
    
    render(){
        return <div className="renderProps" >
                    <img src={this.props.img}/>
                    {this.props.children(this.state)}
                </div>
    }
}

export default RenderProps;