import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';
import { connect } from 'react-redux';
import FrequentQuestions from '../Modal/FrequentQuestions';
import Register from '../../components/Modal/Register';
import Help from '../Modal/Help';
import SearchSugestion from '../searchSugestions';
import Router from 'next/router';
import Cart from '../Modal/Cart';
import { logout, updateCity } from '../../store/actions/actions';
import { Products } from '../../components/shop-style-one/Products';

class TopHeader extends Component {
	state = {
		display: false,
		open: false,
		openRegister: false,
		// show: false,
		searchForm: true,
		collapsed: true,
		showHelp:false
	};
	componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
	handleLogin = () => {
		const { isLogged } = this.props;
		if (isLogged) {
			this.props.logout();
		} else {
			Router.push("/login");
		}
	}

	handleCart = () => {
		this.setState(prevState => {
			return {
				display: !prevState.display
			};
		});
	}

	handleWishlist = () => {
		this.setState((prevState) => {
			return {
				display: !prevState.display,
			};
		});
	};
	handleSearchForm = () => {
		this.setState(prevState => {
			return {
				searchForm: !prevState.searchForm
			};
		});
	}

	handleRegister = (e) => {
		console.log('HANDLE REGIRTEEE')
		e.preventDefault();
		this.setState({
			openRegister: true
		});
	}
	toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

	closeModal = () => {
		this.setState({
			openRegister: false
		});
	}

	showFq = (e) => {
		console.log('HAMNOTHEKSSS')
		e.preventDefault();
		this.setState({
			open: true
		});
	}

	closeFq = () => {
		this.setState({
			open: false
		});
	}

	showHelp = (e) => {
		console.log('HAMNOTHEKSSS')
		e.preventDefault();
		this.setState({
			showHelp: true
		});
	}

	closeHelp = () =>{
		this.setState({
			showHelp:false
		})
	}

	actualizeCity = async (e, city) => {
        e.preventDefault();
        const { updateCity, userData, isLogged } = this.props;
        updateCity(city);

        if (isLogged) {
            const response = await setCityUser(city, userData);
            console.log('RESPONSE SET CITY ', response)
            // const responseBranchs = response.data.data;
        }

    }

	

	render() {
		// console.log('IN TOP HEADER',this.props.userData.userData.name)
	
		const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const { userData, isLogged } = this.props;

        const textLogin = (!isLogged) ? 'Iniciar Sesión' : 'Salir';

        let { products } = this.props;
		return (
			<React.Fragment>
				<div className="top-header">
					<div className="container-head">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<ul className="top-header-nav">
									<li>
										<Link href="/about-us">
											<a>Acerca de nosotros</a>
										</Link>
									</li>
									{/* <li>
										<a href="#products">Nuestros gimnasios</a>
									</li> */}
									<li>
										<a href="#" onClick={this.showFq}>Preguntas frecuentes</a>
									</li>
									<li>
										<a href="#" onClick={this.handleRegister}>Contáctanos</a>
									</li>
									<li>
										<a href="#" onClick={this.showHelp}>Ayuda</a>
									</li>
								{/*	<li>
										<a href="/vacancies">Vacantes</a>
								</li>*/}
								{/*}	<li>
									<a href="/vacancies">Trabaja con Nosotros</a>
								</li>*/}
									<li className="" style={{ zIndex: '2' }}>
										{/*<SearchSugestion />*/}
										{/* <div className='search-box'>
										<form className="search-form">
											<input className="search-input" name="search" placeholder="Search" type="text" />
											<button className="search-button" type="submit">
												<i className="fas fa-search"></i>
											</button>
										</form>
									</div> */}

									</li>
									
								</ul>
							</div>




							<div className="col-lg-6 col-md-6">
								<ul className="top-header-right-nav">




								<li className="option-item">
								<Link href="#">
									{/* <a>{textLogin}aaaaa</a> */}
									<a
										onClick={(e) => {
											e.preventDefault();
											this.handleLogin()
										}}
									>
										{textLogin}
									</a>
								</Link>
							</li>
							{isLogged &&
								<>
									{/* <div className="option-item">
										<Link href="#">
											<a
												data-toggle="modal"
												data-target="#shoppingWishlistModal"
												onClick={(e) => {
													e.preventDefault();
													// this.handleWishlist();
												}}
											>
												Favoritos <i className="far fa-heart"></i>
											</a>
										</Link>
									 </div> */}
									<li className="option-item">
										<Link href="#">
											<a
												onClick={(e) => {
													e.preventDefault();
													this.handleCart()
												}}
											>
												Carro de Compras({products.length}) <i className="fas fa-shopping-bag"></i>
											</a>
										</Link>
									</li>
								</>
							}





									<li>
										<a href="user-account"> {this.props.userData.userData && `Hola, ${this.props.userData.userData.name}`} </a>
									</li>
									{/* <li>
										<Link href="#">
											<a
												data-toggle="modal"
												data-target="#shoppingWishlistModal"
												onClick={(e) => {
													e.preventDefault();
													this.handleWishlist();
												}}
											>
												Favoritos <i className="far fa-heart"></i>
											</a>
										</Link>
									</li> */}
									{/* <li>
                                        <Link href="/compare">
                                            <a>Comparar <i className="fas fa-balance-scale"></i></a>
                                        </Link>
                                    </li> */}
									<li>
										<div className="languages-list">
											<select>
												<option value="3">Español</option>
												<option value="1">Ingles</option>
												<option value="2">Aleman</option>
											</select>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<FrequentQuestions start={this.state.open} closeFq={this.closeFq} />
				<Register start={this.state.openRegister} closeModal={this.closeModal} />
				<Help start={this.state.showHelp} closeHelp={this.closeHelp}/>

				{this.state.display ? <Cart onClick={this.handleCart} /> : ''}
             

				
			{/*}	{this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}*/}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.addedItems,
		userData: state.userData,
		isLogged: state.isLogged,
		sessionCity: state.sessionCity
		
	};
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logout()) },
        updateCity: (city) => { dispatch(updateCity(city)) },
    }
}

export default connect(mapStateToProps,
	mapDispatchToProps
	)(TopHeader);
