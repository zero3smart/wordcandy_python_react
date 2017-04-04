import {
    Grid,
    Row,
    Col,
    Form,
    FormGroup,
    Button,
    ControlLabel,
    FormControl
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
            <Grid>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <br/>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password"/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                              <Col smOffset={2} sm={10}>
                                  <p><a href="#">Reset password</a></p>
                              </Col>
                                <Col smOffset={2} sm={10} className="text-center">
                                    <Button onClick={this.signIn}>
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Grid>
        );
    }
}
