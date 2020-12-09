import React, { Component } from 'react';
import Link from 'next/link';

class Register extends Component {
    _isMounted = false;

    state = {
        show: false,
        start: false,
        textSend: ''
    };

    /* componentDidMount() {
        this.setState({
            open: this.props.start
        });
    } */

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('NEXT PROPS => ',nextProps.start)
    //     this.setState({
    //         show: nextProps.start
    //     });
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.start !== this.props.start) {
            this.setState({ show: nextProps.start });
        }
    }

    closeModal = (e) => {
        this._isMounted = true;
       
        e.preventDefault();
        this.setState({
            show: false
        });
        this.props.closeModal();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    send = () => {
        this.setState({ textSend: "Tu mensaje ha sido enviado, nos pondremos en contacto contigo." })
    }

    render() {
        let { show, textSend } = this.state;
        return (
            <div className={`register-popup ${show ? 'is-visible' : ''}`} role="alert">
                <div className="register-popup-container">
                    <div className="container">

                        <h3>Registra Tu Establecimiento</h3>

                        <div className="register-container">

                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="NOMBRE Y APELLIDO" name="name" required={true} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="NOMBRE ESTABLECIMIENTO" name="name" required={true} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="TELEFONO MÓVIL" name="name" required={true} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" className="form-control" placeholder="E-MAIL" name="name" required={true} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <textarea className="form-control" rows="8" placeholder="COMENTARIOS">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span style={{ color: "white" }}> {textSend} </span>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="register-popup-button col-lg-12">
                                        <button type="submit" onClick={this.send}>ENVIAR</button>
                                    </div>
                                </div>

                            </form>
                        </div>


                    </div>
                    <Link href="#">
                        <a onClick={this.closeModal} className="register-popup-close"></a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Register;
