import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect()
export default
class MainNav extends Component {

    render() {
        return (
            <nav className='navbar navbar-default navbar-custom navbar-fixed-top navbar-custom'>
                <div className='container-fluid'>
                    <div className='navbar-header page-scroll'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse'
                                data-target='#bs-example-navbar-collapse-1'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                    </div>
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a ng-href='/#/blog'>Blog</a></li>
                            <li><a ng-href='/#/authwithpassword'>Login</a></li>
                            <li><a ng-href='/#/createuser'>Sign Up</a></li>
                            <li><a ng-href='/#/resetpassword'>Reset Password</a></li>
                            <li><a ng-show='authData' ng-href='/#/logout'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
