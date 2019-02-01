import React from 'react';
import "./VideoYoutube.css"

class VideoYoutube extends React.Component{

    state = {};
    
    render(){
        const { srcSelected = "https://www.youtube.com/embed/7sJOZ1lqgb8" } = this.props;

        return <div className="VideoYoutube">
                    <iframe className="video" src={srcSelected}></iframe>
                </div>
    }
}

export default VideoYoutube;