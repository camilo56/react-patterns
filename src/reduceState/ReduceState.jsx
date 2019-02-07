import React from "react";
import "./ReduceState.css";
import Nav from "../generalComponents/nav/Nav"
import VideoYoutube from "../generalComponents/videoYoutube/VideoYoutube"

class ReduceState extends React.Component{

    state = {
        options: [
            {name: "Tap 1", content: <VideoYoutube srcSelected="https://www.youtube.com/embed/7sJOZ1lqgb8"/>},
            {name: "Tap 2 2", content: <VideoYoutube srcSelected="https://www.youtube.com/embed/GoF2LJ8BYsw"/>},
            {name: "Tap 3 3 3", content: <VideoYoutube srcSelected="https://www.youtube.com/embed/5CFzhEv4OTM"/>},
            {name: "Tap 4 4 4 4", content: <VideoYoutube srcSelected="https://www.youtube.com/embed/MOD5eb0d_Gg"/>}
        ],
        disable: 0,
    }

    stateManager = (state, changes) => {
        if(changes.indexSelected === this.state.disable ){
            return {...changes, indexSelected: state.indexSelected, pointer: state.pointer}
        }
        return changes
    }

    render(){
        let{disable, options} = this.state;
        
        return  <div>
                    <Nav stateReducer={this.stateManager} options={options} indexSelected={2} indexDisable={disable}/>
                </div>
    }

}

export default ReduceState;