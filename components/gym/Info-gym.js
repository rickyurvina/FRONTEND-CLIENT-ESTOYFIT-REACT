import React, { Component } from 'react';
import Link from 'next/link';
import { Zoom } from 'react-slideshow-image';

class Banner extends Component {
    render() {
        const images = [
            'https://i.pinimg.com/originals/c8/51/5a/c8515a695eb660bb2a3d66f38479f1b1.jpg',
            'https://fondosmil.com/fondo/4041.jpg',
            'https://images.hdqwalls.com/wallpapers/gym-girl.jpg',
            'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701968232.jpg'
        ];

        const zoomOutProperties = {
            indicators: false,
            scale: 0.4,
            duration: 1500
        };

        return (
            <div className="info-gym" >
                <div>
                    <div className="row row-margin text">
                        <div className="col-lg-6 col-md-12 info-box">
                            <h6>Clases y actividades</h6>
                            <div className="">
                                <p>Haga clic en las clases paraa saber mas</p>
                            </div>
                            <div className=" margin-top-customer">
                                <ul className="list-group list-group-horizontal-md ul-outline" style={{ border: 0 }}>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x"></i><span><small> ESTIRAMIENTO</small></span></a>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x"></i><span><small> HIIT</small></span></a>
                                    <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-dumbbell fa-2x"></i><span><small> SMART SHAPE</small></span></a>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x"></i><span><small> HIT</small></span></a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 info-box">
                            <h6>Diferenciales del Local</h6>
                            <a href="#"><p>!Has click en cualquier diferencial y conoce de qué se trata cada uno!</p></a>
                            <div className="margin-top-customer sidebar-social">
                                <ul className="list-group list-group-horizontal-md ul-outline">
                                    <a href="#" className="list-group-item list-group-item-action icon "><i className="fas fa-dumbbell fa-2x">aa</i></a>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x">aa</i></a>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x">aa</i></a>
                                    <a href="#" className="list-group-item list-group-item-action icon"><i className="fas fa-dumbbell fa-2x">aa</i></a>
                                </ul>
                            </div>
                            <div className="margin-top-customer">
                                <a href="#"><p>CONOCE TODOS LOS DIFERENCIALES QUE TIENE ESTOY FIT</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-lg-6 col-md-12 grid-place ">
                            <div className="row text-place">
                                <div className="col-sm-8">
                                    <small>HORARIOS</small>
                                </div>
                            </div>
                            <div className="row text-place ">
                                <div className="col-lg-6 col-md-12 contact">
                                    <p className="text-justify text-place">
                                        <div style={{color: "#FE5000"}}>Lunes a Viernes</div>
                                        6:00 hs a 19:00 hs
                                        <br/>
                                        <div style={{color: "#FE5000"}}>Sábados</div>
                                        Cerrado<br/>
                                        <div style={{color: "#FE5000"}}> Domingos y feriados </div>
                                        Cerrado
                                    </p>
                                </div>
                                <div className="col-lg-4 offset-md-2 contact">
                                    <div className="row">
                                        <div className="col-sm-12 button-gym">
                                            <a href="" className="link-gym">
                                                <i className="fab fa-facebook-square"></i>
                                                &nbsp;&nbsp;Facebook
                                            </a>
                                        </div>
                                        <div className="col-sm-12 button-gym">
                                            <a href="" className="link-gym">
                                                <i className="fab fa-whatsapp"></i>
                                                &nbsp;&nbsp;Whatsapp
                                            </a>
                                        </div>
                                        <div className="col-sm-12 button-gym">
                                            <a href="" className="link-gym">
                                                <i className="fas fa-phone"></i>
                                                &nbsp;&nbsp;Llamada
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 grid-place">
                            <Zoom {...zoomOutProperties}>
                                {images.map((each, index) => (
                                    <div key={index} style={{ width: "auto", height: "100%" }}>
                                        <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={each} />
                                    </div>
                                ))}
                            </Zoom>
                        </div>
                    </div>
                    <div className="row row-margin-info text">
                        <div className="col-lg-6 col-md-12 img-map">
                            <img src={require("../../images/custom-images/map.png")} style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="col-lg-6 info-box ">
                            <h6>UBICACIÓN</h6>
                            <div className="margin-top-customer">
                                Av. RIO AMAZONAS-QUITO, PC-170506 ENTRE JUAN JOSÉ VILLALENGUA Y UNION NACIONAL DE PERIODISTAS
                            </div>
                            <div className="desc-box">
                            Hiit45 quiere que TÚ te motives y te atrevas a SER TÚ MEJOR VERSIÓN!
                                <a href="#">SABER MÁS</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Banner;
