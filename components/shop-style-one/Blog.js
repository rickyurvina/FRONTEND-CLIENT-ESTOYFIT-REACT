import React, { Component } from 'react';
import { URI } from '../../services/base';
import axios from 'axios';
import { isMuiElement } from '@material-ui/core';

const url = URI + "/blog/getActivesBlog"
const url1 = URI + "/blog/getActivesBlog1"
const url2 = URI + "/blog/getActivesBlog2"
const url3 = URI + "/blog/getActivesBlog3"

class Blog extends Component {

    state = {
        data: [],
        data1: [],
        data2: [],
        data3: []
    }
    petitionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data.data }); 

        }).catch(error => {
            console.log(error.message);
        })

    }
    petitionGet1 = () => {
        axios.get(url1).then(response => {
            this.setState({ data1: response.data.data });


        }).catch(error => {
            console.log(error.message);
        })

    }
    petitionGet2 = () => {
        axios.get(url2).then(response => {
            this.setState({ data2: response.data.data });


        }).catch(error => {
            console.log(error.message);
        })

    }
    petitionGet3 = () => {
        axios.get(url3).then(response => {
            this.setState({ data3: response.data.data });


        }).catch(error => {
            console.log(error.message);
        })
    }
    componentDidMount() {
        this.petitionGet();
        this.petitionGet1();
        this.petitionGet2();
        this.petitionGet3();
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row row-blog">
                        <div className="col-md-3 col-sx-12 blog-card1">
                            {this.state.data.map(item => (
                                <div className="blog-card-content" key={item.id}>
                                    <h3> {item.category} </h3>
                                    <h1> {item.title} </h1>
                                    <p> {item.description_blog}</p>
                                    <a className="link-blog" href="/blog-1">SABER MÁS</a>
                                </div>
                            ))}
                        </div>
                        {this.state.data.map(item => (

                            <div className="col-md-3 col-sx-12" style={{ padding: 'initial' }} key={item.id}>
                                <a href="/blog-1" style={{display: 'contents'}}>
                                    <img className="blog-card-image img-fluid"
                                        src={item.main_image}
                                        data-holder-rendered="true"
                                        alt="550x550"

                                    />
                                </a>
                            </div>

                        ))}

                        <div className="col-md-3 col-sx-12 blog-card2">
                            {this.state.data1.map(item => (
                                <div className="blog-card-content white" key={item.id}>
                                    <h3 style={{ color: "white" }}> {item.category}</h3>
                                    <h1> {item.title} </h1>
                                    <p>{item.description_blog}</p>
                                    <a className="link-blog2" href="/blog-2">SABER MÁS</a>
                                </div>
                            ))}
                        </div>
                        {this.state.data1.map(item => (
                            <div className="col-md-3 col-sx-12" style={{ padding: 'initial' }} key={item.id}>
                                <a href="/blog-2"  style={{display: 'contents'}}>
                                    <img className="blog-card-image img-fluid"
                                        src={item.main_image}
                                        data-holder-rendered="true"
                                        alt="550x550"
                                    />
                                </a>
                            </div>
                            
                        ))}
                    </div>

                    {/* segunda fila del blog*/}

                    <div className="row">
                        {this.state.data2.map(item => (
                            <div className="col-md-3 col-sx-12" style={{ padding: 'initial' }} key={item.id}>
                                <a href="/blog-3">
                                    <img className="blog-card-image img-fluid"
                                        src={item.main_image}
                                        data-holder-rendered="true"
                                        alt="550x550"
                                    />
                                </a>
                            </div>
                        ))}

                        <div className="col-md-3 col-sx-12 blog-card2">
                            {this.state.data2.map(item => (
                                <div className="blog-card-content" key={item.id}>
                                    <h3 style={{ color: "white" }}> {item.category} </h3>
                                    <h1> {item.title} </h1>
                                    <p> {item.description_blog} </p>
                                    <a className="link-blog2" href="/blog-2">SABER MÁS</a>
                                </div>
                            ))}
                        </div>

                        {this.state.data3.map(item => (
                            <div className="col-md-3 col-sx-12" style={{ padding: 'initial' }} key={item.id}>
                                <a href="/blog-4">
                                    <img className="blog-card-image img-fluid"
                                        src={item.main_image}
                                        data-holder-rendered="true"
                                        alt="550x550"
                                        href="/blog-4"
                                    />
                                </a>
                            </div>
                        ))}

                        <div className="col-md-3 col-sx-12 blog-card1">
                            {this.state.data3.map(item => (
                                <div className="blog-card-content" key={item.id}>
                                    <h3> {item.category} </h3>
                                    <h1> {item.title} </h1>
                                    <p>{item.description_blog}</p>
                                    <a className="link-blog" href="/blog-4">SABER MÁS</a>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </>

        );
    }
}

export default Blog;
