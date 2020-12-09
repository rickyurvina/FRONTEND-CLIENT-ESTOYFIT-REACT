import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment';
import AddToCart from '../../../pages/addToCart/AddToCart';

const passesColors = [
    require('../../../images/passes/pase_fucsia.png'),
    require('../../../images/passes/pase_naranja.png'),
    require('../../../images/passes/pase_turquesa.png'),
    require('../../../images/passes/pase_verde.png'),
    require('../../../images/passes/pase_violeta.png'),
    require('../../../images/passes/pase_amarillo.png'),
    require('../../../images/passes/pase_rojo.png'),
    require('../../../images/passes/pase_rosa.png'),
];

class Result extends Component {
    state = {
        data: [],
        suggestionId: 0,
        categoryA: ["1", "2", "3"],
        categoryB: ["4"],
        categoryC: ["5", "6"]
    };

    componentWillReceiveProps(nextProps) {

        if (nextProps.data !== this.props.data) {
            this.setState({ data: nextProps.data });
        }

        if (nextProps.suggestionId !== this.props.suggestionId) {
            this.setState({ suggestionId: nextProps.suggestionId });
        }
    }

    render() {
        const { data, suggestionId, categoryA, categoryB, categoryC } = this.state;
        console.log('SUGESTION ID ', suggestionId)
        let now = moment(new Date());
        let time = moment(new Date()).format("HH:mm:ss");

        return (
            <div className="container container-result">
                <h6 className="result-h6">Mostrando {data.length} resultados</h6>
                <div className="row">
                    {(data && (categoryA.indexOf(suggestionId) > - 1)) &&
                        data.map((item, i) => {
                            return (<div className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item">
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <Link href="/gymBranch/[id]" as={`/gymBranch/${item.id}`}>
                                            <a href="#"><img src={item.main_image }alt="image" ></img><br></br></a>
                                            
                                        </Link>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a
                                                        data-tip="Quick View"
                                                        data-place="left"
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
                                        </ul>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>{item.commercial_name}</a>
                                            </Link>
                                        </h3>
                                        {/* <div className="product-price">
                                            <span className="new-price text-muted" style={{ 'textDecoration': 'line-through', 'fontSize': '15px' }}> Antes: $10</span>
                                        </div> */}

                                        {/* <div className="product-price">
                                            <span className="new-price" >
                                                <span className="discount-tag"> -5% OFF</span><br />
                                                <span style={{ 'fontSize': '18px' }}> Ahora:  $4</span><br />
                                            </span>
                                        </div> */}

                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        {/* expiration_date */}

                                        {/* <AddToCart product={data} /> */}
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                    {(data && (categoryC.indexOf(suggestionId) > - 1)) &&
                        data.map((data, idx) => {

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

                                            <div className="product-price">
                                                <span className="new-price text-muted" style={{ 'textDecoration': 'line-through', 'fontSize': '15px' }}> Antes: ${data.original_price}</span>
                                            </div>

                                            <div className="product-price">
                                                <span className="new-price" >
                                                    <span className="discount-tag"> -{data.discount}% OFF</span><br />
                                                    <span style={{ 'fontSize': '18px' }}> Ahora:  ${data.train_now_price}</span><br />
                                                </span>
                                            </div>

                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>

                                            <AddToCart product={data} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {(data && (categoryB.indexOf(suggestionId) > - 1)) &&
                        data.map((item, i) => {
                            return (
                                <>
                                    <div className="col-lg-4">
                                        <Link href="/gymBranch/[id]" as={`/gymBranch/${item.id}`}>
                                            <a href="#"><img src={item.main_image} className="img-gym" style={{marginBottom: '3%'}}></img> </a>
                                        </Link>
                                    </div>
                                    <div className="col-lg-8">
                                        <h5 className="gym-name-h5">{item.commercial_name}</h5><h6 className="gym-ubication-h6">{item.sector}-{item.main_street}</h6>
                                        {/* Map de passes desde base */}
                                        {(item.passes && item.passes.length > 0) &&
                                            item.passes.map((passe, i) => {
                                                return (
                                                    <a href="#" style={{ color: 'black' }}>
                                                        <div className="row pass">
                                                            <div className="col-sm-6">
                                                                <p className="pass-name">
                                                                    <img
                                                                        className="pass-icon"
                                                                        src={passesColors[passe.color]}
                                                                    >
                                                                    </img>
                                                                    {passe.name}
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-6 info-pass">
                                                              {/*  <small>Desde</small>*/}
                                                                <span>
                                                                    <span className="value-before">$ {passe.original_price}</span>
                                                                    <span className="value-off">{passe.discount}% OFF</span>
                                                                    <span className="value-after">$ {passe.train_now_price}</span>
                                                                </span>
                                                                
                                                            </div>
                                                        </div>
                                                    </a>)
                                            })
                                        }

                                        <div className="row pass">
                                            {(item.services && item.services.length > 0) &&
                                                item.services.map((service, i) => {
                                                    return (
                                                        <div className="col-sm-4">
                                                            <div className="class-item">
                                                             {/*   {service.name}*/}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </>)
                        })
                    }


                </div>
            </div>
        );
    }
}

export default Result;
