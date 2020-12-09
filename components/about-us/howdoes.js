import React, { Component } from 'react';



class HowDoesIt extends Component {
    render() {
        return (
            <div className="container"  style={{padding:0, paddingTop:'10%'}}>
                <section className="all-products-area pb-60">
                    <div className="tab products-category-tab">
                        <div className="row">
                            <div className="col-lg-12 title-div">
                                <h2 className="title" style={{marginLeft:'10%'}}> Cómo funciona? </h2>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-4 row" >
                                <div className="row text-center"  >
                                    <div className="col-lg-3 col-md-6  mb-4" >
                                        <a href="#" >
                                            <div
                                                className="rounded-circle img-thumbnail how-does-image"
                                                alt="1"
                                                style={{ backgroundColor: "#FE5000",marginLeft:'25%' }}
                                            />
                                            <div className="how-does-text"
                                                className={'display-4 font-weight-bold'}
                                                style={{ color: 'white', position: 'absolute', top: '75px', left: '105px', marginLeft:'22%' }}>
                                                1
                                            </div>
                                        </a>
                                        <p className="my-5"style={{marginLeft:'15%'}}>Miles de personas nos visitan buscando actividades y centros de fitness que aún no conocen.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <div
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="1"
                                            style={{ backgroundColor: "#FE5000", marginLeft:'25%'}}
                                        />
                                        <div className="how-does-text"
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '75px', left: '105px', marginLeft:'22%' }}>
                                            2
                                            </div>
                                        <p className="my-5" style={{marginLeft:'15%'}}>Según el comportamiento de cada persona, le mostramos los centros que más se ajustan a su necesidad.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <div
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="1"
                                            style={{ backgroundColor: "#FE5000",marginLeft:'25%' }}
                                        />
                                        <div className="how-does-text"
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '75px', left: '105px', marginLeft:'22%' }}>
                                            3
                                            </div>
                                        <p className="my-5" style={{marginLeft:'15%'}} >Le ofrecemos planes exclusivos, descuentos y flexibilidad por ser cliente nuevo y costos administrativos bonificados.</p>
                                    </div>

                                    <div className="col-lg-3 col-md-6  mb-4">
                                        <div
                                            className="rounded-circle img-thumbnail how-does-image"
                                            alt="1"
                                            style={{ backgroundColor: "#FE5000",marginLeft:'25%' }}
                                        />
                                        <div className="how-does-text"
                                            className={'display-4 font-weight-bold'}
                                            style={{ color: 'white', position: 'absolute', top: '75px', left: '105px', marginLeft:'22%' }}>
                                            4
                                            </div>
                                        <p className="my-5" style={{marginLeft:'15%'}}>El cliente se presenta en tu centro, preparado para enamorarse de tus servicios.</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </section>
            </div>

        );
    }
}

export default HowDoesIt
