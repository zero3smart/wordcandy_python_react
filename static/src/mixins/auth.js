import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

export default class MixinAuth extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!localStorage.getItem('key')) {
            browserHistory.push('/sign-up');
        }
    }
}