import React from 'react';
import "./TitleAndBody.css"

class TitleAndBody extends React.Component{

    state = {height: 0};
    
    open = () => {
        this.setState(state => ({height: state.height === this.info.scrollHeight ? 0: this.info.scrollHeight}),
                        () => this.props.onClick(this.props.id))
    }

    render(){
        let {height} = this.state;
        let {title, info} = this.props;

        return <div className="TitleAndBody">
                    <h3 onClick={this.open}>{title}</h3>
                    <p style={{height: `${height}px`}} ref={div => this.info = div}>{info}</p>
                </div>
    }
}

export default TitleAndBody;