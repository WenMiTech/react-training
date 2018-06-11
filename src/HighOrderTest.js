import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { log } from 'core-js';

// function chaining(...fns) {
//     return function (...args) { // eslint-disable-line
//         // eslint-disable-line
//         for (let i = 0; i < fns.length; i++) {
//             if (fns[i] && typeof fns[i] === 'function') {
//                 console.log(this)
//                 fns[i].apply(this, args);
//             }
//         }
//     };
// }
// function a() {
//     console.log('a');

// }
// function b() {
//     console.log('b');

// }
// const c = chaining(a, b);

// console.log(chaining(a, b));
// console.log(c());


const contains = (container, child) => {
    while (child) {
        if (child == container) {
            return true;
        }
        child = child.parentNode;
    }
    return false;
}
export default class HighOrderTest extends Component {

    componentDidMount() {


    }
    render() {
        const NewComponent = createComponent(PlainComponent);

        return (
            <div >
                <PlainComponent welcome="plain" />
                <NewComponent welcome="hoc" newProps="newProps" />
            </div>
        )
    }
}

const createComponent = (WrapComponent) => {
    return class NewComponent extends Component {
        render() {
            console.log(this.props)
            return (<WrapComponent {...this.props}></WrapComponent>)
        }
    }
}

class PlainComponent extends Component {
    render() {
        return (
            <div >
                <h1>plain component</h1>
                <h2>{this.props.welcome}</h2>
            </div>
        )
    }
}