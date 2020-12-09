import React, { Component } from 'react';

class Subscribe extends Component {
    state = {
        textResponse: ''
    };

    send = () => {
        this.setState({ textResponse: 'Correo registrado en nuestro boletín satisfactoriamente' });
    }
    render() {
        const { textResponse } = this.state;
        return (
            <section className="subscribe-area ptb-60" style={{paddingTop: '3%'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-content">
                                <h3>Suscribete a nuestro boletín</h3>
                                <p>Recibiras ofertas especiales y anuncios destacados</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <form className="newsletter-form" data-toggle="validator">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Ingresa tu E-mail" 
                                    name="EMAIL" 
                                    required={true} 
                                    autoComplete="off" 
                                />
                                <span>{textResponse}</span>
                                <button type="submit" onClick={(e) => { e.preventDefault(); this.send(); }}>Suscribirse</button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscribe;
