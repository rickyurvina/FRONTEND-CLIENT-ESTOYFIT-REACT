import React, { Component } from 'react';
import Link from 'next/link';

import { URI } from '../../services/base';
import axios from 'axios';
const url = URI + "/blog/getActivesBlogs"

class BlogSidebar extends Component {
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
        let count = 1;
        return (

            <aside className="widget-area" id="secondary">

                <section className="widget widget_comero_posts_thumb">

                    <h3 className="widget-title">Post Populares</h3>

                    {this.state.data.map(item => (
                        <article className="item" key={item.id}>
                            <Link href="#">
                                <a className="thumb">
                                    <img className="fullimage cover bg2"
                                        alt="100x100" src={item.main_image}
                                        href="/blog-1"
                                    />
                                </a>
                            </Link>
                            <div className="info">
                                <time>{item.updated_at}</time>
                                <h4 className="title small">
                                    <Link href="/blog-1">
                                        <a>{item.title}</a>
                                    </Link>
                                </h4>
                            </div>
                            <div className="clear"></div>
                        </article>
                    ))}
                </section>
                <section className="widget widget_categories">
                    <h3 className="widget-title">Categorias</h3>
                    {this.state.data.map(item => (
                        <ul key={item.id}>
                            <li>
                                <Link href="#">
                                    <a>{item.category}</a>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </section>

                <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>


                    <div className="tagcloud">
                        {this.state.tags.map(item => (
                            <Link href="#" key={item.id}>
                                <a>{item.name} <span className="tag-link-count"></span></a>
                            </Link>
                        ))}
                    </div>

                </section>

            </aside>
        );
    }
}

export default BlogSidebar;

{/*<section className="widget widget_recent_comments">
                    <h3 className="widget-title">Comentarios Reciencies</h3>

                    {/* <ul>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A WordPress Commenter</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Novine</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Wordpress</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A WordPress Commenter</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Novine</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                    </ul> 
                    </section>*/}

{/*  <section className="widget widget_recent_entries">
                    <h3 className="widget-title">Post Recientes</h3>

                    <ul>
                        <li>
                            <Link href="/metodo-tabata">
                                <a>MÉTODO TABATA</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="#">
                                <a>How to start your business as an entrepreneur</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>How to be a successful entrepreneur</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>How to Become a Successful Entry Level UX Designer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Protect your workplace from cyber attacks</a>
                            </Link>
                        </li> 
                    </ul>
                        </section>*/}

{/* <section className="widget widget_archive">
                    <h3 className="widget-title">Archivos</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>May 2020</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>April 2020</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>June 2019</a>
                            </Link>
                        </li>
                    </ul>
                    </section>*/}



{/* <section className="widget widget_meta">
                    <h3 className="widget-title">Meta</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Log in</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Entries <abbr title="Really Simple Syndication">RSS</abbr></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Comments <abbr title="Really Simple Syndication">RSS</abbr></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>WordPress.org</a>
                            </Link>
                        </li>
                    </ul>
                </section> */}
{/*   <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>fibra <span className="tag-link-count">(3)</span></a>
                        </Link>

                        <Link href="#">
                            <a>calorias <span className="tag-link-count">(3)</span></a>
                        </Link>

                        <Link href="#">
                            <a>light <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>alimentación <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>calorias <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>peso <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>mitos <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>dietas <span className="tag-link-count">(2)</span></a>
                        </Link>
                    </div>
            </section>*/}