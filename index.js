//import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
//import BootstrapCss from 'bootstrap/css/bootstrap.css!css'

import { render } from 'react-dom'
import { Router, Route, IndexRoute, RouteHandler } from 'react-router'
import { hashHistory } from 'history'

import createBrowserHistory from 'history/lib/createBrowserHistory'

//import { Provider } from 'react-redux'
//
//import configureStore from './store/configureStore'
import App from './containers/App'
import HomePage from './containers/HomePage'

//require('font-awesome/scss/font-awesome.scss');

//const history = browserHistory();
//const store = configureStore();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);
