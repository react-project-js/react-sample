import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom';

import Header from './Header';
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('app-root'));
registerServiceWorker();