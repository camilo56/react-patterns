import React, { Component } from 'react';

import RenderProps from './renderProps/RenderProps';
import PropGetters from './propGetters/PropGetters';
import CompoundComponent from './compoundComponent/CompoundComponent';
import FlexibleCompoundComponent from './flexibleCompoundComponent/FlexibleCompoundComponent';
import HigherOrderComponents from './higherOrderComponents/HigherOrderComponents';

import VideoYoutube from "./generalComponents/videoYoutube/VideoYoutube.jsx";
import ItemYoutube from "./generalComponents/itemYoutube/ItemYoutube.jsx";
import TitleAndBody from "./generalComponents/TitleAndBody/TitleAndBody.jsx";

// import logo from './assets/logo.svg';
// import './App.css';

class App extends Component {
    state = {
        videos: [
            {name: "Cap 72", src: "https://www.youtube.com/embed/7sJOZ1lqgb8"},
            {name: "Cap 73", src: "https://www.youtube.com/embed/GoF2LJ8BYsw"},
            {name: "Cap 74", src: "https://www.youtube.com/embed/5CFzhEv4OTM"},
            {name: "Cap 75", src: "https://www.youtube.com/embed/MOD5eb0d_Gg"},
            {name: "Cap 76", src: "https://www.youtube.com/embed/duCsRHVAObA"},
        ],
        articles: [
            {id: "1", title: "Title 1", info: "Title 1 - info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat massa eget mauris placerat aliquet. Nullam rutrum justo sed facilisis interdum. Vestibulum ac dolor placerat ipsum iaculis lacinia. Vivamus in."},
            {id: "2", title: "Title 2", info: "Title 2 - info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat massa eget mauris placerat aliquet. Nullam rutrum justo sed facilisis interdum. Vestibulum ac dolor placerat ipsum iaculis lacinia. Vivamus in."},
            {id: "3", title: "Title 3", info: "Title 3 - info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat massa eget mauris placerat aliquet. Nullam rutrum justo sed facilisis interdum. Vestibulum ac dolor placerat ipsum iaculis lacinia. Vivamus in."},
            {id: "4", title: "Title 4", info: "Title 4 - info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat massa eget mauris placerat aliquet. Nullam rutrum justo sed facilisis interdum. Vestibulum ac dolor placerat ipsum iaculis lacinia. Vivamus in."},
            {id: "5", title: "Title 5", info: "Title 5 - info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat massa eget mauris placerat aliquet. Nullam rutrum justo sed facilisis interdum. Vestibulum ac dolor placerat ipsum iaculis lacinia. Vivamus in."},
        ]
    }
    render() {
        let WrapperHigherOrderComponents = props => <HigherOrderComponents {...props} data={this.state.articles} Content={TitleAndBody}/>
        
        return (
        <div className="App">
            <header className="App-header">
            <h1>React Patterns</h1>
            </header>
             <h2>CompoundComponent</h2>
                    <CompoundComponent onChange={value => console.log("option Selected", value)}>
                        <CompoundComponent.Option value="01">1</CompoundComponent.Option>
                        <CompoundComponent.Option value="02">2</CompoundComponent.Option>
                        <CompoundComponent.Option value="03">3</CompoundComponent.Option>
                        <CompoundComponent.Option>4</CompoundComponent.Option>
                        <CompoundComponent.Option value="custom" onClick={e => alert("Different Click")}>diferrent</CompoundComponent.Option>
                    </CompoundComponent>
                    
                <br/><hr/>

                <h2>Flexible CompoundComponent</h2>
                <FlexibleCompoundComponent onChange={value => console.log("option Selected", value)}>
                    <FlexibleCompoundComponent.Option value="01">1</FlexibleCompoundComponent.Option>
                    <FlexibleCompoundComponent.Option value="02">2</FlexibleCompoundComponent.Option>
                    <FlexibleCompoundComponent.Option value="03">3</FlexibleCompoundComponent.Option>
                    <FlexibleCompoundComponent.Option>40</FlexibleCompoundComponent.Option>
                    <FlexibleCompoundComponent.Option value="custom" onClick={e => alert("Different Click")}>diferrent</FlexibleCompoundComponent.Option>
                </FlexibleCompoundComponent>
                
                <br/><hr/>
                
                <h2>RenderProps</h2>
                <RenderProps img="https://static.myfigurecollection.net/pics/figure/large/205332.jpg">
                    {(data) =>
                        <React.Fragment>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </React.Fragment>
                    }
                </RenderProps>
                
                <br/><hr/> 
        
                <h2>Prop Getters</h2>
                <PropGetters>
                    {({getHelpers}) =>
                        <React.Fragment>
                            <VideoYoutube {...getHelpers()}/>
                            {this.state.videos.map(item => <ItemYoutube key={item.name} {...item} {...getHelpers()}/>)}
                        </React.Fragment>
                    }
                </PropGetters>
                
                <br/><hr/>

                <h2>Higher Order Components</h2>
                <WrapperHigherOrderComponents/>
                
                <br/><hr/>
        </div>
        );
    }
}

export default App;
