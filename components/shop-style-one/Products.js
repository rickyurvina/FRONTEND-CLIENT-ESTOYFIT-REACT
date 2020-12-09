import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import AddToCart from '../Shared/AddToCart';
import AddToCompare from '../Shared/AddToCompare';
import { getGymBranchs } from '../../services/gymService.js';


//testing ru
import Rating from '@material-ui/lab/Rating';
import { Twitter, Facebook } from 'react-social-sharing'
import {
    FacebookShareButton,    
    TwitterShareButton,  
    WhatsappShareButton,   
    // Comment to sepaate, overwriting codesandbox behavior
    FacebookIcon,
    TwitterIcon, 
    WhatsappIcon,
    
} from "react-share"; 


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            modalData: null,
            beanchs: [],
            AllBranchs: [],
            sessionCity: 0,
            value: '',
            hover: -1,
            form: {
                id: '',
                rating_value: ''
            },
            url:'',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sessionCity !== this.props.sessionCity) {
            this.setState({ sessionCity: nextProps.sessionCity });
        }

        console.log('IN RECEIVE PROPS', nextProps.sessionCity)
        this.getGymBranchs(nextProps.sessionCity);
    }

    componentDidMount() {
        const { sessionCity } = this.props;
        const city = (sessionCity !== 0) ? sessionCity : 1;
        console.log('SESION CITY IN PRODUCTS', sessionCity, city)
        this.getGymBranchs(city);
    }

    getGymBranchs = async (city) => {
        this.setTabSection(city);
        const response = await getGymBranchs(city);
        const responseBranchs = response.data.data;

        const branchs = responseBranchs.filter(function (branch) {
            return branch.city == city;
        });

        this.setState({ AllBranchs: responseBranchs, branchs });
    }
    updateRating = async (id, form) => {
        const response = await updateRatingBranchs(id, form)
    }

    filterBranchs = async (city) => {
        const response = await getGymBranchs(city);
        const responseBranchs = response.data.data;

        // const { AllBranchs } = this.state;
        // const filteredBranchs = AllBranchs.filter(function (branch) {
        //     return branch.city == city;
        // });

        this.setState({ branchs: responseBranchs });
    }

    setTabSection = (city) => {
        let tablinks = document.getElementsByTagName("li");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }
        document.getElementById('city' + city).className += "current";
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
        const { value } = this.state;
        return (
            <section className="all-products-area pb-60" id="products">
                {/*  <div><br/><br/><br/><br/><br/><br/><br/></div>*/}

                <div className="container">
                    <div className="tab products-category-tab">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h2 className="h2-products"> Gimnasios </h2>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <ul className="tabs">
                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(1);
                                        }}
                                        id="city1"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Quito
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(2);
                                        }}
                                        id="city2"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Guayaquil
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(3);
                                        }}
                                        id="city3"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Cuenca
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(4);
                                        }}
                                        id="city4"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Loja
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(5);
                                        }}
                                        id="city5"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Ambato
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.openTabSection(e, 'tab1');
                                            this.filterBranchs(6);
                                        }}
                                        id="city6"
                                    >
                                        <span className="tabs-nav-text">
                                            <span className="dot"></span> Macas

                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <div className="row">
                                            {branchs && branchs.map((data, idx) => (
                                                <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
                                                                <a>
                                                                    <img src={data.main_image} alt="image" />
                                                                    {/* <img src={data.imageHover} alt="image" /> */}
                                                                </a>
                                                            </Link>

                                                            <ul>
                                                                <li>
                                                                    <FacebookShareButton     url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.id}`}  
                                                                    title={`Conoce este Gimnasion ${data.commercial_name}`}
                                                                    
                                                                    quote={`Conoce este Gimnasion ${data.commercial_name}`}>
                                                                        <FacebookIcon size={32} round />
                                                                    </FacebookShareButton>
                                                                </li>
                                                                <li>
                                                                <TwitterShareButton
                                                                title={`Conoce este Gimnasion ${data.commercial_name}`}
                                                               url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.id}`}
                                                              >
                                                               
                                                                <TwitterIcon size={32} round />
                                                              </TwitterShareButton>
                                                                </li>

                                                                <li>
                                                                < WhatsappShareButton
                                                                title={`Conoce este Gimnasion ${data.commercial_name}`}
                                                               url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.id}`}
                                                              >
                                                               
                                                                <WhatsappIcon size={32} round />
                                                              </ WhatsappShareButton>
                                                                </li>



                                                            {/*    <li>
                                                                    {
                                                                        this.compareButton(data.id)
                                                                    }
                                                                </li>*/}
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3>
                                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
                                                                    <a>{data.commercial_name}</a>
                                                                </Link>
                                                            </h3>

                                                            <div className="product-price">
                                                                {/* <span className="new-price">$15</span> */}
                                                            </div>
                                                            <div className="">
                                                                <Rating
                                                                    name="read-only"
                                                                    value={data.rating_value}
                                                                    precision={0.5}
                                                                    readOnly
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div id="tab2" className="tabs_item">
                                        <div className="row">
                                            {branchs && branchs.map((data, idx) => (
                                                <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                                <div className="single-product-box">
                                                    <div className="product-image">
                                                        <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                            <a>
                                                                <img src={data.main_image} alt="image" />
                                                                
                                                            </a>
                                                        </Link>

                            <ul>
                                <li>
                                    <Link href="#">
                                        <a
                                            data-tip="Quick View"
                                            data-place="left"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleModalData(data)
                                            }
                                            }
                                        >
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a data-tip="Add to Wishlist" data-place="left">
                                            <i className="far fa-heart"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    {
                                        this.compareButton(data.id)
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="product-content">
                            <h3>
                                <Link href="/product/[id]" as={`/product/${data.id}`}>
                                    <a>{data.commercial_name}</a>
                                </Link>
                            </h3>

                            <div className="product-price">
                                <span className="new-price">$15</span>
                            </div>

                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                            <AddToCart {...data} />
                        </div>
                    </div>
                </div>
                                            ))}
                                        </div>
                                    </div >

            <div id="tab3" className="tabs_item">
                <div className="row">
                    {branchs && branchs.map((data, idx) => (
                        <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                            <div className="single-product-box">
                                <div className="product-image">
                                    <Link href="/product/[id]" as={`/product/${data.id}`}>
                                        <a>
                                            <img src={data.main_image} alt="image" />
                                            
                                        </a>
                                    </Link>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-tip="Quick View"
                                                    data-place="left"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.openModal();
                                                        this.handleModalData(data)
                                                    }
                                                    }
                                                >
                                                    <i className="far fa-eye"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a data-tip="Add to Wishlist" data-place="left">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            {
                                                this.compareButton(data.id)
                                            }
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/product/[id]" as={`/product/${data.id}`}>
                                            <a>{data.commercial_name}</a>
                                        </Link>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">$15</span>
                                    </div>

                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>

                                    <AddToCart {...data} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                {
                    modalOpen ? <QuickView
                        closeModal={this.closeModal
                        }
                        modalData={this.state.modalData}
                    /> : ''
                }
            </section>
        );
    }
}


// export default Products;


const mapStateToProps = (state) => {
    return {
        sessionCity: state.sessionCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCity: (city) => { dispatch(updateCity(city)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
