import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getHotDealPasses } from '../../services/passeService.js';
import AddToCart from '../../pages/addToCart/AddToCart';
import moment from 'moment';
import Timer from 'react-compound-timer';
import Rating from '@material-ui/lab/Rating';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    // Comment to sepaate, overwriting codesandbox behavior
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,

} from "react-share";

class LastOfferts extends Component {
    state = {
        modalOpen: false,
        modalData: null,
        passes: [],
        sessionCity: 0
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.sessionCity !== this.props.sessionCity) {
            this.setState({ sessionCity: nextProps.sessionCity });
        }

        console.log('IN RECEIVE PROPS offers', nextProps.sessionCity)
        this.getHotDealPasses(nextProps.sessionCity);
    }

    componentDidMount() {
        const { sessionCity } = this.props;
        this.getHotDealPasses(sessionCity);
    }

    getHotDealPasses = async (sessionCity) => {
        const passes = await getHotDealPasses(sessionCity);
        console.log('PASESSSSS => ', passes.data.data)
        this.setState({ passes: passes.data.data });
    }

    render() {
        let now = moment(new Date());
        let time = moment(new Date()).format("HH:mm:ss");

        const { passes } = this.state;
        return (
            <section className="offer-area ptb-60" id="offerts">
                {/* <div><br /><br /><br /><br /><br /></div>*/}
                <div className="container">
                    <div className="col-lg-12">
                        <div className="col-lg-12" style={{ textAlign: "center" }}>
                            <h2>ÚLTIMAS OFERTAS</h2>
                        </div>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        {/*  className="tab-pane fade show active" */}
                        <div className="fade show active" id="aero" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="container">
                                <div className="row">
                                    {passes && passes.map((data, idx) => {
                                        const dif = moment.duration(moment(data.valid_to).diff(now)).asDays();
                                        let hour = moment(data.valid_to).format("HH:mm:ss");
                                        var hours = moment.duration(hour, "HH:mm");
                                        var times = moment.duration(time, "HH:mm");
                                        var diff = times.subtract(hours);
                                        return (
                                            <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                                                <div className="single-product-box">
                                                    <div className="product-image">
                                                        <Link href="/gymBranch/[id]" as={`/gymBranch/${data.branch_id}`}>
                                                            <a>
                                                                <img src={data.mainImage} alt="image" />
                                                                {/* <img src={data.imageHover} alt="image" /> */}
                                                            </a>
                                                        </Link>

                                                        <ul>


                                                        <li>
                                                        <FacebookShareButton     url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.branch_id}`}  
                                                        title={`Conoce esta Oferta: ${data.name}`}
                                                        
                                                        quote={`Conoce esta Oferta: ${data.name}`}>
                                                            <FacebookIcon size={32} round />
                                                        </FacebookShareButton>
                                                    </li>
                                                    <li>
                                                    <TwitterShareButton
                                                    title={`Conoce esta Oferta: ${data.name}`}
                                                   url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.branch_id}`}
                                                  >
                                                   
                                                    <TwitterIcon size={32} round />
                                                  </TwitterShareButton>
                                                    </li>

                                                    <li>
                                                    < WhatsappShareButton
                                                    title={`Conoce esta Oferta: ${data.name}`}
                                                   url={`https://master.d3n118xowrr5o5.amplifyapp.com/gymBranch/${data.branch_id}`}
                                                  >
                                                   
                                                    <WhatsappIcon size={32} round />
                                                  </ WhatsappShareButton>
                                                    </li>
                                                        {/*    <li>
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
                                                                    </li>*/}
                                                            {/* <li>
                                                                {
                                                                    this.compareButton(data.id)
                                                                }
                                                            </li> */}
                                                        </ul>
                                                    </div>

                                                    <div className="product-content">
                                                        <h3>
                                                            <Link href="/gymBranch/[id]" as={`/gymBranch/${data.branch_id}`}>
                                                                <a>{data.name}</a>
                                                            </Link>
                                                        </h3>
                                                        <h5> Finaliza en :</h5>
                                                        <div id="countdown-container">
                                                            <div id="countdown">
                                                                <span id="days">{parseInt(dif)}D:</span><span id="hours">{diff.hours()}H:</span>
                                                                <span id="minutes">{diff.minutes()}M</span>
                                                            </div>
                                                        </div>

                                                        {/* <Timer
                                                            initialTime={55000}
                                                            direction="backward"
                                                        >
                                                            {() => (
                                                                <React.Fragment>
                                                                    <div id="countdown-container">
                                                                        <div id="countdown">
                                                                            <span id="days"><Timer.Days />d</span> : <span id="hours"><Timer.Hours />h</span> :
                                                                            <span id="minutes"><Timer.Minutes />m</span> : <span id="seconds"><Timer.Seconds />s</span>
                                                                        </div>
                                                                    </div>
                                                                </React.Fragment>
                                                            )}
                                                        </Timer> */}

                                                        <div className="product-price">
                                                            <span className="new-price text-muted" style={{ 'textDecoration': 'line-through', 'fontSize': '15px' }}> Antes: ${data.original_price}</span>
                                                        </div>

                                                        <div className="product-price">
                                                            <span className="new-price" >
                                                                <span className="discount-tag"> -{data.discount}% OFF</span><br />
                                                                <span style={{ 'fontSize': '18px' }}> Ahora:  ${data.train_now_price}</span><br />
                                                            </span>
                                                        </div>

                                                        <div className="">
                                                        <Rating
                                                            name="read-only"
                                                            value={data.rating_value}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </div>
                                                        {/* expiration_date */}

                                                        <AddToCart product={data} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/custom-images/litfgym.jpg")} alt="image" className="img-offer" />

                                <div className="category">
                                    <h4>LIFT GYM</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>LIFT GYM</h3>
                                    <h3>$469.00</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a style={{color:"#FE5000"}}>Saber más</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/custom-images/knockout.jpg")} alt="image" className="img-offer"/>

                                <div className="category">
                                    <h4>KNOCKOUT</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>KNOCKOUT</h3>
                                    <strike>$36.00</strike>
                                    <h3>$26.00</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a style={{color:"#FE5000"}}>Saber más</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                </div>
            </section>
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
)(LastOfferts)

