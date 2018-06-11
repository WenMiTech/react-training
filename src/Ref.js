import React, { Component } from 'react';
import ReactDom from 'react-dom';

const contains = (container, child) => {
    while (child) {
        if (child == container) {
            return true;
        }
        child = child.parentNode;
    }
    return false;
}
export default class Ref extends Component {

    componentDidMount() {
        console.log(this.div);
        console.log(this.wel);
        console.log(ReactDom.findDOMNode(this.wel))
        const child = ReactDom.findDOMNode(this.wel);
        const isContained = contains(this.div, child);
        console.log(isContained);

    }
    render() {

        console.log('rendering...')
        return (
            <div ref={div => { this.div = div }}>
                <h1>Ref</h1>
                <RefComponent ref={wel => { this.wel = wel }} welcome="hellow" />
            </div>
        )
    }
}

class RefComponent extends Component {
    render() {
        return (
            <div >
                <h1>Ref component</h1>
                <h2>{this.props.welcome}</h2>
            </div>
        )
    }
}