import React from 'react';
import ReactDOM from 'react-dom';
import CompoundComponent from '../compoundComponent/CompoundComponent';
import {render, fireEvent, cleanup} from 'react-testing-library';

const Component = (optionsSelected, customEvent) => <CompoundComponent onChange={optionsSelected}>
                                                        <CompoundComponent.Option value="01">1</CompoundComponent.Option>
                                                        <CompoundComponent.Option value="02">2</CompoundComponent.Option>
                                                        <CompoundComponent.Option value="03">3</CompoundComponent.Option>
                                                        <CompoundComponent.Option>4</CompoundComponent.Option>
                                                        <CompoundComponent.Option value="custom" onClick={customEvent}>camilo diferrent</CompoundComponent.Option>
                                                    </CompoundComponent>

it('number of options', () => {
    const container = document.createElement('div'); 
    ReactDOM.render(<Component/>, container);
    expect(container.querySelector(".contOptions").childNodes.length).toBe(5)
})

it('text of childrens', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Component/>, container);
    let childrens = [...container.querySelector(".contOptions").childNodes].map(children => children.innerHTML)
    
    expect(childrens).toEqual(expect.arrayContaining([ '1', '2', '3', '4', 'camilo diferrent']))
})
