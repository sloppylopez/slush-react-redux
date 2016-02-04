import React, { Component } from 'react'

//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

//@connect()
export default
class MainFooter extends Component {

    render() {
        return (
            <footer className='footer-distributed'>

                <div className='footer-left'>

                    <h3>ڪloπ<span>Lopez</span></h3>

                    <p className='footer-links'>
                        <a href='/#/blog'>Blog</a>
                        <a ng-show='authData' href='/#/addpost'>· Add Post</a>
                        ·
                        <a href='/#/rssfeeder'>Rss Viewer</a>
                        ·
                        <a href='/#/authwithpassword'>Login</a>
                        ·
                        <a href='/#/createuser'>Sign up</a>

                        <a ng-show='authData' href='/#/logout'>· Logout</a>
                    </p>

                    <p className='footer-company-name'>If you came to learn how to make fire, I'ma make it burn.</p>
                </div>

                <div className='footer-center'>

                    <div>
                        <p><a href='mailto:sloppy@sloppylopez.com'>sloppy<span
                            className='glyphicon glyphicon-fire'></span>sloppylopez.com</a>
                        </p>
                    </div>

                </div>

                <div className='footer-right'>
                    <p className='footer-company-about'>
                        <span>About me</span>
                        Full Stack Developer since 2008,<br/> VBlogger and Futurama enthusiast.<br/>Smiling as they
                        laugh
                    </p>

                    <div className='footer-icons'>

                        <a href='https://twitter.com/sloppylopez' data-show-count='false'><i
                            className='fa fa-twitter'></i></a>
                        <a href='http://es.linkedin.com/in/sloppylopez'><i className='fa fa-linkedin'></i></a>
                        <a href='http://sloppylopez.github.io/angulpar'><i className='fa fa-github'></i></a>

                    </div>

                </div>

            </footer>

        )
    }
}
