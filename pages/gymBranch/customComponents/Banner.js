import React, { Component } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player'


class Banner extends Component {
	render() {
		var showBanner;
		if (this.props.infoGym.is_image === 1) {
			showBanner =    <>
			< div className="container-fluid" style={{ padding: 0 }}>
				<div className="btn-calendar">
					<a className="btn btn-primary bt-calendar" href="#calendar">
						CONOCE NUESTRAS ACTIVIDADES
					</a>
				</div>
				<div className="gym-banner-branchs">
					<img
						src={this.props.infoGym.banner_image}
						style={{ width: '100%', height: 'auto' }}
					/>

					<div className="gym-banner-branchs-h1">
						<h1 className="font-size-h1">{this.props.infoGym.commercial_name}</h1>
					</div>
				</div>
			</div >
		</>;
		} else {
			showBanner =  <>
			< div className="container-fluid" style={{ padding: 0 }
			}>
				<div className="gym-banner-branchs">

					<ReactPlayer
						url={this.props.infoGym.banner_image}
						playing={true}
						width='100%'
						height='460px'
						volume='1'
						progressInterval
						 controls={true}
					/>
					<div className="gym-banner-branchs-h1">
						<h1 className="font-size-h1">{this.props.infoGym.commercial_name}</h1>
					</div>
				</div>
			</div >
		</>;
		}

		return (
			<>
			{ showBanner }


		{/*}	< div className = "container-fluid" style = {{ padding: 0 }
	}>
		<div className="gym-banner-branchs">
			<img
				src={this.props.infoGym.banner_image}
				style={{ width: '100%', height: 'auto' }}
			/>
			<ReactPlayer
				url={this.props.infoGym.banner_image}
				playing
				width='100%'
				height='460px'
				volume='1'
				progressInterval
				controls={true}
			/>
			<div className="gym-banner-branchs-h1">
				<h1 className="font-size-h1">{this.props.infoGym.commercial_name}</h1>
			</div>
		</div>
</div >*/}
			</>
		);
	}
}

export default Banner;
