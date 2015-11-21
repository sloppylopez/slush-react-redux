import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainHeader from './MainHeader'
import MainBody from './MainBody'
import MainFooter from './MainFooter'

@connect()
export default
class HomePage extends Component {

    render() {
        return (
            <div>
                <MainHeader/>
                <MainBody/>
                <MainFooter/>
            </div>
        )
    }
}
