import React, { Component } from 'react';
import Link from 'next/link';


class Help extends Component {
    _isMounted = false;

    state = {
        open: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.start !== this.props.start) {
            this.setState({ open: nextProps.start });
        }
    }

    closeModal = (e) => {
        this._isMounted = true;
        e.preventDefault();
        this.setState({
            open: false
        });
        this.props.closeHelp();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { open } = this.state;
        return (
            <div className={`fq-popup ${open ? 'is-visible' : ''}`} role="alert">
                <div className="fq-popup-container help" style={{ backgroundColor: 'black', color: "white", height: "500px" }}>
                    <div className="help-logo">
                        <img src={require('../../images/logo.png')}>

                        </img>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section-title help" style={{ backgroundColor: 'black', color: 'white' }}>
                                <h2><span className="dot"></span>SOLICITA TU AYUDA</h2>
                            </div>
                            <div className="row" style={{ textAlign: 'center' }}>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-3  title-help">
                                            NÚMEROS TELEFÓNICOS:
                                            </div>
                                        <div className="col-sm-9 ">
                                            {/* <li>num1</li><br />
                                            <li>num2</li><br />
                                            <li>num3</li><br /> */}
                                        </div>
                                        <div className="col-sm-3  title-help">
                                            WHATSAPP:
                                            </div>
                                        <div className="col-sm-9">
                                            <a href="">
                                                <img src={require('../../images/custom-images/whatsapp_logo.png')} style={{ width: '15%', height: '30%' }}></img>
                                            </a>
                                        </div>
                                        <div className="col-sm-3  title-help">
                                            CORREO ELECTRÓNICO:
                                            </div>
                                        <div className="col-sm-9">
                                            <br />
                                            <a href="#" style={{ color: 'white' }}>hola@estoyfit.com.ec</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 img-help">
                            <img src={require('../../images/blog-images/img1-550x550.jpg')}></img>
                        </div>
                    </div>


                    <Link href="#">
                        <a onClick={this.closeModal} className="fq-popup-close"></a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Help;
