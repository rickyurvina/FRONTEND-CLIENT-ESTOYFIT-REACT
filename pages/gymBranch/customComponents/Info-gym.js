import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image';
import moment from 'moment';

class Banner extends Component {
	state = {
		gymBranchData: {},
	};

	componentDidMount() {
		console.log('INFO GYM ', this.props.infoGym.parking);
	}

	render() {
		
		
		const imagesx = [
			'https://i.pinimg.com/originals/c8/51/5a/c8515a695eb660bb2a3d66f38479f1b1.jpg',
			'https://fondosmil.com/fondo/4041.jpg',
			'https://images.hdqwalls.com/wallpapers/gym-girl.jpg',
			'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701968232.jpg',
		];

		const zoomOutProperties = {
			indicators: false,
			scale: 0.4,
			duration: 1500,
		};

		const { infoGym, gallery } = this.props;
		const {
			description,
			facebook,
			mobile,
			phone,
			parking,
			week_from,
			week_to,
			week_from_afternoon,
			week_to_afternoon,
			services_selected,
			saturday_from,
			saturday_to,
			saturday_from_afternoon,
			saturday_to_afternoon,
			freeday_from,
			freeday_to,
			freeday_from_afternoon,
			freeday_to_afternoon,
			main_street,
			intersection,
			numeration,
		} = infoGym;
		var showParking;
		if(parking===1){
			showParking=<>
			<div> Cuenta con Parqueadero </div>
			</>;
		}else{
			showParking=<>
			<div> No Cuenta con Parqueadero </div>
			</>;
		}

		return (
			<>
			<div className="container-fluid" style={{ padding: 0 }}>
				<div className="info-gym">
					<div className="row-margin text">
						<div className="col-lg-6 col-md-12 info-box">
							<h6>Clases y actividades</h6>
							<div className="">
								<p>Haga clic en las clases paraa saber mas</p>
							</div>
							<div className=" margin-top-customer">
								<ul className="list-group list-group-horizontal-md ul-outline" style={{ border: 0 }}>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-spa fa-2x"></i>
										<p>Yoga</p>
									
								</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-walking fa-2x"></i>
										<p>Aerobics</p>
									</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-dumbbell fa-2x"></i>
										<p>Pilates</p>
									</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-bicycle fa-2x"></i>
										<p>Spinning</p>
									</a>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 info-box">
							<h6>Diferenciales del Local</h6>
							<a href="#">
								<p>!Has click en cualquier diferencial y conoce de qué se trata cada uno!</p>
							</a>
							<div className="margin-top-customer sidebar-social">
								<ul className="list-group list-group-horizontal-md ul-outline">
									<a href="#" className="list-group-item list-group-item-action icon ">
										<i className="fas fa-store fa-2x"></i>
										<p>Bar/confiteria</p>
									</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-shower fa-2x"></i>
										<p>Ducha</p>
									</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-car fa-2x"></i>
										<p>Estacionamiento</p>
									</a>
									<a href="#" className="list-group-item list-group-item-action icon">
										<i className="fas fa-glass-whiskey fa-2x"></i>
										<p>Bebidas</p>
									</a>
								</ul>
							</div>
						</div>
					</div>
					<div className="row-margin">
						<div className="col-lg-6 col-md-12 grid-place ">
							<div className="row text-place">
								<div className="col-sm-8">
									<small>HORARIOS</small>
								</div>
							</div>
							<div className="row text-place ">
								<div className="col-lg-6 col-md-12 contact">
									<div className="text-justify text-place">
										<div style={{ color: '#FE5000' }}>Lunes a Viernes</div>
										<div>
											{' '}
											Mañana {moment(week_from, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(week_to, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<div>
											{' '}
											Tarde {moment(week_from_afternoon, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(week_to_afternoon, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<br />

										<div style={{ color: '#FE5000' }}>Sábados</div>
										<div>
											{' '}
											Mañana {moment(saturday_from, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(saturday_to, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<div>
											{' '}
											Tarde {moment(saturday_from_afternoon, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(saturday_to_afternoon, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<br />

										<div style={{ color: '#FE5000' }}> Domingos y feriados </div>
										<div>
											{' '}
											Mañana {moment(freeday_from, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(freeday_to, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<div>
											{' '}
											Tarde {moment(freeday_from_afternoon, 'HH:mm:ss').format('hh:mm')} hs a{' '}
											{moment(freeday_to_afternoon, 'HH:mm:ss').format('hh:mm')} hs{' '}
										</div>
										<br />
										<div style={{ color: '#FE5000' }}> Parqueadero </div>
										<div> {showParking} </div>
										<br />

										<div style={{ color: '#FE5000' }}>Ubicación</div>
										<div> {main_street} </div>
										<div> {intersection} </div>
										<div> {numeration} </div>
									</div>
								</div>
								<div className="col-lg-4 offset-md-2 contact">
									<div className="row-margin">
										<div className="col-sm-12 button-gym">
											<a href={`${facebook}`} className="link-gym">
												<i className="fab fa-facebook-square"></i>
												&nbsp;&nbsp;Facebook
											</a>
										</div>
										<div className="col-sm-12 button-gym">
											<a href="" className="link-gym">
												<i className="fab fa-whatsapp"></i>
												&nbsp;&nbsp;Whatsapp {mobile}
											</a>
										</div>
										<div className="col-sm-12 button-gym">
											<a href="" className="link-gym">
												<i className="fas fa-phone"></i>
												&nbsp;&nbsp;Llamada {phone}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 grid-place">
							{gallery.length > 0 && (
								<Zoom {...zoomOutProperties}>
									{gallery.map((each, index) => (
										<div key={index} style={{ width: 'auto', height: 'auto' }}>
											<img
												style={{ objectFit: 'cover', width: '100%', height: '100%' }}
												src={each.url}
											/>
										</div>
									))}
								</Zoom>
							)}
						</div>
					</div>
					<div className="row-margin text">
						<div className="col-lg-6 col-md-12 img-map">
							<img
								src={require('../../../images/map.png')}
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
						<div className="col-lg-6 info-box ">
							<h4>ACERCA DE NOSOTROS</h4>
							<div className="desc-box">
								{description}
							</div>
						</div>
					</div>
				</div>
			</div>
			</>

		);
	}
}

export default Banner;
