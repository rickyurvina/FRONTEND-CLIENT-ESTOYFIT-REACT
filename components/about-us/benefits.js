import React, { Component } from 'react';


class Benefits extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="row row-benefits" style={{margin:0}}>
                    <div className="col-lg-12 title-benefits">
                        <h1>BENEFICIOS</h1>
                    </div>

                    <div className="row benefits-card" style={{margin:0}}>
                        <div className="col-md-6 col-xs-12 benefits-card-image">
                            <img
                                src={require("../../images/about-us/new_clients.jpg")}
                                data-holder-rendered="true"
                                alt="550x550"
                            /></div>
                        <div className="col-md-6 col-xs-12 benefits-card-content">
                            <h3> 01 </h3>
                            <h1> ATRAIGA NUEVOS CLIENTES </h1>
                            <p> Podrás vender distintos planes para distintos momentos del año, con descuentos, accesos exclusivos, programas de referidos, campañas de aperturas, recaptacion de ex clientes, etc.</p>
                        </div>
                    </div>


                    <div className="row benefits-card" style={{margin:0}}>
                        <div className="col-md-6 col-xs-12 benefits-card-content" style={{ paddingRight: '15%' }}>
                            <h3> 02 </h3>
                            <h1>GOOGLE </h1>
                            <p>Publicando tu centro en EstoyFit, aparecerás en los primeros resultados de búsqueda de Google y tendrás más exposicion en las redes sociales. </p>

                        </div>
                        <div className="col-md-6 col-xs-12 benefits-card-image">
                            <img
                                src={require("../../images/about-us/maps.jpg")}
                                data-holder-rendered="true"
                                alt="550x550"
                            />
                        </div>
                    </div>
                    <div className="row benefits-card" style={{margin:0}}>
                        <div className="col-md-6 col-xs-12 benefits-card-image1">
                            <img
                                src={require("../../images/about-us/visibility.jpg")}
                                data-holder-rendered="true"
                                alt="550x550"
                            />
                        </div>
                        <div className="col-md-6 col-xs-12 benefits-card-content">
                            <h3> 03 </h3>
                            <h1> AUMENTE SU VISIBILIDAD </h1>
                            <p> Potenciales clientes podrán encontrar tu centro en el mapa, buscando por cercanía y por clases / servicios que tu centro ofrezca.</p>
                            {/* <a href="#" className="link-benefits">SABER MAS</a>/*/}
                        </div>
                    </div>
                    <div className="row benefits-card" style={{margin:0}}>
                        <div className="col-md-6 col-xs-12 benefits-card-content">
                            <h3> 04 </h3>
                            <h1> EXPANDA SU OFERTA </h1>
                            <p>Podrás vender distintos planes para distintos momentos del año, con descuentos, accesos exclusivos, programas de referidos, campañas de aperturas, recaptacion de ex clientes, etc. </p>

                        </div>
                        <div className="col-md-6 col-xs-12 benefits-card-image">
                            <img
                                src={require("../../images/about-us/offert.jpg")}
                                data-holder-rendered="true"
                                alt="550x550"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 contact-card" style={{margin:0}}>
                        <div className="row">
                            <div className="col-lg-6 contact-card-content">
                                <h1> $0  </h1>
                                <h2>COSTO DEL SERVICIO</h2>
                                <p>Cobramos una comisión cuando vendemos un pase para tu centro.</p>
                            </div>
                            <div className="col-md-6" style={{paddingLeft:0, paddingRight: 0}}>
                                <img className="contact-card-image"
                                    alt="550x550" src={require("../../images/about-us/contact.jpg")}
                                    data-holder-rendered="true"
                                />
                                <a href="#info">
                                    <button className="contact-card-content-button" href="#info">CONTÁCTANOS</button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        );
    }
}

export default Benefits;
