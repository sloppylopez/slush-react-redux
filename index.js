//import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import main from 'stylesheets/main.css!css'
import BootstrapCss from 'bootstrap/css/bootstrap.css!css'
import FontAwesome from 'font-awesome/css/font-awesome.css!css'


//import { render } from 'react-dom'
import { Router, Route, IndexRoute, RouteHandler } from 'react-router'
import { browserHistory } from 'react-router'

//import createBrowserHistory from 'history/lib/createBrowserHistory'

//import { Provider } from 'react-redux'
//
//import configureStore from './store/configureStore'
import App from './containers/App'
import HomePage from './containers/HomePage'

//require('font-awesome/css/font-awesome.css');

//const history = browserHistory();
//const store = configureStore();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);
