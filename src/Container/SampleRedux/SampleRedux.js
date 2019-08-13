import React, { Component } from 'react';
import store from './Store';

class SampleRedux extends Component {
    constructor(props) {
        super(props);
        store.dispatch({type: 'INC_COUNTER'});

    }
    render () {
        return (
            <div>
                <input type='text'></input>
                <button type='submit' name='submit'>Submit</button>
            </div>
        )
    }
}

export default SampleRedux;