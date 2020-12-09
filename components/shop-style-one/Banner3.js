import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="padding-top-banner3">
            
            <div className="third-banner item-bg3">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="third-banner-content">
                                <h1>EXPANDA SU NEGOCIO</h1>
                                <p>MILES DE PERSONAS USARÁN ESTOYFIT PARA ESTAR EN FORMA, ASEGURÁNDOSE QUE SE ENCUENTRE <br />EL ESTABLECIMIENTO IDEAL PARA SU NECESIDAD</p>
                                <Link href="/about-us">
                                    <button className="btn-publish">PUBLICA TU ESTABLECIMIENTO</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Banner;
