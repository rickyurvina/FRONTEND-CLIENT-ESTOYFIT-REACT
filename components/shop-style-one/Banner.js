import React, { Component } from 'react';
import Link from 'next/link';
import Register from '../../components/Modal/Register';
import { Zoom } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import { URI } from '../../services/base';
import axios from 'axios';

const url = URI + "/getSlidersHomeFront "

class Banner extends Component {
    state = {
        open: false,
        data: [],

    };
    petitionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data.data });
            console.log("info banner gym", data);

        }).catch(error => {
            console.log(error.message);
        })
    }

    handleRegister = () => {
        this.setState({
            open: true
        });
    }

    componentDidMount() {
        this.petitionGet();
    }

    render() {
        const images = [
            require("../../images/banner/banner1.jpg"),
            require("../../images/banner/banner2.jpg"),
            require("../../images/banner/banner3.jpg"),
            require("../../images/banner/banner4.jpg"),
            require("../../images/banner/banner5.jpg")
        ];
        const { data } = this.state;

        const zoomOutProperties = {
            indicators: false,
            scale: 0.4,
            duration: 1000
        };

        return (
            <div className="main-banner">
                <Slide>
                    {data.map((item, idx) => (
                        <div className="main-banner" style={{
                            backgroundImage: `url(${item.url})`,
                            // backgroundPosition: 'center',
                            // backgroundSize: 'cover',
                            // backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="about-banner-content">
                                        {/* <img src={item.url} width="1000" height="500"/>*/}
                                        <h1 style={{ fontSize: "40px" }}>{item.title}<br /></h1>
                                        <h1 className="important" style={{ fontSize: "40px" }}>{item.subtitle}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
           
             
        );
    }
}

export default Banner;
    {/*}     <div className="main-banner slide-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="about-banner-content">
                                    <h1 style={{fontSize:"40px"}}>BUSCA <br />TU ACTIVIDAD <br /></h1>
                                    <h1 className="important" style={{fontSize:"40px"}}>FAVORITA</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-banner slide-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="about-banner-content">
                                    <h1 style={{fontSize:"40px"}}>BUSCA <br />TU ESTABLECIMIENTO DE <br /></h1>
                                    <h1 style={{fontSize:"40px"}} className="important">PREFERENCIA</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-banner slide-3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="about-banner-content">
                                    <h1 style={{fontSize:"40px"}}>CENTROS DEPORTIVOS</h1>
                                    <h1 style={{fontSize:"40px"}} className="important">EXCLUSIVOS</h1>
                                    <h1 style={{fontSize:"40px"}}> A TU DISPOSICIÓN</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-banner slide-4">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="about-banner-content">
                                    <h1 style={{fontSize:"40px"}}>DESAFÍA <br />TUS <br /></h1>
                                    <h1 style={{fontSize:"40px"}} className="important">LÍMITES</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-banner slide-5">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="about-banner-content">
                                    <h1 style={{fontSize:"40px"}}>PAGA<br />EN BASE A TU <br /></h1>
                                    <h1 style={{fontSize:"40px"}} className="important">DISPONIBILIDAD</h1>
                                </div>
                            </div>
                        </div>
                </div>*/}