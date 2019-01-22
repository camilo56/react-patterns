import React from 'react';
import "./CompoundComponent.css"

class CompoundComponent extends React.Component{
    static Option = props => <button onMouseDown={e => props.optionSelected(props)}>{props.children}</button> 
    
    state = {};
    
    showOptions = () => {
        this.container.classList.add("showOptions")
    }
    
    hideOptions = () => {
        this.container.classList.remove("showOptions")
    }

    toggleOptions = event => {
        event.preventDefault();
        event.stopPropagation();
        this.container.classList.toggle("showOptions")
    }
    
    optionSelected = ({value, children, onChange}) => {
        if(!value){ value = children }
        
        this.setState({value}, () => onChange(this.state.value))
    }
    
    render(){
        let { defaultName = "Select", onChange } = this.props;
        let { value = defaultName } = this.state;
        
        return <div className="compoundComponent" onBlur={this.hideOptions} onClick={this.showOptions} ref={div => this.container = div}>
                    <button onClick={this.toggleOptions}>{value}</button>
                    {React.Children.map(this.props.children, child => React.cloneElement(child, 
                                                                                        {optionSelected: this.optionSelected, onChange}))}
                </div>
    }
}

export default CompoundComponent;