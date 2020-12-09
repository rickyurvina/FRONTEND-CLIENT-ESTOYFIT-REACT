import React, { Component } from 'react';
import Link from 'next/link';

class Result extends Component {
    render() {
        return (
            <div className="container container-result">
                <h6 className="result-h6">Mostrando n resultados</h6>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item">
                        <div className="single-product-box">
                            <div className="product-image">
                                <Link href="#">
                                    <a>
                                        <img src={require('../../../../images/blog-images/img1-550x550.jpg')} alt="image" />
                                    </a>
                                </Link>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a
                                                data-tip="Quick View"
                                                data-place="left"
                                            >
                                                <i className="far fa-eye"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a data-tip="Add to Wishlist" data-place="left">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="product-content">
                                <h3>
                                    <Link href="#">
                                        <a>Nombre</a>
                                    </Link>
                                </h3>
                                {/* <h5> Finaliza en :</h5>
                                <div id="countdown-container">
                                    <div id="countdown">
                                        <span id="days">{parseInt(dif)}D:</span><span id="hours">{diff.hours()}H:</span>
                                        <span id="minutes">{diff.minutes()}M</span>
                                    </div>
                                </div> */}
                                <div className="product-price">
                                    <span className="new-price text-muted" style={{ 'textDecoration': 'line-through', 'fontSize': '15px' }}> Antes: $10</span>
                                </div>

                                <div className="product-price">
                                    <span className="new-price" >
                                        <span className="discount-tag"> -5% OFF</span><br />
                                        <span style={{ 'fontSize': '18px' }}> Ahora:  $4</span><br />
                                    </span>
                                </div>

                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                {/* expiration_date */}

                                {/* <AddToCart product={data} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
