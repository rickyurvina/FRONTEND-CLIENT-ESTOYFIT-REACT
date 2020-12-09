import React, { Component } from 'react';
import Link from 'next/link';
import { Slide } from 'react-slideshow-image';
import { URI } from '../../services/base';
import axios from 'axios';
const url = URI + "/getPublicity"

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
        const { data } = this.state;

        const zoomOutProperties = {
            indicators: false,
            scale: 0.4,
            duration: 1000
        };

        return (
            <Slide>
                {data.map((item, idx) => (
                  

                        <div className="second-banner item-bg2" style={{
                            backgroundImage: `url(${item.url})`,
                            // backgroundPosition: 'center',
                            // backgroundSize: 'cover',
                            // backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="second-banner-content">                                            
                                                <p>{item.title}</p>
                                                <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       


                    </div>
                ))}
            </Slide>


        );
    }
}

export default Banner;

{/*   <div className="second-banner item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="second-banner-content">
                                    <p>PUBLICIDAD</p>
                                </div>
                            </div>
                        </div>
                    </div>


        </div>*/}
