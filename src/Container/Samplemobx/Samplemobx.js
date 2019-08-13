import {observable, autorun} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component} from 'react'
import { render } from 'react-dom';

var Ini = observable({
    name:'arun'
});

autorun(() => console.log(Ini.name));

class Samplemobx extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
        <div>{Ini.name}</div>
        </div>      
        );
    }
}

Ini.name = 'kumar';

export default observer(Samplemobx);