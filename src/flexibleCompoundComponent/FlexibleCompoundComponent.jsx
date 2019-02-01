import React from 'react';
import "./FlexibleCompoundComponent.css"

const OptionContext = React.createContext({
    optionSelected: () => {},
})

class FlexibleCompoundComponent extends React.Component{
    static Option = props => <OptionContext.Consumer>
                                {({value, optionSelected}) => {
                                    let className = value === props.children || value === props.value ? "selected": "";

                                    return <button className={className} onMouseDown={e => optionSelected(props)}>{props.children}</button> 
                                }}
                            </OptionContext.Consumer> 

    optionSelected = ({value, children, onClick = () => {}}) => {
        if(!value){ value = children }
        this.setState({value}, () => {this.props.onChange(this.state.value); onClick()})
    }

    state = {
        value: "",
        optionSelected: this.optionSelected
    };
    
    render(){
        return <div className="flexibleCompoundComponent" ref={div => this.firstItem = div}>
                    <OptionContext.Provider value={this.state}>
                        {this.props.children}
                    </OptionContext.Provider>
                </div>
    }
}

export default FlexibleCompoundComponent;