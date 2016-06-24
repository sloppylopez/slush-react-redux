//import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import ToastrCss from 'stylesheets/toastr.css!css'
import Toastr from 'toastr'
//Dont delete, they are needed even if they are not used
import main from 'stylesheets/main.css!css'
import BootstrapCss from 'bootstrap/css/bootstrap.css!css'
import FontAwesome from 'font-awesome/css/font-awesome.css!css'

import { Router, Route, IndexRoute, RouteHandler, browserHistory } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'


Toastr.warning('this website uses Cookies, please accept to continue reading', 'Sloppy Lopez',
    {
        'timeOut': 5000000,
        'closeButton': true
    });

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);
