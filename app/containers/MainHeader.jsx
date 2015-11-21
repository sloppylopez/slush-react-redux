import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect()
export default
class MainHeader extends Component {

    render() {
        return (
            <header className='intro-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                            <div className='site-heading'>
                                <h1>Slop
                                    Bloggy
                                    Blog</h1>
                                <hr className='small'>
                                    <span className='subheading'>Cos ain't no such things as halfway crooks</span>
                                    <toast></toast>
                                </hr>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
