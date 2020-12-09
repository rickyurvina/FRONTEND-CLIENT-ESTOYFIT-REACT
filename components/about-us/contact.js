import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (

            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="contact-container" id="info">

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>SOLICITE MÁS INFORMACIÓN</h3>
                    <p>Completa tus datos, y el equipo comercial se contactará contigo a la brevedad.</p>

                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="NOMBRE Y APELLIDO" name="name" required={true} />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="NOMBRE ESTABLECIMIENTO" name="name" required={true} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="TELEFONO MÓVIL" name="name" required={true} />
                            </div>
                            <div className="col-lg-6">
                                <input type="email" className="form-control" placeholder="E-MAIL" name="name" required={true} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea className="form-control" rows="8" placeholder="COMENTARIOS">

                                </textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 offset-lg-5">
                                <button type="submit">ENVIAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Contact;
