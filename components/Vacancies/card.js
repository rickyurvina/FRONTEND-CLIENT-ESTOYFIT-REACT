import React, { Component } from 'react';
import { getActiveVacancies } from '../../services/vacantService.js'

class card extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-sm-6 col-sm-4">
                        {/* Map Active Vacancies */}
                        <div className="card card-vacant">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3 img-vacant">
                                        <img src={require('../../images/blog-images/img1-550x550.jpg')}></img>
                                    </div>
                                    <div className="col-sm-9 box-vacant">
                                        <div className="row title-card-vacant">
                                            <div className="col-sm-4">
                                                <h4 >Titulo</h4>
                                            </div>
                                            <div className="col-sm-7 icons-vacant">
                                                <a href="#" title="Enviar Correo"><i className="fas fa-envelope-open-text"></i></a>
                                            </div>
                                        </div>

                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                                        <div className="row tags">
                                            <div className="col-sm-12"><br/></div>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-sm-3 col-sm-2">
                                                        <div className="tag">
                                                            Tag 1
                                                        </div>
                                                    </div>    
                                                    <div className="col-sm-3 col-sm-2">
                                                        <div className="tag">
                                                            Tag 2
                                                        </div>
                                                    </div>    
                                                    <div className="col-sm-3 col-sm-2">
                                                        <div className="tag">
                                                            Tag 3
                                                        </div>
                                                    </div>     
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default card;