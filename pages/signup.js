import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import { signupAxiosUser } from '../services/authService.js';
import { signinUser, signinSuccessUserData } from '../store/actions/actions';
import { Spinner  } from 'react-bootstrap';

//const Signup = () => {
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            userData: []
        }
    }

    register = async (e) => {
        e.preventDefault();
        this.setLoading(true);

        const { name, lastName, email, password } = this.state;
        console.log('REGISTER  click ',name, lastName, email, password);
        const response = await signupAxiosUser(name, lastName, email, password);
        console.log('RESPONSED ',response);
        this.props.signinSuccessUserData(response.data);
        // this.props.addQuantity(id);
        console.log('USER DATA ',this.props.userData)
        this.setLoading(true);
        Router.push("/");
    }

    setLoading = (value) => {
        this.setState({ loading: value});
    }

    render() {
        const { loading, name, lastName, email, password } = this.state;
    return (
        <React.Fragment>
            <Navbar />
            <Breadcrumb title="Signup" />
            <section className="signup-area ptb-60">
                <div className="container">
                    <div className="signup-content">
                        <div className="section-title">
                            <h2><span className="dot"></span> Registrate</h2>
                        </div>

                        <form className="signup-form">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Escribe tu nombre"
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                    defaultValue={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Escribe tu apellido"
                                    onChange={(event) => this.setState({ lastName: event.target.value })}
                                    defaultValue={lastName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Escribe tu email"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                    defaultValue={email}
                                />
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Escribe tu contraseña"
                                    onChange={(event) => this.setState({ password: event.target.value })}
                                    defaultValue={password}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={(e)=>{this.register(e)}}
                            >
                                {loading && <Spinner animation="border" variant="primary" /> }
                                Registrarme
                            </button>
                            <Link href="/">
                                <a className="return-store">O retornar al inicio</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
            <Facility />
            <Footer />
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinSuccessUserData: (userData) => {dispatch(signinSuccessUserData(userData))},
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Signup)
