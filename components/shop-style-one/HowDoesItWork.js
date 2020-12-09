import React from 'react';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import AddToCart from '../Shared/AddToCart';
import AddToCompare from '../Shared/AddToCompare';
import { getGymBranchs } from '../../services/gymService.js';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';


// import './styled.css';
// import Container from '@bit/react-bootstrap.react-bootstrap.container';
// import Row from '@bit/react-bootstrap.react-bootstrap.row';


class HowDoes extends React.Component {

    state = {
        modalOpen: false,
        modalData: null,
        beanchs: []
    };

    componentDidMount() {
        this.getGymBranchs();
    }

    getGymBranchs = async () => {
        const branchs = await getGymBranchs();
        this.setState({ branchs: branchs.data.data });
    }


    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    compareButton = (id) => {
        let compare_exist = this.props.CompareProducts.filter(item => item.id === id);
        if (compare_exist.length > 0) {
            return (
                <Link href="#">
                    <a
                        data-tip="Already Added"
                        data-place="left"
                        onClick={e => {
                            e.preventDefault();
                        }
                        }
                        disabled={true}
                        className="disabled"
                    >
                        <i className="fas fa-sync"></i>
                    </a>
                </Link>
            )
        } else {
            return (
                <AddToCompare id={id} />
            )
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (data) => {
        this.setState({
            modalData: data
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen, branchs } = this.state;
        return (
            <section className="all-products-area pb-60">
                <div className="container">
                    <div className="tab products-category-tab">
                        <div className="row">
                            <div className="col-lg-12 title-div">
                                <h2 className="title"> Cómo funciona? </h2>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-4 row">
                                <div className="row text-center" >
                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <a href="#">
                                            <img
                                                className="rounded-circle img-thumbnail how-does-image"
                                                alt="100x100" src={require("../../images/HowToDo/img1.png")}
                                                data-holder-rendered="true"
                                                style={{ Color: "#323B40" }}
                                            />
                                            <div className="how-does-text"
                                                className={'display-4 font-weight-bold'}
                                                style={{ color: 'white', position: 'absolute', top: '55px', left: '125px' }}>
                                                1
                                            </div>
                                        </a>
                                        <h2 className="my-5 h4 text-image">Busca por zona o actividad</h2>
                                    </div>
                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <img
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="100x100" src={require("../../images/HowToDo/img2.png")}
                                            data-holder-rendered="true"
                                            style={{ Color: "#323B40" }}
                                        />
                                        <h1
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '55px', left: '125px' }}>
                                            2
                                        </h1>
                                        <h2 className="my-5 h4 text-image">Elige el plan que más se ajuste a tu necesidad</h2>
                                    </div>
                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <img
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="100x100" src={require("../../images/HowToDo/img3.png")}
                                            data-holder-rendered="true"
                                            style={{ width: '250px', height: '250px', overflow: 'hidden', Color: "#323B40" }}
                                        />
                                        <h1
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '75px', left: '125px' }}>
                                            3
                                        </h1>
                                        <h2 className="my-5 h4 text-image">Solicita el descuento y recibelo en tu correo</h2>
                                    </div>

                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <img
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="100x100" src={require("../../images/HowToDo/img4.png")}
                                            data-holder-rendered="true"
                                            style={{ width: '190px', height: '190px', overflow: 'hidden', Color: "#323B40" }}
                                        />
                                        <h1
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '55px', left: '125px' }}>
                                            4
                                        </h1>
                                        <h2 className="my-5 h4 text-image">Preséntate en el establecimiento y has efectivo tu descuento</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {modalOpen ? <QuickView
                    closeModal={this.closeModal}
                    modalData={this.state.modalData}
                /> : ''}
            </section>
        );
    }
}

export default HowDoes
