import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props)
        console.log('parent constructing');
        this.state = {
            value: 'testing'
        }
    }

    componentDidMount() {

        console.log('parent did mounted');
        setTimeout(() => {
            this.setState({
                value: 'oops'
            })
        }, 2000)
    }
    componentWillMount() {

        console.log('parent i am mounting')
    }
    shouldComponentUpdate(nextProps, nextState) {

        console.log('parent should update???')

        return true;
    }

    componentWillReceiveProps(nextProps) {

        console.log('parent will receive props')
    }

    componentWillUpdate() {
        console.log('parent will update')
    }

    componentDidUpdate() {
        console.log('parent did update')
    }
    render() {

        console.log('rendering...')
        return (
            <div>
                <h1>Parent</h1>
                <h1>{this.state.value}</h1>
                <Child name={this.state.value} />
            </div>
        )
    }
}