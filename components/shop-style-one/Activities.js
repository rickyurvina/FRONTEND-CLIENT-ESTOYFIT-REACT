import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import AddToCart from '../Shared/AddToCart';
import AddToCompare from '../Shared/AddToCompare';
import { getGymBranchsByActivity } from '../../services/gymService.js';
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

class Activities extends React.Component {
    state = {
        modalOpen: false,
        modalData: null,
        beanchs: [],
        AllBranchs: [],
        sessionCity: 0
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.sessionCity !== this.props.sessionCity) {
            this.setState({ sessionCity: nextProps.sessionCity });
        }

        // console.log('IN RECEIVE PROPS', nextProps.sessionCity)
        this.getGymBranchs(nextProps.sessionCity);
    }

    componentDidMount() {
        const { sessionCity } = this.props;
        this.getGymBranchs(sessionCity);
    }

    getGymBranchs = async (sessionCity) => {
        console.log('CITY => SSSS ', sessionCity)
        sessionCity = (sessionCity !== 0) ? sessionCity : '1';
        const response = await getGymBranchsByActivity(3, sessionCity);
        const responseBranchs = response.data.data;
        console.log('BRANCHS ggggggggg => ', responseBranchs)

        const branchs = responseBranchs.filter(function (branch, i) {
            let bss = JSON.parse(branch.services_selected);
            // bss = bss.split(",");
            // console.log('BESSS ',bss, sessionCity)
            const index = bss.indexOf(parseInt(sessionCity));
            console.log('BESSS ',bss, sessionCity, index)
            return index != -1;
        });

        console.log('FILTERD ', branchs)
        if (branchs.length > 0) {
            let serviceFirstBranch = JSON.parse(branchs[0].services_selected);

            // serviceFirstBranch = serviceFirstBranch.split(",");

            this.setTabSection(serviceFirstBranch[0])
        }

        this.setState({ AllBranchs: responseBranchs, branchs: branchs });
    }

    filterBranchs = async (activity) => {
        const { AllBranchs } = this.state;
        const filteredBranchs = AllBranchs.filter(function (branch) {

            let bss = branch.services_selected;
            const index = bss.indexOf(activity);
            return index != -1;
        });

        // if (filteredBranchs.length > 0) {
        //     let serviceFirstBranch = JSON.parse(filteredBranchs[0].services_selected);

        //     serviceFirstBranch = serviceFirstBranch.split(",");

        //     this.setTabSection(serviceFirstBranch[0])
        // }

        this.setState({ branchs: filteredBranchs });
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

    setTabSection = (service) => {
        console.log('SERVICE =? SESS ',service)
        // let tablinks = document.getElementsByClassName("tab-activity"); console.log('TABLINKS ',tablinks)
        let  tablinks = document.getElementsByTagName("a");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("activities-tab", "");
        }
        if(service<=11){
            document.getElementById('service' + service).classList.add("activities-tab");
        }
        
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-pane");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace("show active", "");
        }

        tablinks = document.getElementsByTagName("a");
        // let tablinks = document.getElementsByClassName("tab-activity");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("activities-tab", "");
        }

        document.getElementById(tabNmae).className += " show active";
        evt.currentTarget.className += " activities-tab";
    }
    render() {
        let { products } = this.props;
        const { modalOpen, branchs } = this.state;
        return (
            <div className="container-activities" id="activities">
            {/*    <div><br/><br/><br/><br/><br/></div>*/}
                <h3>ACTIVIDADES MÁS SOLICITADAS</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 center-pills">
                        <ul className="nav nav-pills nav-justified mb-3 " id="pills-tab" role="tablist">
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service1" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('37') }} style={{ 'paddingTop': "14px" }}>AERÓBICAS</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service3" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('369') }} style={{ 'paddingTop': "14px" }}>BAILOTERAPRIA</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service4" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('74') }} style={{ 'paddingTop': "14px" }}>CROSSFIT</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service5" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('6') }} style={{ 'paddingTop': "14px" }}>PILATES</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service6" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('16') }} style={{ 'paddingTop': "14px" }}>MUSCULACIÓN</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service7" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('4') }} style={{ 'paddingTop': "14px" }}>SPINNING</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service8" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('70') }} style={{ 'paddingTop': "14px" }}>TRX</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service9" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('28') }} style={{ 'paddingTop': "14px" }}>BOX</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service10" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('277') }} style={{ 'paddingTop': "14px" }}>CARDIO</a>
                        </li>
                        <li className="nav-item tab-activity">
                            <a className="nav-link tab-grey" id="service11" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'aero'); this.filterBranchs('52') }}>ENTRENAMIENTO FUNCIONAL</a>
                        </li>
                    </ul>
                        </div>
                    </div>
                </div>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="aero" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="container">
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
                                                                    title={`Conoce este Gimnasion ${data.commercial_name}`}>
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
                                                    <Link href="/product/[id]" as={`/product/${data.id}`}>
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

                                                {/* <AddToCart {...data} /> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="baile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cross" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="funcional" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pilates" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="musculacion" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="spinning" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="trx" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="box" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cardio" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="container">
                            <div className="row">
                                {branchs && branchs.map((data, idx) => (
                                    <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/gymBranch/[id]" as={`/gymBranch/${data.id}`}>
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
                                                    
                                                </div>

                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessionCity: state.sessionCity
    }
}

export default connect(
    mapStateToProps
)(Activities)
