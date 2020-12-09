import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import { authAxiosUser, axiosGoogle } from '../services/authService.js';
import { signinUser, signinSuccessUserData, showMessage } from '../store/actions/actions';
import { Spinner } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// 1072764516395-10h534qa7m429ph46ogrr4uma2cih974.apps.googleusercontent.com

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: 'josegonzalez19891989@gmail.com',
			password: 'abcd',
			loading: false,
			isLogged: false,
			userId: '',
			name: '',
			email: '',
			picture: '',
			errorLogin: '',
		};
	}

	login = async (e) => {
		e.preventDefault();
		this.setState({errorLogin:''});
		this.setLoading(true);
		const { email, password } = this.state;
		console.log('LOGIN click ', email, password);
		const response = await authAxiosUser(email, password);
		console.log('RESPONSED ', response);
		if(response){
		   this.props.signinSuccessUserData(response.data);
		   Router.push('/');
		}else{
		   this.props.showMessage('Error credenciales invalidas');
		   this.setState({errorLogin:'Error credenciales invalidas'});
		} 
		
		// this.props.addQuantity(id);
		console.log('USER DATA ', this.props.userData);
		this.setLoading(false);
		
	};

	setLoading = (value) => {
		this.setState({ loading: value });
	};

	responseGoogle = async (resp) => {
		this.setState({errorLogin:''});
		console.log('RESPONSE FROM GOOGLE ',resp, resp.profileObj);
		const response = await axiosGoogle(resp.profileObj);
		console.log('RESPONSE GOOGLE ', response);
		if(response){
			this.props.signinSuccessUserData(response.data);
			Router.push('/');
		 }else{
			this.props.showMessage('Error credenciales invalidas');
			this.setState({errorLogin:'Error credenciales invalidas'});
		 } 
		console.log('USER DATA ', this.props.userData);
		this.setLoading(false);
	};

	responseFacebook = async (resp) => {
		this.setState({errorLogin:''});
		console.log('RESPONSE FACEBOOK => ', resp);
		const object = {
			'name': resp.name,
			'email': resp.email,
			'imageUrl': resp.picture.data.url
		};
		console.log('OBEJCT => ', object);
		const response = await axiosGoogle(object);
		console.log('RESPONSE FACEBOOK ', response);
		if(response){
			this.props.signinSuccessUserData(response.data);
			Router.push('/');
		 }else{
			this.props.showMessage('Error credenciales invalidas');
			this.setState({errorLogin:'Error credenciales invalidas'});
		 } 
		console.log('USER DATA ', this.props.userData);
		this.setLoading(false);

	};

	componentClicked = () => { };

	render() {
		const { loading, email, password } = this.state;
		// let fbContent;
		// if (this.state.isLogged) {
		// } else {
		//     fbContent = ( <FacebookLogin
		//         appId="600136190676279"
		//         autoLoad={true}
		//         fields="name,email,picture"
		//         onClick={this.componentClicked}
		//         callback={this.responseFacebook}
		//     /> )
		// }
		return (
			<React.Fragment>
				<Navbar />
				<Breadcrumb title="Login" />
				<section className="login-area ptb-60">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="login-content">
									<div className="section-title">
										<h2>
											<span className="dot"></span> Login
										</h2>
									</div>

									<form className="login-form">
										<div className="form-group">
											<label>Email</label>
											<input
												type="email"
												className="form-control"
												placeholder="Enter your name"
												id="name"
												name="name"
												onChange={(event) => this.setState({ email: event.target.value })}
												defaultValue={email}
											/>
										</div>

										<div className="form-group">
											<label>Password</label>
											<input
												type="password"
												className="form-control"
												placeholder="Enter your password"
												id="password"
												name="password"
												onChange={(event) => this.setState({ password: event.target.value })}
												defaultValue={password}
											/>
										</div>

										<button
											type="submit"
											className="btn btn-primary"
											onClick={(e) => {
												this.login(e);
											}}
										>
											{loading && <Spinner animation="border" variant="primary" />}
											Login
										</button>

										<Link href="#">
											<a className="forgot-password">Olvidaste tu contraseña?</a>
										</Link>
										<span style={{color: 'red'}}> {this.state.errorLogin}</span>
										<br/>
										<br/>
										<div className="row btns-login">
											<div className="col-lg-6">
												<div className="">
													<GoogleLogin
														clientId="1072764516395-10h534qa7m429ph46ogrr4uma2cih974.apps.googleusercontent.com"
														buttonText="Ingresa con Google"
														className="btn btn-google"
														onSuccess={this.responseGoogle}
														onFailure={this.responseGoogle}
														cookiePolicy={'single_host_origin'}
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div>
													{/* {fbContent} */}
													<FacebookLogin
														appId="600136190676279"
														autoLoad={false}
														fields="name,email,picture"
														scope="public_profile, email"
														returnScopes={true}
														onClick={this.componentClicked}
														callback={this.responseFacebook}
														textButton="Ingresa con Facebook"
														cssClass="btn btn-facebook"
													/>
												</div>
											</div>
										</div>


									</form>
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div className="new-customer-content">
									<div className="section-title">
										<h2>
											<span className="dot"></span> Nuevo usuario
										</h2>
									</div>

									<span>Crear una cuenta</span>
									<p>
										Crea una cuenta gratis en nuestra plataforma. Registrarte es muy fácil. Esto te
										permite hacer uso de nuestros servicios. Para empezar haz click.
									</p>
									<Link href="/signup">
										<a className="btn btn-light">Registrarme</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Facility />
				<Footer />
			</React.Fragment>
		);
	}
}

// export default Login;

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signinSuccessUserData: (userData) => {
			dispatch(signinSuccessUserData(userData));
		},
		showMessage: (message) => {
			dispatch(showMessage(message));
		},
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
