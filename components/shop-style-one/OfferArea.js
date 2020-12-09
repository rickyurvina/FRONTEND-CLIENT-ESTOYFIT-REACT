import React, { Component } from 'react';
import Link from 'next/link';

class bannerArea extends Component {
    render() {
        return (
            
                <section className="banner-area ptb-60">
                    <div className="row row-banner">
                        <div className="col-lg-4 col-md-6 banner-col">
                            <div className="banner-box">
                                <img src={require("../../images/custom-images/info-box-img-1.jpg")} alt="image" />
                                <div className="category">
                                    <div className="icon">
                                        <img src={require("../../images/banner/info-box-vector-1.png")} alt="image" />
                                    </div>
                                    <h4>Últimas ofertas</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Aprovecha nuestras promociones</h3>

                                    <ul>
                                        <li>
                                            {/* <Link href="#offerts"> */}
                                            <a className="nav-link" href="#activities" style={{ color: "#FE5000" }}>Saber más</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 banner-col">
                            <div className="banner-box">
                                <img src={require("../../images/custom-images/info-box-img-2.jpg")} alt="image" />

                                <div className="category">
                                    <div className="icon">
                                        <img src={require("../../images/banner/info-box-vector-2.png")} alt="image" />
                                    </div>
                                    <h4>Actividades destacadas</h4>
                                </div>
                                <div className="box-inner">
                                    <h3>Busca actividades cerca de tu localidad</h3>
                                    <ul>
                                        <li>
                                            <a className="nav-link" href="#activities" style={{ color: "#FE5000" }}>Saber más</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 banner-col">
                            <div className="banner-box">
                                <img src={require("../../images/custom-images/info-box-img-3.jpg")} alt="image" />

                                <div className="category">
                                    <div className="icon">
                                        <img src={require("../../images/banner/info-box-vector-3.png")} alt="image" />
                                    </div>
                                    <h4>Registra tu gimnasio</h4>
                                </div>
                                <div className="box-inner">
                                    <h3>Registra aquí tu establecimiento deportivo</h3>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">
                                                <a style={{ color: "#FE5000" }}>Saber más</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
          
        );
    }
}

export default bannerArea;
