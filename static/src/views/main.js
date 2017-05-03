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

export default class Main extends Component {

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
                                <a href="#">WORDCANDY.IO</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem href="#" className="text-success">Login</NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className="text-primary">SWEET KEYWORDS FOR ECOMERCE</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p class="text-center">Creativity is the crux of the unwitting. You got great product, but can’t make it rain with your keywords? Organization, imagination, strategy….it’s overwhelming. Not anymore. Welcome to your salvation. A complete eCommerce keyword dashboard for your Merch designs and beyond. Strategy and creativity all rolled into one solution to help you 10X your sales!</p>
                    </Col>
                    <Col md={3}></Col>
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
                                        <Button block bsStyle="success" onClick={this.signIn}>
                                            Create account
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