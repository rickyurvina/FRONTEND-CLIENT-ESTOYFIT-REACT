import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import BlogSidebar from '../components/blog/BlogSidebar';
import Breadcrumb from '../components/Common/Breadcrumb';
import Link from 'next/link';
import ImportantNote from '../components/blog/ImportantNote';
import ContactBlog from '../components/blog/ContactBlog';
import { URI } from '../services/base';
import axios from 'axios';
import parse from 'html-react-parser';


const url = URI + "/blog/getActivesBlog1"

class blog_2 extends Component {
    state = {
        data: [],
        tags: []

    }
    petitionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data.data });
            this.setState({ tags: response.data.tags });
        }).catch(error => {
            console.log(error.message);
        })
    }


    componentDidMount() {
        this.petitionGet();

    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {this.state.data.map(item => (
                    <section className="blog-details-area ptb-60" key={item.id}>
                        <Breadcrumb title={item.title} />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <BlogSidebar />
                                </div>
                                <div className="col-lg-8">
                                    <div className="blog-details">
                                        <div className="article-header">
                                            <ul className="entry-meta">
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    <Link href="#">
                                                        <a>Usuario</a>
                                                    </Link>
                                                </li>
                                                <li><i className="far fa-calendar-alt"></i>{item.updated_at}</li>
                                                <li><i className="far fa-comment-dots"></i> 0 Comentarios</li>
                                            </ul>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="article-img">
                                            <img
                                                alt="image" src={item.main_image}
                                            />
                                        </div>
                                        <div className="article-content">
                                            <div>
                                                {parse(item.content)}
                                            </div>
                                            <ImportantNote />
                                            <ul className="category">
                                                <li><span>Tags:</span></li>
                                                {this.state.tags.map(item => (
                                                    <li key={item.id}>
                                                        <Link href="#">
                                                            <a>{item}</a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <ContactBlog />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default blog_2;