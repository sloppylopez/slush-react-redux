import Jquery from 'jquery'
import React, { Component } from 'react'
import { render } from 'react-dom'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default
class MainNav extends Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://elephantseed.firebaseapp.com">Elephant Seed</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
//import React, { Component } from 'react'
//
////import { bindActionCreators } from 'redux'
////import { connect } from 'react-redux'
//
////@connect()
//export default
//class MainNav extends Component {
//
//    render() {
//
//        return (
//            <nav className='navbar navbar-default navbar-custom navbar-fixed-top navbar-custom'>
//                <div className='container-fluid'>
//                    <div className='navbar-header page-scroll'>
//                        <button type='button' className='navbar-toggle' data-toggle='collapse'
//                                data-target='#bs-example-navbar-collapse-1'>
//                            <span className='sr-only'>Toggle navigation</span>
//                            <span className='icon-bar'></span>
//                            <span className='icon-bar'></span>
//                            <span className='icon-bar'></span>
//                        </button>
//                    </div>
//                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
//                        <ul className='nav navbar-nav navbar-right'>
//                            <li><a href='/#/blog'>Blog</a></li>
//                            <li><a href='/#/authwithpassword'>Login</a></li>
//                            <li><a href='/#/createuser'>Sign Up</a></li>
//                            <li><a href='/#/resetpassword'>Reset Password</a></li>
//                            <li><a ng-show='authData' href='/#/logout'>Logout</a></li>
//                        </ul>
//                    </div>
//                </div>
//            </nav>
//        )
//    }
//
//}
