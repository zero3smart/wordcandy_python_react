import {
    Grid,
    Row,
    Col,
    Nav,
    NavItem,
    Navbar,
    Panel,
    Image,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Loader from 'react-loader';
import format from 'string-format';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            synonyms: [],
            antonyms: [],
            stats: [],
            shops: [],
            loaded: true,
            thumbnail: '/static/images/dashboard/photo.png',
            url: 'https://wordcandy.herokuapp.com'
        };
        this.onUploadImage = this.onUploadImage.bind(this);
        this.calculate = this.calculate.bind(this);
        this.exportData = this.exportData.bind(this);
    }

    handleChangeTags(tags) {
        this.setState({tags})
    }

    componentDidMount() {
      var _ = this;
      axios.get(format('{0}/v1/dashboard/templates/', this.state.url)).then(function(response) {
        _.setState({
          shops: response.data
        });
      }).catch(function(error) {
        console.log(error);
      });
    }


    onUploadImage(files) {
        this.setState({thumbnail: files[0]['preview']
        });
    }

    exportData() {
        window.location = format('{0}/v1/dashboard/excel', this.state.url);
    }

    calculate() {
        var _ = this;
        _.setState({loaded: false})
        var data = {
            'params': {
                'tags': (_.state.tags).toString(),
                'format': 'json'
            }
        }

        axios.get(format('{0}/v1/dashboard/synonyms/', _.state.url), data).then(function(response) {
            _.setState({synonyms: response.data['synonyms']})
            axios.get(format('{0}/v1/dashboard/antonyms/', _.state.url), data).then(function(response) {
                _.setState({antonyms: response.data['antonyms']});
                axios.get(format('{0}/v1/dashboard/keywordtool/', _.state.url), data).then(function(response) {
                    _.setState({stats: response.data['keywords']})
                    _.setState({loaded: true})
                }).catch(function(error) {
                    console.log(error);
                });
            }).catch(function(error) {
                console.log(error);
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {
        return (
            <Grid className="dashboard-page" fluid={true}>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">WORDCANDY.IO</a>
                            <span>
                                - KEYWORD APP</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Row>
                    <Col md={3}>
                        <Panel className="text-center" style={{
                            height: 320
                        }}>
                            <p>
                                <Image src={this.state.thumbnail} width={250} height={250}/>
                            </p>
                            <Dropzone onDrop={this.onUploadImage} multiple={false} rejectStyle>
                                <Button bsStyle="primary" block>Upload image (.jpg / .png)</Button>
                            </Dropzone>
                        </Panel>
                    </Col>
                    <Col md={6}>

                        <Panel header="What keywords descript this t-shirt?" style={{
                            height: 155
                        }}>
                            <Form inline>
                                <Row>
                                    <Col md={10}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <TagsInput value={this.state.tags} onChange={:: this.handleChangeTags}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <Button bsStyle="primary" onClick={this.calculate}>
                                            Calculate
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Panel>

                        <Panel header="Amazon keywords auto suggest" style={{
                            height: 155
                        }}>
                            <Loader loaded={this.state.loaded}>
                                {this.state.stats.length == 0
                                    ? <div>Empty</div>
                                    : null}
                                <Row className="scroll-block">
                                    {this.state.stats.map(function(item, i) {
                                        return <Col md={4}>{i}. {item.name}
                                            - {item.volume}</Col>
                                    }, this)}
                                </Row>
                            </Loader>
                        </Panel>

                    </Col>
                    <Col md={3}>
                        <Panel header="Analytics" style={{
                            height: 320
                        }}>
                            <p className="text-center" style={{
                                paddingBottom: 30,
                                paddingTop: 30
                            }}>
                                <Image src={'/static/images/dashboard/analytics.png'} height={'150px'} width={'150px'}/>
                            </p>
                            <Button disabled block>View Analytics</Button>
                        </Panel>
                    </Col>
                </Row>
                <Row style={{
                    paddingBottom: 10
                }}>
                    <Col md={9}>
                        <Panel style={{
                            height: 350
                        }}>
                            <Row>
                                <Col md={12} className="templates-list">
                                    <Nav bsStyle="tabs" activeKey="Amazon">
                                      {this.state.shops.map(function(item, i) {
                                          return <NavItem eventKey="{item.name}">{item.name}</NavItem>
                                      }, this)}
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="templates">
                                        <b>Temapltes</b>
                                    </div>
                                    <ul className="list-inline">
                                        <li>
                                            <Button disabled>None</Button>
                                        </li>
                                        <li>
                                            <Button>Summertime T-shirt</Button>
                                        </li>
                                        <li>
                                            <Button>Holiday T-shirt</Button>
                                        </li>
                                        <li>
                                            <Button>Tropical T-shirt</Button>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <ControlLabel>Title</ControlLabel>
                                        <FormControl type="text" placeholder="Title - 4 to 8 words is best"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl type="text" placeholder="Dref description of work to get your audience all excited"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <ControlLabel>Tags</ControlLabel>
                                        <FormControl type="text" placeholder="Use, comas to-separate-tags"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Panel>

                    </Col>
                    <Col md={3}>
                        <Panel header="Synonyms" style={{
                            height: 170
                        }}>
                            <Loader loaded={this.state.loaded}>
                                {this.state.synonyms.length == 0
                                    ? <div>Empty</div>
                                    : null}
                                <Row className="scroll-block">
                                    {this.state.synonyms.map(function(item, i) {
                                        return <Col md={6}>{item}</Col>
                                    }, this)}

                                </Row>
                            </Loader>
                        </Panel>

                        <Panel header="Antonyms" style={{
                            height: 170
                        }}>
                            <Loader loaded={this.state.loaded}>
                                {this.state.antonyms.length == 0
                                    ? <div>Empty</div>
                                    : null}
                                <Row className="scroll-block">
                                    {this.state.antonyms.map(function(item, i) {
                                        return <Col md={6}>{item}</Col>
                                    }, this)}

                                </Row>
                            </Loader>
                        </Panel>

                    </Col>
                </Row>
                <hr/>
                <div id="footer">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className="text-right">
                            <Button bsStyle="success" onClick={this.exportData}>
                                Export data
                            </Button>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </div>
            </Grid>
        );
    }
}