import React, { Component } from 'react';


export default class Child extends Component {

    constructor(props) {
        super(props)
        console.log('child constructing');
        this.state = {
            value: 'i am a child component'
        }
    }

    componentDidMount() {

        console.log('child did mounted');
        // setTimeout(() => {
        //     this.setState({
        //         value: 'oops'
        //     })
        // }, 2000)
    }
    componentWillMount() {

        console.log('child  i am mounting')
    }
    shouldComponentUpdate(nextProps, nextState) {

        console.log('child  should update???')

        return true;
    }

    componentWillReceiveProps(nextProps) {

        console.log('child will receive props')
    }
    componentWillUpdate() {
        console.log('child will update')
    }

    componentDidUpdate() {
        console.log('child did update')
    }
    render() {

        console.log('child rendering...')
        return (
            <div>
                <h1>Child</h1>
                <h1>{this.state.value}</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}