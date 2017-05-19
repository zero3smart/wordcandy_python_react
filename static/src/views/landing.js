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

import Loader from 'react-loader';
import {Link, browserHistory} from 'react-router';
import React, {Component} from 'react';

import {apiProfiles} from '../api/profiles';

class Subscribe extends Component {
    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loaded: true
        };
        this.subscribe = this.subscribe.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    subscribe(e) {
        $('form').validator();
        var _ = this;
        $('form').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {} else {
                let data = {
                    email: _.state.email
                }
                _.setState({loaded: false});
                apiProfiles.subscribe(data).then((response) => {
                    _.setState({email: ''});
                    _.setState({loaded: true});
                    return response;
                }).then((json) => {
                    _.setState({email: ''});
                    _.setState({loaded: true});
                    return json;
                });
            }
            e.preventDefault();
        });

    }

    render() {
        return (
            <Form inline data-toggle="validator" role="form">
                <FormGroup style={{
                    'width': '80%',
                    'padding-right': '10px'
                }}>
                    <FormControl style={{
                        'width': '100%'
                    }} type="email" id="email" name="email" onChange={this.handleEmail} value={this.state.email} required placeholder="Enter Your Email"/>
                </FormGroup>
                <FormGroup style={{
                    'width': '20%'
                }}>
                  <Loader loaded={this.state.loaded}>
                    <Button type="submit" onClick={this.subscribe} bsStyle="success">
                        Subscribe
                    </Button>
                  </Loader>
                </FormGroup>
            </Form>
        )
    }
}

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
          planProfesional: 2,
          planBeginner: 1
        };
        this.handleProfesional = this.handleProfesional.bind(this);
        this.handleBeginner = this.handleBeginner.bind(this);
    }

    handleProfesional(key) {
      this.setState({
        planProfesional: key
      });
    }

    handleBeginner(key) {
      this.setState({
        planBeginner: key
      });
    }

    render() {
        return (
            <Grid className="landing-page" fluid={true}>
                <Row className="main">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">WORDCANDY.IO</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem className="text-secondary">
                                <Link to="/sign-up">Get Started</Link>
                            </NavItem>
                            <NavItem className="text-success">
                                <Link to="/sign-in">Login</Link>
                            </NavItem>
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
                        <h3 className="text-primary">Choose Your Plan. Get Sweeter Keywords. Sell more.</h3>
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
                                                    <Tabs onSelect={this.handleProfesional} defaultActiveKey={this.state.planProfesional} animation={false}>
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
                                                {this.state.planProfesional == 1 ?
                                                  <span><span className="value">69</span> / per month</span>
                                                : null}
                                                {this.state.planProfesional == 2 ?
                                                  <span><span className="value">690</span> / per year
                                                  <Image className="discount" width={'116px'} height={'25px'} src="/static/images/landing/discount.png"/></span>
                                                : null}
                                            </p>
                                            <p>We’ve set costs with your business in mind. Our goal is to double each cent you’ll spend with WordCandy.</p>
                                            <p>
                                                <Link to="/sign-up">
                                                    <Button bsStyle="success">Start 3 day FREE trial</Button>
                                                </Link>
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
                                                    <Tabs onSelect={this.handleBeginner} defaultActiveKey={this.state.planBeginner} animation={false}>
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
                                                  {this.state.planBeginner == 1 ?
                                                    <span><span className="value">29</span> / per month</span>
                                                  : null}
                                                  {this.state.planBeginner == 2 ?
                                                    <span><span className="value">290</span> / per year</span>
                                                  : null}
                                            </p>
                                            <p>We’ve set costs with your business in mind. Our goal is to double each cent you’ll spend with WordCandy.</p>
                                            <p>
                                                <Link to="/sign-up">
                                                    <Button bsStyle="success">Start 3 day FREE trial</Button>
                                                </Link>
                                            </p>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Col>
                        </Row>
                        <Row className="text-left subscribe">
                            <Col md={12}>
                                <Panel header="Get alerted when we launch">
                                    <Subscribe/>
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
                                <Panel style={{
                                    height: '300px'
                                  }}>
                                    <p><Image src="/static/images/landing/profile1.png" circle/></p>
                                    <p>
                                        <b>Roman Semenov</b>
                                    </p>
                                    <p className="position">Entrepreneur</p>
                                    <p className="description">WordCandy is very useful tool for my merchandising business. I’ve tried beta and want more. Hope for your success guys, you have me as a customer for sure!</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel style={{
                                    height: '300px'
                                  }}>
                                    <p><Image src="/static/images/landing/profile2.png" circle/></p>
                                    <p>
                                        <b>Sophy Brown</b>
                                    </p>
                                    <p className="position">Sales manager</p>
                                    <p className="description">Description templates saves me a lot of time in everyday work. Customers support is awesome! Great job!</p>
                                </Panel>
                            </Col>
                            <Col md={4}>
                                <Panel style={{
                                    height: '300px'
                                  }}>
                                    <p><Image src="/static/images/landing/profile3.png" circle/></p>
                                    <p>
                                        <b>Jeremy Meirs</b>
                                    </p>
                                    <p className="position">CBDO</p>
                                    <p className="description">I’m going to launch my sales team into the WordCandy. This tool is simple and effective! Looking forward to see more features inside.</p>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row className="started">
                    <Col className="text-center" md={12}>
                        <Link to="/sign-up">
                            <Button bsStyle="success">Get Started</Button>
                        </Link>
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