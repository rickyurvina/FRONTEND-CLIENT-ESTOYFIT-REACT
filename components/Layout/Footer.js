import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo" style={{ marginTop: '-48px' }}>
                                    <Link href="/">
                                        <a>
                                            <img src={require("../../images/EstoyFitLogos/estoyfit_logo_-08.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                {/* <p>Texto disponible para estoy fit.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Menu</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/">
                                            <a>Inicio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#products">
                                            <a>Ciudades</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#activities">
                                            <a>Actividades</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#offerts">
                                            <a>Ofertas</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Eventos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">
                                            <a>Contactanos</a>
                                        </Link>
                                    </li>
                               
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Información</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <a href="https://www.facebook.com/EstoyFitEC/" target="_blank">
                                            <i className="fab fa-facebook-square"></i>
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/estoyfitec/?hl=es-la" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                            Instagram
                                        </a>
                                    </li>
                                    {/* <li>
                                        <Link href="/about">
                                            <a>Acerca de nosotros</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contáctanos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sizing-guide">
                                            <a>Guía</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Servicios</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contáctanos</h3>

                                <ul className="footer-contact-info">
                                    {/* <li>
                                        <i className="fas fa-map-marker-alt"></i> 
                                        Location: 2750 Quadra Street <br /> Victoria, Canada
                                    </li> */}
                                    {/* <li>
                                        <i className="fas fa-phone"></i> 
                                        Llamadas: <a href="tel:(+123) 456-7898">(+593) 99 920 5585</a>
                                    </li> */}

                                    <li>
                                        <i className="far fa-envelope"></i>
                                        Escribenos: <a href="#">hola@estoyfit.com.ec</a>
                                    </li>
                                    <li>
                                    <a href="/vacancies">Trabaja Con Nosotros</a>
                                </li>
                                    {/* <li>
                                        <i className="fas fa-fax"></i> 
                                        Fax: <a href="tel:+123456">+123456</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid copyright-area">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <Link href="/conditions">
                                <a>Terminos y Condiciones</a>
                            </Link>
                            <p>Copyright @ 2020 Proconty. Derechos reservador por
                    <a href="#" target="_blank">Proconty.com</a>
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;
