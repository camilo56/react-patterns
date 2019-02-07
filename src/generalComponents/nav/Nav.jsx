import React from "react";
import OptionNav from "../optionNav/OptionNav"
import "./Nav.css";

class Nav extends React.Component{

    state = {}

    componentDidMount(){
        let item = document.querySelector("[data-selected=true]");
        this.internalSetState({indexSelected: this.props.indexSelected, pointer: this.movePointer(item, this.container)})
    }
    
    onClick = (e, index) => {
        this.internalSetState({indexSelected: index, pointer: this.movePointer(e.target, this.container)})
    }
    
    internalSetState = (changes, callback) => {
        this.setState(state => {
          const changesObject = typeof changes === 'function' ? changes(state) : changes

          const reducedChanges = this.props.stateReducer(state, changesObject) || {}
    
          return Object.keys(reducedChanges).length ? reducedChanges : null
        }, callback)
    }

    movePointer(elemt, container){
        if(!elemt){ return {}}
        return {
                width: elemt.clientWidth,
                positonX: elemt.getBoundingClientRect().x - container.getBoundingClientRect().x
            }
    }

    render(){
        let {indexDisable = -1, indexSelected = 0, options = []} = this.props;
        let {pointer: {positonX, width} = {positonX: 0}} = this.state;

        if(indexSelected >= options.length){
            indexSelected = options.length - 1;
        }

        return  <div className="contNav">
                    <nav ref={nav => this.container = nav}>        
                        {options.map((item, index) => <OptionNav key={item.name} {...item} 
                                                            index={index} 
                                                            indexSelected={indexSelected} 
                                                            indexDisable={indexDisable} 
                                                            onClick={e => this.onClick(e, index)}/>
                        )}
                    </nav>
                    <div style={{transform: `translateX(${positonX}px)`, width: `${width}px`}} className="pointer" ref={div => this.pointer = div}></div>
                </div>
                    
    }

}

export default Nav;