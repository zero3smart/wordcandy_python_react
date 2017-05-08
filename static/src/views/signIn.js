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

export default class SignIn extends Component {

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
                            <NavItem className="text-success"><Link to="/sign-up">Create account</Link></NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <h1 className="title">SWEET KEYWORDS FOR ECOMMERCE</h1>
                  </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} className="account-block">
                        <Panel>
                            <Form horizontal>
                                <p className="text-center">SIGN IN YOUR ACCOUNT</p>
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

                                <FormGroup>
                                    <Col md={12} className="text-center">
                                        <Button block bsStyle="success" onClick={this.signIn}>
                                            Sign in
                                        </Button>
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
}