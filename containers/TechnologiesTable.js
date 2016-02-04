import React, { Component } from 'react'

//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

//@connect()
export default
class TechnologiesTable extends Component {

    render() {

        return (
            <div className='row'>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='assets/images/protractor.png'
                             alt='Protractor' src='assets/images/protractor.png'/>

                        <div className='caption'><h3 >Protractor</h3>

                            <p >End to end test framework for AngularJS applications built on top
                                of
                                WebDriverJS.</p>

                            <p><a href='https://github.com/angular/protractor'
                                  href='https://github.com/angular/protractor'>https://github.com/angular/protractor</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right' src='assets/images/gulp.png'
                             alt='GulpJS'/>

                        <div className='caption'><h3 >GulpJS</h3>

                            <p >The streaming build system.</p>

                            <p><a href='http://gulpjs.com/' href='http://gulpjs.com/'>http://gulpjs.com/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/bootstrap.png'
                             alt='Bootstrap'/>

                        <div className='caption'><h3 >Bootstrap</h3>

                            <p >Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
                                mobile first projects on the web.</p>

                            <p><a href='http://getbootstrap.com/'>http://getbootstrap.com/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/ui-bootstrap.png'
                             alt='Angular UI Bootstrap'/>

                        <div className='caption'><h3 >Angular UI Bootstrap</h3>

                            <p >Bootstrap components written in pure AngularJS by the
                                AngularUI Team.</p>

                            <p><a
                                href='http://angular-ui.github.io/bootstrap/'>http://angular-ui.github.io/bootstrap/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/node-sass.png'
                             alt='Sass (Node)'/>

                        <div className='caption'><h3 >Sass (Node)</h3>

                            <p >Node.js binding to libsass, the C version of the
                                popular stylesheet preprocessor,
                                Sass.</p>

                            <p><a href='https://github.com/sass/node-sass'>https://github.com/sass/node-sass</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/browsersync.png'
                             alt='BrowserSync'/>

                        <div className='caption'><h3 >BrowserSync</h3>

                            <p >Time-saving synchronised browser testing.</p>

                            <p><a href='http://browsersync.io/'>http://browsersync.io/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/jasmine.png'
                             alt='Jasmine'/>

                        <div className='caption'><h3 >Jasmine</h3>

                            <p >Behavior-Driven JavaScript.</p>

                            <p><a href='http://jasmine.github.io/'>http://jasmine.github.io/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100' className='pull-right'
                             src='./assets/images/angular.png'
                             alt='AngularJS'/>

                        <div className='caption'><h3 >AngularJS</h3>

                            <p >HTML enhanced for web apps!</p>

                            <p><a href='https://angularjs.org/'>https://angularjs.org/</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4 ng-scope'>
                    <div className='thumbnail'>
                        <img width='100' height='100'
                             className='pull-right'
                             src='http://localhost:9090/assets/images/karma.png'
                             alt='Karma'/>

                        <div className='caption'><h3 >Karma</h3>

                            <p >Spectacular Test Runner for
                                JavaScript.</p>

                            <p><a href='http://karma-runner.github.io/'>http://karma-runner.github.io/</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
