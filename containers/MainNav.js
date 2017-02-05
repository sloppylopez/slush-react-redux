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
                        <NavItem eventKey={1} href="https://elephantseed.firebaseapp.com/">Elephant Seed</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
