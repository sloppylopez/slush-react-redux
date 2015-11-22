import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect()
export default
class MainBody extends Component {

    render() {
        return (
            <div className='container'>
                <article>
                    <div>
                        <h2>Javascript is the new Apache</h2>

                        <div>
                            <p>
                                Well well, I'm finally back, I was stuck because of the holiday in Spain and problems
                                I faced during the migration to <a
                                href='http://ant.apache.org/'>Gulp</a> :_)
                            </p>

                            <p>
                                It's funny what a Back-End developer like thyself can do nowadays with this <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> frenzy we are living
                                lately.
                                I remember in ye olde times with the old good 1.6 JDK running the 'war' with <a
                                href='http://ant.apache.org/'>Apache Ant</a> tasks,
                                going for a coffee and after a fair amount of minutes having the web in your local up
                                and
                                running.
                                <br></br>
                                Your 'perfectly' object oriented model is sent to the <a
                                href='https://en.wikipedia.org/wiki/JavaServer_Pages'>Jsp</a> and gets rendered with
                                'Jsp-esque'
                                markups, eventually, you will use something called <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> to capture 1 click event
                                or
                                make AJAX calls for sending data to the server, those were the days where you used to
                                write
                                in your CV that you knew <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a>.
                                <br></br>
                                But your life can flip in a matter of seconds...
                                One day you wake up in the morning but you can't help yourself
                                tasting the flavour of <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> while washing your teeth,
                                all of a sudden you see people
                                speaking about <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> inside the office.
                                <br></br>
                                You run terrified towards your desk to find that <a
                                href='https://www.jetbrains.com/idea/'>Intellij</a> now is called <a
                                href='https://www.jetbrains.com/webstorm/'>Webstorm</a>,
                                <a
                                    href='http://www.apache.org/'>Apache</a> is <a
                                href='https://www.nginx.com/'>Nginx</a> and <a
                                href='http://tomcat.apache.org/'>Apache Tomcat</a> is known by the name of <a
                                href='https://nodejs.org/en/'>NodeJS</a>,
                                It's too late when you start to panic because <a
                                href='https://maven.apache.org/'>Apache Maven</a> has turned into <a
                                href='https://www.npmjs.com/'>Npm</a>, <a
                                href='https://en.wikipedia.org/wiki/Jspx'>Jspx</a> is 'Say what?', <a
                                href='https://spring.io/'>Spring</a> somehow
                                is <a
                                href='https://angularjs.org/'>AngularJS</a> but also <a
                                href='https://www.mysql.com/'>MySql</a> becomes <a
                                href='https://www.mongodb.org/'>Mongo</a> and so forth.
                                <br></br>
                                Finally <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> meets Server Side!, how
                                did I get here? I am not surprised they decided to call this stack <a
                                href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)'>MEAN</a>.
                                <br></br>
                                Since you can't fight back you decide to unite them and discover marvelous
                                things like for example that I can do the same as before! Yuhuuu, what else?.
                                <br></br>
                                Asynchrony 4 all!, Ok, <a
                                href='https://java.com/en/download/'>Java</a> multi-threading complexity problem solved,
                                what else?.<br></br>
                                Ludicrous speed builds, niceee (Problem solved in <a
                                href='https://java.com/en/download/'>Java</a> today with <a
                                href='https://buckbuild.com/'>Buck</a> so, meh).<br></br>
                                Run the same code language across the whole app, I'll buy that.
                                <br></br>
                                Then you have this entire eco-system of FOSS Js libraries supported by the community
                                that work every now and then which let you solve the problem of optimizing static
                                resources client side with a <a
                                    href='http://gruntjs.com/'>Grunt</a> vs <a
                                href='http://gulpjs.com/'>Gulp</a> kind of dichotomy if it weren't for <a
                                href='http://broccolijs.com/'>Broccoli</a> or <a
                                href='http://brunch.io/'>Brunch</a> or <a
                                href='http://coffeescript.org/documentation/docs/cake.html'>Cake</a> and
                                whatnot.<br></br>
                                Eventually you are forced to choose, learn, test and integrate
                                all this bunch of tools just to put a website online with 5-10 views and 2-3
                                payment methods in most cases.
                                <br></br>
                                I though well, I hope we are not sacrificing proper modelling...
                                Object modelling? you write 1 input markup using ng-model in <a
                                href='https://angularjs.org/'>AngularJS</a> and it's in the model per se, this
                                by all means makes really difficult to keep the discipline we had back in the day
                                discussing
                                15 minutes about why we need an extra attribute in this object,
                                as instead the model is the Wild West.
                                <br></br>
                                No cowboy in your team knows exactly how many fields
                                it has or what's going on inside of it, seems rather frustrating because
                                it's part of the bargain, some might say it's the charm of it, like having to chose
                                between:
                                <br></br>
                                <br></br>
                                (naming few of them)
                                <br></br>
                                <br></br>
                                <a
                                    href='https://angularjs.org/'>AngularJS</a> vs <a
                                href='https://facebook.github.io/react/'>React</a>
                                <br></br>
                                <a
                                    href='http://gruntjs.com/'>Grunt</a> vs <a
                                href='http://gulpjs.com/'>Gulp</a> vs <a
                                href='http://broccolijs.com/'>Broccoli</a> vs <a
                                href='http://brunch.io/'>Brunch</a> vs <a
                                href='http://coffeescript.org/documentation/docs/cake.html'>Cake</a>
                                <br></br>
                                <a
                                    href='http://coffeescript.org/'>CoffeeScript</a> vs <a
                                href='http://www.typescriptlang.org/'>TypeScript</a> vs <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a>
                                <br></br>
                                <a
                                    href='https://nodejs.org/en/'>NodeJS</a> vs <a
                                href='https://iojs.org/en/'>IO.js</a>
                                <br></br>
                                <a
                                    href='https://mochajs.org/'>Mocha</a> vs <a
                                href='http://jasmine.github.io/'>Jasmine</a>
                                <br></br>
                                <a
                                    href='http://handlebarsjs.com/'>Handlebars</a> vs <a
                                href='http://jade-lang.com/'>Jade</a>
                                <br></br>

                                In a deeper level of granularity:
                                <br></br>
                                <a
                                    href='http://expressjs.com/'>Express</a> vs <a
                                href='http://hapijs.com/'>Hapi</a>
                                <br></br>
                                <a
                                    href='https://www.npmjs.com/package/request'>Request</a> vs <a
                                href='https://visionmedia.github.io/superagent/'>Superagent</a>
                                <br></br>
                                <a
                                    href='http://underscorejs.org/'>Underscore</a> vs <a
                                href='https://lodash.com/'>Lodash</a>
                                <br></br>
                                <a
                                    href='http://chaijs.com/'>Chai</a> vs <a
                                href='https://shouldjs.github.io/'>Should</a>
                                <br></br>
                                <a
                                    href='http://requirejs.org/'>RequireJS</a>
                                vs <a
                                href='https://webpack.github.io/'>Webpack</a> vs
                                <a
                                    href='http://browserify.org/'>Browserify</a>
                                <br></br>
                                <a
                                    href='https://github.com/petkaantonov/bluebird'>Bluebird</a> vs <a
                                href='https://www.npmjs.com/package/q'>Q</a>
                                <br></br>
                                <br></br>
                                As you can see the permutations of this elements leads us to 100 trillion different
                                collars to put in our 'branch new dawg', and even though they say 'Variety is the spice
                                of life' I would suggest:
                                <br></br>
                                'Guys... why don't you stop rowing in different directions for a second, sit together,
                                have
                                few talks and decide whether it's the most convenient way of doing things for the most
                                common tasks across the dev/release cycle and try to
                                standardize few things to start with?'.<br></br>
                                <br></br>Having said that it seems for some strange reason <a
                                href='https://en.wikipedia.org/wiki/JavaScript'>Javascript</a> is getting sexy.
                            </p>
                            <footer><p className='pink'><b>ڪ.</b></p></footer>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>Click &amp; Live, Bang!</h2>

                        <div>
                            <p>
                                This is the brand new project I am working on lately, started on 23/04/2015, that's 9
                                weeks from today,
                                it is entirely developed in my spare time, as usual.

                            </p>

                            <p>
                                It all began with this <a
                                href='http://thepracticalsysadmin.com/running-elk-on-docker/'>article</a>.<br></br>
                                Was really exciting to see what <a href='https://www.docker.com/'>Docker</a> is able to
                                do, ELK stack was
                                quick
                                and easy to build following the tutorial, but soon I though maybe we could do something
                                interesting with the
                                <a
                                    href='https://www.elastic.co/'>Elastic Search</a>.<br></br>
                                So taking some random but useful data, in this case RSS news to persist on the Elastic
                                Search, gave me the
                                need
                                for a Client/Server scenario, therefore it came the <a href='https://angularjs.org/'>AngularJS</a> client
                                and the <a href='https://nodejs.org/'>NodeJS</a> API to communicate the back-end
                                docker-based virtual
                                machines
                                with
                                the SPA <a
                                href='https://angularjs.org/'>AngularJS</a> web client.
                            </p>

                            <p>
                                At this point it would be nice if we could automate deployments and test coverage
                                reports, I used to
                                have a website online the last 3 years, it was completely unpleasant to maintain the
                                dev/release cycle
                                adding
                                new features to the website and making releases in my spare time, including testing
                                after the release.

                            </p>

                            <p>
                                I promised <a href='http://es.linkedin.com/in/sloppylopez'>myself</a> the next project
                                must have a CI-CD
                                cycle, it was very easy to achieve using the
                                wonders of <a href='https://travis-ci.org/sloppylopez/angulpar'>Travis</a> mixed up with <a href='https://www.firebase.com/'>Firebase</a> <a href='http://en.wikipedia.org/wiki/Mobile_Backend_as_a_service'>BaaS</a>
                                features.<br></br>
                                If we include <a href='https://github.com/sloppylopez'>Github</a> in the process, we
                                have
                                version control
                                in a powerful combination that removes tons of boilerplate work and process failures in
                                all the phases
                                of the dev/release cycle.
                            </p>

                            <p>
                                If we add 100% unit test coverage and e2e testing to the mix, topped up with <a
                                href='https://www.npmjs.com/package/istanbul'>Istambul</a> test coverage <a
                                href='https://codeclimate.com/github/sloppylopez/angulpar/coverage'>reports</a> and <a href='https://codeclimate.com/github/sloppylopez/angulpar'>Code Climate</a> quality
                                checks, we find ourselves with a project resistant to human mistakes
                                across the whole cycle of dev/release.

                            </p>

                            <p>
                                The project is measurable, paired with <a
                                href='http://www.google.com/analytics/ce/mws/?utm_expid=71218119-7.lBgmrTO8R3uEDwsxNxa_Nw.1&utm_referrer=https%3A%2F%2Fwww.google.co.uk%2F'>Google
                                Analytics</a> gives the interesting possibility of measuring
                                the business value added for that feature, in that particular pull request.
                                We can measure how affects the performance of the web with tools like <a
                                href='https://gtmetrix.com/reports/sloppylopez.com/MDmkiX0B'>GTmetrix</a> and how
                                affects the <a href='https://codeclimate.com/github/sloppylopez/angulpar'>quality</a> of
                                code.<br></br>
                                if the pull
                                request diminishes the quality, the deployment will not happen and Travis will
                                automatically generate a
                                report.
                            </p>

                            <p>
                                After achieving this milestone we can focus on just adding business value to our
                                project,
                                that's <a href='http://en.wikipedia.org/wiki/Agile_management'>Agile</a>.<br></br>
                                We built a bare bones seed, with the minimum number of features to make the whole stack
                                work,
                                which also is ready for future growth and unavoidable human failures.<br></br>
                                We also have a clear and well defined process that anyone can follow and is documented,
                                idempotent,
                                automated and generates reports out-of-the-box.
                            </p>

                            <p>
                                This technologies offer corporations the chance to mitigate the need of certain roles
                                and processes,
                                they put a 'start-up' approach over the table since all the members of the team are
                                involved
                                in the dev/release cycle.

                            </p>

                            <p>
                                Figures like 'Release Manager' as for example become less relevant in the process, the
                                testing phase of
                                the cycle gets partially released of stress as well, in a big corporation this can be a
                                fair amount of
                                money.

                            </p>

                            <p>
                                The funny thing is that it possibly took Travis less time to verify if this website
                                works, send a
                                report to Code Climate and deploy the latest code in Firebase than it took you to read
                                this brief
                                introduction
                                to this humble project.
                            </p>
                            <footer><p className='pink'><b>ڪ.</b></p></footer>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
