import React, { Component } from 'react';
import Link from 'next/link';

class Result extends Component {
    render() {
        return (
            <div className="container container-result">
                <h6 className="result-h6">Mostrando n resultados</h6>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={require("../../../../images/blog-images/img4-550x550.jpg")} className="img-gym"></img>
                    </div>
                    <div className="col-lg-8">
                        <h5 className="gym-name-h5">Nombre del Gym</h5><h6 className="gym-ubication-h6">Ubicación</h6>
                        {/* Map de passes desde base */}
                        <a href="#" style={{ color: 'black' }}>
                            <div className="row pass">
                                <div className="col-sm-6">
                                    <p className="pass-name"><img className="pass-icon" src={require("../../../../images/passes/pase_rojo.png")}></img>Pase Diario</p>
                                </div>
                                <div className="col-sm-6 info-pass">
                                    <small>Desde</small>
                                    <span>
                                        <span className="value-before">$5</span>
                                        <span className="value-after">$3</span>
                                    </span>
                                    <div className="value-off">40% OFF</div>
                                </div>
                            </div>
                        </a>

                        <div className="row pass">
                            <div className="col-sm-4">
                                <div className="class-item">
                                    Levantamiento Olimpico
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="class-item">
                                    Gym Total
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="class-item">
                                    <strong>Crossfit</strong>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="class-item">
                                    Kick Boxing
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="class-item">
                                    Calistenia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
