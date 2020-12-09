import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    items: 4,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i className='fas fa-chevron-left'></i>",
        "<i className='fas fa-chevron-right'></i>"
    ]
}

class PassCarousel extends Component {

    state = {
        display: false,
        panel: true
    };

    componentDidMount() {
        this.setState({ display: true })
    }

    render() {
        return (
            <div className="pass-area">
                <div className="pass-title">
                    <h3>LISTO PARA ENTRENAR?</h3>
                    <h5>ESCOGE TU PASE</h5>
                </div>

                <div className="col-md-10 offset-md-1 pass-cards">
                    {this.state.display ? <OwlCarousel
                        className="owl-theme"
                        {...options}
                    >
                        <div className="card-pass">
                            <div className="card pass-class">
                                <img className="card-img-top" src={require("../../images/passes/pase_naranja.png")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-inner">Pase por clase</h5>
                                    <div className="offert">
                                    <p className="card-text offert">Oferta válida hasta el 21/08/2020 a las 23:59hs
                                                                        Sólo para nuevos clientes</p>
                                    Antes:<p className="offert real-value">$10</p>
                                    Ahora:<p className="offert offert-value">$5</p>                                                                        
                                    </div>
                                    
                                    <a href="#" className="btn btn-primary btn-block btn-pass">Obtener</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-pass">
                            <div className="card pass-month">
                                <img className="card-img-top" src={require("../../images/passes/pase_turquesa.png")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-inner">Pase mensual</h5>
                                    <div className="offert">
                                    <p className="card-text offert">Oferta válida hasta el 21/08/2020 a las 23:59hs
                                                                        Sólo para nuevos clientes</p>
                                    Antes:<p className="offert real-value">$70</p>
                                    Ahora:<p className="offert offert-value">$60</p>                                                                         
                                    </div>
                                    
                                    <a href="#" className="btn btn-primary btn-block btn-pass">Obtener</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-pass">
                            <div className="card pass-threemonth">
                                <img className="card-img-top" src={require("../../images/passes/pase_verde.png")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-inner">Pase trimestral</h5>
                                    <div className="offert">
                                    <p className="card-text offert">Oferta válida hasta el 21/08/2020 a las 23:59hs
                                                                        Sólo para nuevos clientes</p>
                                    Antes:<p className="offert real-value">$210</p>
                                    Ahora:<p className="offert offert-value">$170</p>                                                                        
                                    </div>
                                    
                                    <a href="#" className="btn btn-primary btn-block btn-pass">Obtener</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PassCarousel;