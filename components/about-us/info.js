import React, { Component } from 'react';
import Link from 'next/link';
import Register from '../../components/Modal/Register';

class Info extends Component {
    render() {
        return (
            <div className="container-info"  style={{padding:0}}>
                <div className="container">
                    <div className="row row-title-info">
                        <div className="col-lg-12">
                            <h3>¿QUÉ ES ESTOYFIT? </h3>
                        </div>
                        <div className="col-lg-12">
                            <br />
                            <p>Somos la primera plataforma que permite obtener pases flexibles de una o varias clases o sesiones,
                            o de uno o varios meses de acceso, para practicar cualquier actividad deportiva favorita a nivel
                            nacional y elegir dónde ejercitarse en base a la ubicación, disponibilidad de tiempo y
                            presupuesto....</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-12 info">
                            <div  >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                                    src={require("../../images/about-us/propuesta.png")}
                                    className="container-icon"
                                  
                                />
                            </div>
                            <div>
                                <p>Gestionamos la renta o venta de tus equipos. Nos hacemos cargo de la logística, web e-commerce y que tus equipos retornen en perfecto estado</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12 info">
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                                    src={require("../../images/about-us/pro2.png")}
                                    className="container-icon"
                                   
                                />
                            </div>
                            <div>
                                <p>Te ayudamos a mantener y captar clientes a través de tus clases en línea transmitiéndolas por medio de nuestra plataforma y redes sociales llegando a miles de seguidores a nivel nacional.</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-xs-12 info">
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                                    src={require("../../images/about-us/pro3.png")}                                    
                                    className="container-icon"
                                    />
                            </div>
                            <div>
                                <p>Puedes generar nuevos alcances y obtener futuros potenciales clientes a través del marketing y pauta publicitaria creada y realizada por EstoyFit con logos y marca de tu centro fitness o establecimiento deportivo.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12 info">
                            <div >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img
                                    src={require("../../images/about-us/pro4.png")}
                                    className="container-icon"
                                />
                            </div>
                            <div>
                                <p>Lograrás un impacto positivo en la comunidad donde vivimos y trabajamos especialmente en salud, fitness y bienestar.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
