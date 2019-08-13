import React from 'react';
//import render from 'react-dom';
import App from './App';
import FormLogin from './Container/ReactForm/LoginForm'; 
import Sample from './Container/Sample/Sample';
import SampleRedux from './Container/SampleRedux/SampleRedux';
import Samplemobx from './Container/Samplemobx/Samplemobx';
import { Route, Switch } from 'react-router-dom';

const NavItem = props => {
    return (
        <div>
        <li className={props.name}>   <a href={props.path} >{props.give}</a></li>
        </div>
    );
}


const Check = props => {
    return (
        <p>{props.name}</p>
    );
}


class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = { person : "Before mount", isShow: false };
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("mounted");
            this.setState({person : "After mount", isShow: false});
        }, 3000
        );
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavItem path='/App' name='hello' give='App'></NavItem>
                    <NavItem path='/sample' name='test' give='sample'></NavItem>
                    <NavItem path='/login' name='test' give='Login'></NavItem>
                    <NavItem path='/Redux' name='test' give='Redux'></NavItem>
                    <NavItem path='/Mobx' name='test' give='Mobx'></NavItem>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/test">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/">Action</a>
                                <a class="dropdown-item" href="/">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="/">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </nav>
            {this.state.isShow?<App></App>:null}
            {this.state.isShow?<Check name={this.state.person}></Check>:null}
            <Switch>
            <Route path="/App" component={App} />
            <Route path="/sample" component={Sample} />
            <Route path="/login" component={FormLogin} />
            <Route path="/Redux" component={SampleRedux} />
            <Route path="/Mobx" component={Samplemobx} />
            </Switch>
            </div>
            
        );
    }
}


export default Header;