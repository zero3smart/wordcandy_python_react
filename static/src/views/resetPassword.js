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
import Loader from 'react-loader';

import {apiProfiles} from '../api/profiles';

class Forms extends Component {
    componentDidMount() {
        $('#reset').validator();
    }

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            error: false,
            errorText: '',
            loaded: true
        };
        this.saveMyPassword = this.saveMyPassword.bind(this);
    }

    saveMyPassword(e) {
        var _ = this;
        $('#reset').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {} else {
                let data = {};
                $('#reset').serializeArray().map(item => {
                    data[item.name] = item.value;
                });
                data['uid'] = $('#uid').val();
                data['token'] = $('#token').val();
                _.setState({loaded: false});
                apiProfiles.resetConfirm(data).then(function(response) {
                    switch (response.status) {
                        case 400:
                            var errorText = '';
                            Object.keys(response.data).forEach(function(item) {
                                errorText = response.data[item]
                            });
                            _.setState({errorText: errorText});
                            _.setState({error: true});
                            break;
                        case 200:
                            _.setState({done: true});
                            break;
                    }
                    _.setState({loaded: true});
                });
            }
            e.preventDefault();
        });
    }

    render() {
        return (
            <Panel>
                {this.state.done == false
                    ? <div>
                            <p className="text-center">PASSWORD RESET</p>
                            <Form horizontal id="reset" data-toggle="validator" role="form">
                                <FormGroup>
                                    <Col md={12}>
                                        <FormControl type="password" data-minlength="8" name="new_password1" id="password1" placeholder="New password must contain at least 8 characters" required/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={12}>
                                        <FormControl type="password" data-minlength="8" name="new_password2" id="password2" placeholder="New password repeat" data-match="#password1" required/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={12} className="text-center" style={{
                                        paddingBottom: '5px'
                                    }}>
                                        <Loader loaded={this.state.loaded}>
                                            <Button type="submit" block bsStyle="secondary" onClick={this.saveMyPassword}>
                                                Save My Password
                                            </Button>
                                        </Loader>
                                    </Col>
                                    {this.state.error
                                        ? <Col md={12} className="text-center error-text">
                                                <p>
                                                    <i className="icon ion-android-alert"></i>{this.state.errorText}
                                                </p>
                                            </Col>
                                        : null}
                                </FormGroup>
                            </Form>
                        </div>
                    : null}
                {this.state.done
                    ? <div className="text-center done">
                            <p>You've successfully registered.</p>
                            <p>Enjoy new opportunities with WordCandy!</p>
                            <p>
                                <Link className="btn-success btn" to="/sign-in">
                                  Please login
                                </Link>
                            </p>
                        </div>
                    : null}
            </Panel>
        )
    }
}

export default class ResetPassword extends Component {

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
                        <Forms/>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        );
    }
}