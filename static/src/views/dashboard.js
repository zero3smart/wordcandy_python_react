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

import {Link, browserHistory} from 'react-router';
import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Loader from 'react-loader';
import format from 'string-format';

import MixinAuth from '../mixins/auth';

export default class Dashboard extends MixinAuth {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            synonyms: [],
            antonyms: [],
            stats: [],
            shops: [],
            templates: [],
            template: [],
            activeTemplate: 0,
            activeShop: 0,
            loaded: true,
            username: localStorage.getItem('username'),
            thumbnail: '/static/images/dashboard/photo.png',
            url: 'http://www.wordcandy.io'
        };
        this.onUploadImage = this.onUploadImage.bind(this);
        this.calculate = this.calculate.bind(this);
        this.exportData = this.exportData.bind(this);
        this.handleShop = this.handleShop.bind(this);
        this.handleTemplate = this.handleTemplate.bind(this);
        this.reset = this.reset.bind(this);
        this.addWord = this.addWord.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleSecondDescription = this.handleSecondDescription.bind(this);
        this.handleFirstDescription = this.handleFirstDescription.bind(this);
    }

    reset() {
        this.setState({tags: [], synonyms: [], antonyms: [], stats: [], thumbnail: '/static/images/dashboard/photo.png'});
    }

    addWord(event) {
        var template = this.state.template;
        template.title = template.title.replace('{}', event.target.getAttribute('data-word'));
        template.first_description = template.first_description.replace('{}', event.target.getAttribute('data-word'));
        template.second_description = template.second_description.replace('{}', event.target.getAttribute('data-word'));

        this.setState({template: template});
    }

    handleTitle(event) {
        var template = this.state.template;
        template.title = event.target.value
        this.setState({template: template});
    }

    handleSecondDescription(event) {
        var template = this.state.template;
        template.second_description = event.target.value
        this.setState({template: template});
    }

    handleFirstDescription(event) {
        var template = this.state.template;
        template.first_description = event.target.value
        this.setState({template: template});
    }

    handleShop(index) {
        this.setState({activeShop: index, templates: this.state.shops[index].templates, activeTemplate: 0, template: this.state.shops[index].templates[0]})
    }

    handleTemplate(event) {
        this.setState({
            activeTemplate: event.target.getAttribute('data-id'),
            template: this.state.templates[event.target.getAttribute('data-id')]
        });
    }

    handleChangeTags(tags) {
        this.setState({tags})
    }

    componentDidMount() {
        var _ = this;
        axios.get(format('{0}/v1/dashboard/templates/', this.state.url)).then(function(response) {
            _.setState({shops: response.data, templates: response.data[0].templates, template: response.data[0].templates[0]});
        }).catch(function(error) {
            console.log(error);
        });
    }

    onUploadImage(files) {
        this.setState({thumbnail: files[0]['preview']
        });
    }

    exportData() {
        //window.location = format('{0}/v1/dashboard/excel', this.state.url);
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
                    var stats = [];
                    response.data['keywords'].forEach(function(element) {
                      if (parseInt(element['volume']) > 0) {
                        stats.push({
                          'name': element['name'],
                          'active': false,
                          'volume': element['volume'],
                        })
                      }
                    });
                    _.setState({stats: stats})
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
                            <Link to="/dashboard">WORDCANDY.IO</Link>
                            <span>{' '}
                                - {' '}KEYWORD APP</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem href="/profile" className="profile-header">
                            <ul className="list-inline">
                                <li><Image width={'20px'} height={'20px'} src="/static/images/profile/avatar.png"/></li>
                                <li>{this.state.username}</li>
                                <li>
                                    <i className="icon ion-chevron-down"></i>
                                </li>
                            </ul>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="dashboard-content">
                    <Row>
                        <Col md={3}>
                            <Panel className="text-center" style={{
                                height: 320
                            }}>
                                <p>
                                    <Image src={this.state.thumbnail} width={250} height={250}/>
                                </p>
                                <Dropzone onDrop={this.onUploadImage} multiple={false} rejectStyle>
                                    <Button bsStyle="primary" block>
                                        <i className="icon ion-arrow-up-c"></i>
                                        Upload image (.jpg / .png)</Button>
                                </Dropzone>
                            </Panel>
                        </Col>
                        <Col md={6}>

                            <Panel header="What keywords descript this t-shirt?" style={{
                                height: 155
                            }}>
                                <Form inline>
                                    <Row>
                                        <Col md={9}>
                                            <FormGroup controlId="formControlsTextarea" style={{
                                                'width': '100%'
                                            }}>
                                                <TagsInput maxTags={4} value={this.state.tags} onChange={:: this.handleChangeTags}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3} className="text-center">
                                            <Row>
                                                <Col md={2}></Col>
                                                <Col md={8}>
                                                    <Button disabled={this.state.tags.length == 0} bsStyle="primary" block onClick={this.calculate}>
                                                        <i className="icon ion-calculator"></i>
                                                        Calculate
                                                    </Button>
                                                </Col>
                                                <Col md={2}></Col>
                                            </Row>
                                            <Row style={{
                                                paddingTop: '5px'
                                            }}>
                                                <Col md={2}></Col>
                                                <Col md={8}>
                                                    <Button bsStyle="primary" block onClick={this.reset}>
                                                        <i className="icon ion-android-refresh"></i>
                                                        Reset
                                                    </Button>
                                                </Col>
                                                <Col md={2}></Col>
                                            </Row>
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
                                    <Row className="scroll-block suggestions">
                                        {this.state.stats.map(function(item, i) {
                                            return <Col md={6}>
                                                <Row>
                                                    <Col md={1}>
                                                        <span className="index">{i + 1}.</span>
                                                    </Col>
                                                    <Col md={7}>
                                                        <p className="name">{item.name}</p>
                                                    </Col>
                                                    <Col md={3} className="text-right">
                                                        <span className="volume">{item.volume}</span>
                                                    </Col>
                                                    <Col md={1} className="text-right">
                                                        <i onClick={this.addWord} style={{
                                                            cursor: 'cursor'
                                                        }} data-word={item.name} className="icon ion-android-add-circle"></i>
                                                    </Col>
                                                </Row>
                                            </Col>
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
                                        <Nav bsStyle="tabs" activeKey={this.state.activeShop} onSelect={this.handleShop}>
                                            {this.state.shops.map(function(item, i) {
                                                return <NavItem eventKey={i}>{item.name}</NavItem>
                                            }, this)}
                                        </Nav>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <div className="templates">
                                            <b>Templates</b>
                                        </div>
                                        <ul className="list-inline">
                                            {this.state.templates.map(function(item, i) {
                                                return <li>
                                                    <Button onClick={this.handleTemplate} data-id={i} disabled={i == this.state.activeTemplate}>{item.name}</Button>
                                                </li>
                                            }, this)}
                                        </ul>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <ControlLabel>Title</ControlLabel>
                                            <FormControl type="text" placeholder="Title - 4 to 8 words is best" onChange={this.handleTitle} value={this.state.template.title}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <ControlLabel>Description</ControlLabel>
                                            <FormControl type="text" placeholder="Dref description of work to get your audience all excited" onChange={this.handleFirstDescription} value={this.state.template.first_description}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <ControlLabel>Tags</ControlLabel>
                                            <FormControl type="text" placeholder="Use, comas to-separate-tags" onChange={this.handleSecondDescription} value={this.state.template.second_description}/>
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
                                            return <Col md={6} style={{
                                                cursor: 'pointer'
                                            }} onClick={this.addWord} data-word={item}>{item}</Col>
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
                                            return <Col md={6} style={{
                                                cursor: 'pointer'
                                            }} onClick={this.addWord} data-word={item}>{item}</Col>
                                        }, this)}

                                    </Row>
                                </Loader>
                            </Panel>

                        </Col>
                    </Row>
                </div>
                <hr/>
                <div id="footer">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className="text-right">
                            <Button bsStyle="success" onClick={this.exportData}>
                                <i className="icon ion-arrow-down-c"></i>
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