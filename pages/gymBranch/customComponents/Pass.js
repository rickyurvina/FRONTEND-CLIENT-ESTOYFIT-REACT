import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import AddToCart from '../../addToCart/AddToCart';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
	loop: true,
	nav: true,
	dots: true,
	items: 4,
	center: true,
	autoplayHoverPause: true,
	autoplay: true,
	navText: ["<i className='fas fa-chevron-left'></i>", "<i className='fas fa-chevron-right'></i>"],
};

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

class PassCarousel extends Component {
	state = {
		display: false,
		panel: true,
	};

	componentDidMount() {
		this.setState({ display: true });
	}

	render() {
		const { passes } = this.props;
		return (
			<div className="pass-area">
				<div className="pass-title">
					<h3>LISTO PARA ENTRENAR?</h3>
					<h5>ESCOGE TU PASE</h5>
				</div>

				<div className="col-md-10 offset-md-1 pass-cards">
					{this.state.display ? (
						<OwlCarousel className="owl-theme" {...options}>
							{passes.length > 0 && (
								<>
									{passes.map((each, index) => (
										<div className="card-pass">
											<div className="card pass-month">
												<img
													className="card-img-top"
													src={passesColors[each.color]}
													alt="Card image cap"
												/>
												<div className="card-body">
													<h5 className="card-inner">{each.name}</h5>
													<div className="offert">
														{each.expiration_date && (
															<p className="card-text offert">
																Oferta válida hasta el{' '}
																{each.expiration_date.split(' ')[0]} a las{' '}
																{each.expiration_date.split(' ')[1]}hs Sólo para nuevos
																clientes
															</p>
														)}
														Antes:
														<p className="offert real-value">${each.original_price}</p>
														Ahora:
														<p className="offert offert-value">${each.train_now_price}</p>
													</div>

													{/* <a href="#" className="btn btn-primary btn-block btn-pass">
														Añadir a carrito
													</a> */}
													{/* <AddToCart {...each} /> */}
													<AddToCart product={each} />
												</div>
											</div>
										</div>
									))}
								</>
							)}

							{/* <div className="card-pass">
                            <div className="card pass-month">
                                <img className="card-img-top" src={require("../../../images/passes/pase_turquesa.png")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-inner">Pase mensual</h5>
                                    <div className="offert">
                                    <p className="card-text offert">Oferta válida hasta el 21/08/2020 a las 23:59hs
                                                                        Sólo para nuevos clientes</p>
                                    Antes:<p className="offert real-value">$70</p>
                                    Ahora:<p className="offert offert-value">$60</p>                                                                         
                                    </div>
                                    
                                    <a href="#" className="btn btn-primary btn-block btn-pass">Obtener</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-pass">
                            <div className="card pass-threemonth">
                                <img className="card-img-top" src={require("../../../images/passes/pase_verde.png")} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-inner">Pase trimestral</h5>
                                    <div className="offert">
                                    <p className="card-text offert">Oferta válida hasta el 21/08/2020 a las 23:59hs
                                                                        Sólo para nuevos clientes</p>
                                    Antes:<p className="offert real-value">$210</p>
                                    Ahora:<p className="offert offert-value">$170</p>
                                    </div>

                                    <a href="#" className="btn btn-primary btn-block btn-pass">Obtener</a>
                                </div>
                            </div>
                        </div> */}
						</OwlCarousel>
						
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default PassCarousel;
