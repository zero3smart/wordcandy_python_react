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
    Panel
} from 'react-bootstrap';

import {Link, browserHistory} from 'react-router';
import React, {Component} from 'react';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.signIn = this.signIn.bind(this);
    }

    signIn(e) {
        browserHistory.push('/dashboard');
        e.preventDefault();
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
                            <NavItem className="text-success"><Link to="/sign-in">Login</Link></NavItem>
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
                            <Form horizontal>
                                <p className="text-center">SIGN UP CREATE YOUR ACCOUNT</p>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  md={12}>
                                        <FormControl type="email" placeholder="Email"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col md={12}>
                                        <FormControl type="password" placeholder="Password"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col md={12}>
                                        <FormControl type="password" placeholder="Password repeat"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={12} className="text-center">
                                        <Link to="/dashboard"><Button block bsStyle="success" onClick={this.signIn}>
                                            Create account
                                        </Button></Link>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Panel>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        );
    }
}import {
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
    Panel
} from 'react-bootstrap';

import {Link, browserHistory} from 'react-router';
import React, {Component} from 'react';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.signIn = this.signIn.bind(this);
    }

    signIn(e) {
        browserHistory.push('/dashboard');
        e.preventDefault();
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
                            <NavItem className="text-success"><Link to="/sign-in">Login</Link></NavItem>
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
                            <Form horizontal>
                                <p className="text-center">SIGN UP CREATE YOUR ACCOUNT</p>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col  md={12}>
                                        <FormControl type="email" placeholder="Email"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col md={12}>
                                        <FormControl type="password" placeholder="Password"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col md={12}>
                                        <FormControl type="password" placeholder="Password repeat"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={12} className="text-center">
                                        <Link to="/dashboard"><Button block bsStyle="secondary" onClick={this.signIn}>
                                            Create account
                                        </Button></Link>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <div className="login-redirect">
                              <Link to="/sign-in">Already have an account? <b>Login</b></Link>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        );
    }
}