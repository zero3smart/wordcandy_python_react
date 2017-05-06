import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import SignUp from './views/signUp';
import SignIn from './views/signIn';
import Dashboard from './views/dashboard';
import Landing from './views/landing';

function run() {
    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Landing}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
        </Router>
    ), document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}