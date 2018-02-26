//import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Toastr from 'toastr'
//Dont delete, they are needed even if they are not used

import {browserHistory, IndexRoute, Route, RouteHandler, Router} from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'


Toastr.warning('this website uses Cookies, please accept to continue reading', 'Achtung!',
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
