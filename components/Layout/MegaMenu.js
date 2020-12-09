import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Cart from '../Modal/Cart';
import { logout, updateCity } from '../../store/actions/actions';
import Autosuggest from 'react-autosuggest';
import SearchSugestion from '../searchSugestions';
import { Products } from '../../components/shop-style-one/Products';
import { getGymBranchs } from '../../services/gymService';
import { setCityUser } from '../../services/authService';


class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: true,
        collapsed: true,
      
    };

    //TESTING PRODUCTOS FILTER
   
    //End Testing

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

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
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
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const { userData, isLogged } = this.props;

        const textLogin = (!isLogged) ? 'Iniciar Sesión' : 'Salir';

        let { products } = this.props;
        // console.log('USER DATAXXX ',userData, isLogged, products)
        return (
            <React.Fragment>
                <div className="navbar-area">
                    <div id="navbar" className="comero-nav">
                        <div className="container-gym">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="/">
                                    <img src={require("../../images/estoy-fit-logo.png")} style={{ width: '200px', height: '70px' }} alt="logo" />
                                </a>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    style={{ marginLeft: '35%' }}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item p-relative">
                                            <a className="nav-link active" href="/">
                                                Inicio
                                                {/*<i className="fas fa-chevron-down"></i>*/}
                                            </a>                                           
                                        </li>

                                        <li className="nav-item megamenu">
                                            <a className="nav-link" href="#products">
                                                Ciudades
                                              <i className="fas fa-chevron-down"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Sierra</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="#">
                                                                            <a href="#" onClick={(e) => this.actualizeCity(e, 1)}>Quito</a>
                                                                        </Link>
                                                                    </li>                                                                

                                                                    <li>
                                                                        <Link href="#">
                                                                            <a href="#" onClick={(e) => this.actualizeCity(e, 3)}>Cuenca</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="#">
                                                                            <a href="#" onClick={(e) => this.actualizeCity(e, 5)}>Ambato</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                    <Link href="#">
                                                                        <a href="#" onClick={(e) => this.actualizeCity(e, 4)}>Loja</a>
                                                                    </Link>
                                                                </li>

                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Costa</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="#">
                                                                            <a href="#" onClick={(e) => this.actualizeCity(e, 2)}>Guayaquil</a>
                                                                        </Link>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="submenu-title">Amazonía</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="#">
                                                                            <a href="#" onClick={(e) => this.actualizeCity(e, 6)}>Macas</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            {/*  <div className="col">
                                                            <h6 className="submenu-title">Amazonía</h6>

                                                            <ul className="megamenu-submenu top-brands">
                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner1.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner2.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner3.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner4.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner5.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner6.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>*/}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item megamenu">
                                            <a className="nav-link" href="#activities">
                                                Actividades
                                                {/*<i className="fas fa-chevron-down"></i>*/}
                                            </a>
                                            {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Clothing</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Coats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Jackets</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Blazers</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Dresses</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Trousers</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Jeans</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Sweatshirts</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>T-Shirts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Shoes</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Trainers</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Boots</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Heels</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Flats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Heeled Sandals</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Platforms</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Accessories</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Bags</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Glasses</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Jewellery</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>iPhone Cases</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Gadgets</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Hats & Beanie</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Purses</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Top Trending</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Popular Products</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                                        </li>

                                        <li className="nav-item megamenu">
                                            <a className="nav-link nav-link-know-more" href="#offerts">Ofertas
                                              {/*<i className="fas fa-chevron-down"></i>*/}
                                            </a>
                                            {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Clothing</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Coats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Jackets</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Jeans</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>T-Shirts</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Sweatshirts</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Knitwear</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Shirts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Shoes</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Trainers</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Boots</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Heels</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Flats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Heeled Sandals</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Sandals</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Platforms</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Heeled Sandals</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Accessories</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Bags</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Backpacks</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Glasses</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Earrings</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>iPhone Cases</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Mobile Accessories</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Socks</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Top Trending</h4>
                                                                        </div>
                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Popular Products</h4>
                                                                        </div>

                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                                        </li>

                                        <li className="nav-item megamenu">
                                            <a className="nav-link" href="/">Eventos
                                           {/*<i className="fas fa-chevron-down"></i>*/}
                                            </a>
                                            {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Clothing</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Coats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Jackets</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Jeans</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>T-Shirts</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Sweatshirts</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Knitwear</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Shirts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Shoes</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Trainers</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Boots</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Heels</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Flats</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Heeled Sandals</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Sandals</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Platforms</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Heeled Sandals</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Accessories</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Bags</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Backpacks</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Glasses</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Earrings</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>iPhone Cases</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Mobile Accessories</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Socks</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Top Trending</h4>
                                                                        </div>
                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Popular Products</h4>
                                                                        </div>

                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                                        </li>

                                        <li className="nav-item p-relative">
                                            <a className="nav-link" href="/about-us">
                                                Contáctanos
                                            {/*<i className="fas fa-chevron-down"></i>*/}
                                            </a>
                                            {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about">
                                                    <a className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sizing-guide">
                                                    <a className="nav-link">Sizing Guide</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery">
                                                    <a className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <a href="#" className="nav-link">Account</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login">
                                                            <a className="nav-link">{textLogin}</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/signup">
                                                            <a className="nav-link">Signup</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/cart">
                                                            <a className="nav-link">Cart</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart">
                                                    <a className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout">
                                                    <a className="nav-link">Checkout</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/compare">
                                                    <a className="nav-link">Compare</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/customer-service">
                                                    <a className="nav-link">Customer Service</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/login">
                                                    <a className="nav-link">{textLogin}</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/signup">
                                                    <a className="nav-link">Signup</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq">
                                                    <a className="nav-link">FAQs</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/error">
                                                    <a className="nav-link">Error 404</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-us">
                                                    <a className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>
                                      {/*  <li className="nav-item p-relative" style={{marginLeft: '7em'}}>
                                        <i
                                        // onClick={this.handleSearchForm}
                                        className="search-btn fas fa-search"
                                        // style={{
                                        //     display: this.state.searchForm ? 'none' : 'block'
                                        // }}
                                          ></i>
                                     
                                    </li>*/}


                                        {/* <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">Blog <i className="fas fa-chevron-down"></i></a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog">
                                                    <a className="nav-link">Blog Grid (3 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog2">
                                                    <a className="nav-link">Blog Grid (2 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog3">
                                                    <a className="nav-link">Blog Grid (1 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                                
                                                <Link href="/blog-details-two">
                                                    <a className="nav-link">Blog Details Two</a>
                                                </Link>

                                                <Link href="/blog-details-three">
                                                    <a className="nav-link">Blog Details Three</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                   
                                    </ul>

                                    <div className="others-option">
                                       <div className="option-item" style={{position:'none', marginRight:'5.5em'}}>
                                           {/*} <i
                                                // onClick={this.handleSearchForm}
                                                className="search-btn fas fa-search"
                                                // style={{
                                                //     display: this.state.searchForm ? 'none' : 'block'
                                                // }}
                                ></i>*/}

                                         {/*}   <i
                                                onClick={this.handleSearchForm}
                                                className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                            ></i>*/}

                                            <div
                                                className="search-overlay search-popup"
                                                // style={{
                                                //     display: this.state.searchForm ? 'block' : 'none'
                                                // }}
                                                style={{display:'block'}}
                                            >
                                                <SearchSugestion />
                                                {/* <div className='search-box'>
                                                    <form className="search-form">
                                                        <input className="search-input" name="search" placeholder="Search" type="text" />
                                                        <button className="search-button" type="submit">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div> */}
                                           </div>
                                      </div>

                                      {/*}  <div className="option-item">
                                            <Link href="#">
                                              
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleLogin()
                                                    }}
                                                >
                                                    {textLogin}
                                                </a>
                                            </Link>
                                                </div>*/}
                                      {/*}  {isLogged &&
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
                                         {/*}       <div className="option-item">
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
                                                </div>
                                            </>
                                        }*/}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logout()) },
        updateCity: (city) => { dispatch(updateCity(city)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MegaMenu)

