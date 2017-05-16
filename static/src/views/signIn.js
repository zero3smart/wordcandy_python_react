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

class Forms extends Component {
    componentDidMount() {
        $('form').validator();
    }

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorText: ''
        };
        this.signIn = this.signIn.bind(this);
    }

    signIn(e) {
        var _ = this;
        $('form').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {} else {
                let data = {};
                $('form').serializeArray().map(item => {
                    data[item.name] = item.value;
                });
                apiProfiles.signIn(data).then(function(response) {
                    switch (response.status) {
                        case 400:
                            for (var i = 0; i < response.data.non_field_errors.length; i++) {
                                var errorText = response.data.non_field_errors[i];
                            }
                            _.setState({error: true});
                            _.setState({errorText: errorText});
                            break;
                        case 200:
                            localStorage.setItem('key', response.key);
                            localStorage.setItem('username', data['username']);
                            browserHistory.push('/dashboard');
                            break;
                    }
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
                        <FormControl type="password" data-minlength="8" name="password" id="password" placeholder="Password must contain at least 8 characters" required/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={12} className="text-center"  style={{paddingBottom: '5px'}}>
                        <Button type="submit" block bsStyle="secondary" onClick={this.signIn}>
                            Login
                        </Button>
                    </Col>
                    <Col md={12} className="text-center">
                        {this.state.error
                            ? <p>
                              {this.state.errorText}
                              </p>
                            : null}
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default class SignIgn extends Component {

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
                                <Link to="/sign-up">Get Started</Link>
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
                            <p className="text-center">LOGIN IN YOUR ACCOUNT</p>
                            <Forms/>
                        </Panel>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        );
    }
}