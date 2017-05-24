import React, {Component} from 'react';
import {Modal, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Loader from 'react-loader';

import {apiProfiles} from '../api/profiles';

export default class ModalForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forgetPassword: false,
            loaded: true,
            email: '',
        };
        this.closeForgetPassword = this.closeForgetPassword.bind(this);
        this.reset = this.reset.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    componentDidMount() {
        $('#forget-password').validator();
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    reset() {
        var _ = this;
        $('#forget-password').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {} else {
                let data = {
                  email: _.state.email
                };
                _.setState({loaded: false});
                apiProfiles.reset(data).then(function(response) {
                    _.setState({loaded: true});
                    _.setState({forgetPassword: false});
                });
            }
            e.preventDefault();
        });
    }

    closeForgetPassword() {
        this.setState({forgetPassword: false});
    }

    render() {
        return (
            <div>
                <a href="#forget" onClick={() => this.setState({forgetPassword: true})}>Forget password?</a>
                <Modal show={this.state.forgetPassword} onHide={this.closeForgetPassword}>
                    <Modal.Header closeButton>
                        <Modal.Title>Retrieve password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Please enter your email address and we will send you a password:</h5>
                        <Loader loaded={this.state.loaded}>
                          <Form inline data-toggle="validator" role="form" id="forget-password">
                              <FormGroup controlId="formInlineName">
                                  <FormControl style={{width: '400px'}} onChange={this.handleEmail} value={this.state.email} type="email" name="email" placeholder="Email" required/>
                              </FormGroup>
                              {' '}
                              <Button type="submit" onClick={this.reset} bsStyle="success">
                                      Apply
                              </Button>
                          </Form>
                        </Loader>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}