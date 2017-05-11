import {
    Grid,
    Row,
    Col,
    Form,
    FormGroup,
    Button,
    ControlLabel,
    FormControl,
    Navbar,
    Nav,
    NavItem,
    Panel,
    Alert
} from 'react-bootstrap';

import {Link, browserHistory} from 'react-router';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {apiProfiles} from '../api/profiles';
import axios from 'axios';

class Forms extends Component {
    componentDidMount() {
        $('form').validator();
    }

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        this.signUp = this.signUp.bind(this);
    }

    signUp(e) {
        var _ = this;
        $('form').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {} else {
                let data = {};
                $('form').serializeArray().map(item => {
                    data[item.name] = item.value;
                });
                apiProfiles.signUp(data).then((response) => {
                    if (response.hasOwnProperty('key')) {
                        localStorage.setItem('key', response.key);
                        localStorage.setItem('username', data['username']);
                        browserHistory.push('/dashboard');
                    } else {
                        _.setState({error: true});
                    }
                    return response;
                }).then((json) => {
                    _.setState({error: true});
                    return json;
                });
            }
            e.preventDefault();
        });
    }

    render() {
        return (
            <Form horizontal data-toggle="validator" role="form">

                <FormGroup>
                    <Col md={12}>
                        <FormControl type="text" name="username" id="username" placeholder="Username" required/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={12}>
                        <FormControl type="email" name="email" id="email" placeholder="Email" required/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={12}>
                        <FormControl type="password" data-minlength="8" name="password1" id="password1" placeholder="Password must contain at least 8 characters" required/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={12}>
                        <FormControl type="password" data-minlength="8" name="password2" id="password2" placeholder="Password repeat" data-match="#password1" required/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={12} className="text-center">
                        <Button type="submit" block bsStyle="secondary" onClick={this.signUp}>
                            Create account
                        </Button>
                    </Col>
                    {this.state.error == false
                        ? <Col md={12} className="login-redirect">
                                <Link to="/sign-in">Already have an account?{' '}
                                    <b>Login</b>
                                </Link>
                            </Col>
                        : null}
                    {this.state.error
                        ? <Col md={12} className="text-center">
                                <p>
                                    <Alert bsStyle="error">
                                        <p>Please enter a stronger password.</p>
                                    </Alert>
                                </p>

                            </Col>
                        : null}
                </FormGroup>
            </Form>
        )
    }
}

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grid className="login-page" fluid={true}>
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">WORDCANDY.IO</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem className="text-success">
                                <Link to="/sign-in">Login</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className="title">SWEET KEYWORDS FOR ECOMMERCE</h1>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                        <p>Creativity is the crux of the unwitting. You got great product, but can’t make it rain with your keywords?</p>
                        <p>Organization, imagination, strategy….it’s overwhelming. Not anymore. Welcome to your salvation.</p>
                        <p>A complete eCommerce keyword dashboard for your Merch designs and beyond.</p>
                        <p>Strategy and creativity all rolled into one solution to help you 10X your sales!</p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} className="account-block">
                        <Panel>
                            <p className="text-center">SIGN UP CREATE YOUR ACCOUNT</p>
                            <Forms/>
                        </Panel>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        );
    }
}