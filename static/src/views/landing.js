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
    NavItem,
    Nav,
    Image,
    Panel
} from 'react-bootstrap';

import React, {Component} from 'react';

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">WORDCANDY.IO</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem href="#">Get Started</NavItem>
                            <NavItem href="#">Login</NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h1>MEET CANDY WORDS TO MERCH RIGHT</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p class="text-center">WORDCANDY.IO created to help sellers present their products as much effective and save time. We aims to power your business with valuable tool for every day use. Upgrade your selling companies with magic keywords that works.</p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <br/>
                        <br/>
                        <Image src="http://lorempixel.com/output/abstract-q-c-640-480-9.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                        <h3>Choose Your Plan</h3>
                        <Row className="text-left">
                            <Col md={6}>
                                <Panel header="Profesional Seller">
                                    <p>199$ / per year</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <p>
                                        <Button>Start 3 day FREE trial</Button>
                                    </p>
                                </Panel>
                            </Col>
                            <Col md={6}>
                                <Panel header="Beginner">
                                    <p>24$ / per year</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <p>
                                        <Button>Start 3 day FREE trial</Button>
                                    </p>
                                </Panel>
                            </Col>
                        </Row>
                        <Row className="text-left">
                            <Col md={12}>
                                <Panel>
                                    <Form inline>
                                        <FormGroup>
                                            <ControlLabel>Get alerted when we launch</ControlLabel>{'  '}
                                            <FormControl type="email" placeholder="Enter Your Email"/>
                                        </FormGroup>
                                        <Button type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                        <h3>Testimonals</h3>
                        <Row>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="http://lorempixel.com/output/abstract-q-c-50-50-7.jpg" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p>Sales Manager</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="http://lorempixel.com/output/abstract-q-c-50-50-7.jpg" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p>Sales Manager</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="http://lorempixel.com/output/abstract-q-c-50-50-7.jpg" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p>Sales Manager</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col className="text-center" md={12}>
                        <Button>Get Started</Button>
                        <br/>
                        <br/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}