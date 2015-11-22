import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MainNav from './MainNav'
import MainHeader from './MainHeader'
import MainBody from './MainBody'
import MainFooter from './MainFooter'

require('bootstrap/dist/css/bootstrap.css');
require('../stylesheets/main.scss');

@connect()
export default
class HomePage extends Component {

    render() {
        return (
            <div>
                <MainNav/>
                <MainHeader/>
                <MainBody/>
                <MainFooter/>
            </div>
        )
    }
}
