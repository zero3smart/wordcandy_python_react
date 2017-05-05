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
    Panel,
    Tabs,
    Tab
} from 'react-bootstrap';

import React, {Component} from 'react';

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grid className="landing-page" fluid={true}>
                <Row className="main">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">WORDCANDY.IO</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem href="#" className="text-secondary">Get Started</NavItem>
                            <NavItem href="#" className="text-success">Login</NavItem>
                        </Nav>
                    </Navbar>
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
                    <Col md={12} className="video">
                        <br/>
                        <Image src="/static/images/landing/example.png" responsive width={'600px'} height={'460px'}/>
                        <br/>
                    </Col>
                </Row>
                <Row className="price">
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                        <h3 className="text-primary">Choose Your Plan</h3>
                        <Row className="text-left">
                            <Col md={6}>
                                <div className="wave"></div>
                                <Panel className="tariff-description">
                                    <Row className="tariff-header">
                                        <Col md={12}>
                                            <ul className="list-inline">
                                                <li>
                                                    <span>Profesional Seller</span>
                                                </li>
                                                <li className="period">
                                                    <Tabs defaultActiveKey={2} animation={false}>
                                                        <Tab eventKey={1} title="month"></Tab>
                                                        <Tab eventKey={2} title="year"></Tab>
                                                    </Tabs>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row className="tariff-body">
                                        <Col md={12}>
                                            <p>
                                                <span className="dollar">$</span>
                                                <span className="value">199</span>
                                                / per year
                                                <Image className="discount" width={'116px'} height={'25px'} src="/static/images/landing/discount.png"/></p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <p>
                                                <Button disabled bsStyle="success">Start 3 day FREE trial</Button>
                                            </p>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Col>
                            <Col md={6}>
                                <div className="wave"></div>
                                <Panel className="tariff-description">
                                  <Row className="tariff-header">
                                      <Col md={12}>
                                          <ul className="list-inline">
                                              <li>
                                                  <span>Beginner</span>
                                              </li>
                                              <li className="period">
                                                  <Tabs defaultActiveKey={1} animation={false}>
                                                      <Tab eventKey={1} title="month"></Tab>
                                                      <Tab eventKey={2} title="year"></Tab>
                                                  </Tabs>
                                              </li>
                                          </ul>
                                      </Col>
                                  </Row>
                                    <Row className="tariff-body tariff-body-background">
                                        <Col md={12}>
                                            <p>
                                                <span className="dollar">$</span>
                                                <span className="value">24</span>
                                                / per month</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <p>
                                                <Button disabled bsStyle="success">Start 3 day FREE trial</Button>
                                            </p>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Col>
                        </Row>
                        <Row className="text-left subscribe">
                            <Col md={12}>
                                <Panel header="Get alerted when we launch">
                                    <Form inline>
                                        <FormGroup style={{
                                            'width': '90%',
                                            'padding-right': '10px'
                                        }}>
                                            <FormControl style={{
                                                'width': '100%'
                                            }} type="text" type="email" placeholder="Enter Your Email"/>
                                        </FormGroup>
                                        <FormGroup style={{
                                            'width': '10%'
                                        }}>
                                            <Button type="submit" bsStyle="success">
                                                Submit
                                            </Button>
                                        </FormGroup>
                                    </Form>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row className="testimonals">
                    <Col md={2}></Col>
                    <Col md={8} className="text-center">
                        <h3 className="text-primary">Testimonals</h3>
                        <Row>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="/static/images/landing/profile1.png" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p className="position">Sales Manager</p>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="/static/images/landing/profile2.png" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p className="position">Sales Manager</p>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel>
                                    <p><Image src="/static/images/landing/profile3.png" circle/></p>
                                    <p>
                                        <b>Iren Adler</b>
                                    </p>
                                    <p className="position">Sales Manager</p>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row className="started">
                    <Col className="text-center" md={12}>
                        <Button bsStyle="success">Get Started</Button>
                    </Col>
                </Row>
                <Row className="footer">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">WORDCANDY.IO</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem className="copyright">&copy; 2017 WORDCANDY.IO</NavItem>
                        </Nav>
                    </Navbar>
                </Row>
            </Grid>
        );
    }
}