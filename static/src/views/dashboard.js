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

import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Loader from 'react-loader';
import format from 'string-format';

import 'react-tagsinput/react-tagsinput.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png',
            synonyms: [],
            antonyms: [],
            stats: [],
            loaded: true,
            url: 'http://0.0.0.0:8000'
        };
        this.onUploadImage = this.onUploadImage.bind(this);
        this.calculate = this.calculate.bind(this);
        this.exportData = this.exportData.bind(this);
    }

    handleChangeTags(tags) {
        this.setState({ tags })
    }

    onUploadImage(files) {
        this.setState({
            thumbnail: files[0]['preview']
        });
    }

    exportData() {
        window.location = format('{0}/v1/dashboard/excel', this.state.url);
    }

    calculate() {
        var _ = this;
        _.setState({ loaded: false })
        var data = {
            'params': {
                'tags': (_.state.tags).toString(),
                'format': 'json'
            }
        }

        axios.get(format('{0}/v1/dashboard/synonyms/', _.state.url), data).then(function(response) {
            _.setState({ synonyms: response.data['synonyms'] })
            axios.get(format('{0}/v1/dashboard/antonyms/', _.state.url), data).then(function(response) {
                _.setState({ antonyms: response.data['antonyms'] });
                axios.get(format('{0}/v1/dashboard/keywordtool/', _.state.url), data).then(function(response) {
                    _.setState({ stats: response.data['keywords'] })
                    _.setState({ loaded: true })
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
        return ( <
            Grid >
            <
            Navbar >
            <
            Navbar.Header >
            <
            Navbar.Brand >
            <
            a href = "#" > WORDCANDY.IO < /a> < /
            Navbar.Brand > <
            /Navbar.Header> < /
            Navbar > <
            Row >
            <
            Col md = { 3 } >
            <
            Panel className = "text-center"
            style = {
                {
                    'paddingTop': '42px'
                }
            } >
            <
            p >
            <
            Image src = { this.state.thumbnail }
            width = { 171 }
            height = { 180 }
            rounded / >
            <
            /p> <
            Dropzone onDrop = { this.onUploadImage }
            multiple = { false }
            rejectStyle >
            <
            Button block > Upload image(.jpg / .png) < /Button> < /
            Dropzone > <
            /Panel> < /
            Col > <
            Col md = { 6 } >
            <
            Row >
            <
            Col >
            <
            Panel header = "What keywords descript this t-shirt?" >
            <
            Form inline >
            <
            Row >
            <
            Col md = { 9 } >
            <
            FormGroup controlId = "formControlsTextarea" >
            <
            TagsInput value = { this.state.tags }
            onChange = {::this.handleChangeTags }
            /> < /
            FormGroup > <
            /Col> <
            Col md = { 3 } >
            <
            Button onClick = { this.calculate } >
            Calculate <
            /Button> < /
            Col > <
            /Row> < /
            Form > <
            /Panel> < /
            Col > <
            Col >
            <
            Loader loaded = { this.state.loaded } >
            <
            Panel header = "Amazon keywords auto suggest" > {
                this.state.stats.length == 0 ?
                <
                div > Empty < /div> :
                null
            } <
            ul className = "fixed-panel" > {
                this.state.stats.map(function(item, i) {
                    return <li > { item.name } - { item.volume } < /li>
                }, this)
            } <
            /ul> < /
            Panel > <
            /Loader> < /
            Col > <
            /Row> < /
            Col > <
            Col md = { 3 } >
            <
            Panel className = "text-center"
            header = "Analytics" >
            <
            p >
            <
            Image src = "https://react-bootstrap.github.io/assets/thumbnail.png"
            rounded / >
            <
            /p> <
            Button block > View Analytics < /Button> < /
            Panel > <
            /Col> < /
            Row > <
            Row >
            <
            Col md = { 9 } >
            <
            Row >
            <
            Col >
            <
            Panel >
            <
            Nav bsStyle = "tabs"
            activeKey = "1" >
            <
            NavItem eventKey = "1" > Amazon < /NavItem> <
            NavItem eventKey = "2" > TeePublic < /NavItem> <
            NavItem eventKey = "3" > TeeSpring < /NavItem> <
            NavItem eventKey = "4" > RedBuble < /NavItem> < /
            Nav > <
            h5 > Temapltes < /h5> <
            ul className = "list-inline" >
            <
            li >
            <
            Button disabled > None < /Button> < /
            li > <
            li >
            <
            Button > Summertime T - shirt < /Button> < /
            li > <
            li >
            <
            Button > Holiday T - shirt < /Button> < /
            li > <
            li >
            <
            Button > Tropical T - shirt < /Button> < /
            li > <
            /ul> <
            br / >
            <
            Row >
            <
            Col md = { 12 } >
            <
            FormGroup >
            <
            FormControl type = "text"
            placeholder = "Enter prodcut title" / >
            <
            /FormGroup> < /
            Col > <
            /Row> <
            br / >
            <
            Row >
            <
            Col md = { 6 } >
            <
            FormGroup >
            <
            FormControl type = "text"
            placeholder = "Add description" / >
            <
            /FormGroup> < /
            Col > <
            Col md = { 6 } >
            <
            FormGroup >
            <
            FormControl type = "text"
            placeholder = "Add description" / >
            <
            /FormGroup> < /
            Col > <
            /Row> < /
            Panel > <
            /Col> < /
            Row > <
            /Col> <
            Col md = { 3 } >
            <
            Loader loaded = { this.state.loaded } >
            <
            Panel header = "Synonyms" > {
                this.state.synonyms.length == 0 ?
                <
                div > Empty < /div> :
                null
            } <
            ul className = "fixed-panel" > {
                this.state.synonyms.map(function(item, i) {
                    return <li > { item } < /li>
                }, this)
            }

            <
            /ul> < /
            Panel > <
            /Loader> <
            Loader loaded = { this.state.loaded } >
            <
            Panel header = "Antonyms" > {
                this.state.antonyms.length == 0 ?
                <
                div > Empty < /div> :
                null
            } <
            ul className = "fixed-panel" > {
                this.state.antonyms.map(function(item, i) {
                    return <li > { item } < /li>
                }, this)
            }

            <
            /ul> < /
            Panel > <
            /Loader> < /
            Col > <
            /Row> <
            br / >
            <
            hr / >
            <
            div id = "footer" >
            <
            Row >
            <
            Col md = { 2 } > < /Col> <
            Col md = { 8 }
            className = "text-right" >
            <
            Button onClick = { this.exportData } >
            Export data <
            /Button> < /
            Col > <
            Col md = { 2 } > < /Col> < /
            Row > <
            /div> < /
            Grid >
        );
    }
}