import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { URI } from '../../../services/base';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = URI + "/postReviewGymBranch";

class Review extends Component {
    state = {

        form: {
            branch_id: '',
            name: '',
            email: '',
            rating_value: '',
            title: '',
            content: '',
        },
        value: ''
    };

    componentDidMount() {
        const { isLogged } = this.props;
        if (isLogged) {
            this.state.form.name = this.props.userData.userData.name;
            this.state.form.email = this.props.userData.userData.email;
            this.state.form.branch_id = this.props.infoGym.id;            
        }
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)

    }
    
    petitionPost = () => {
        if (this.state.form.branch_id == "" || this.state.form.name == "" || this.state.form.title == "" || this.state.form.content == "" || this.state.form.rating_value == "") {
            console.log("DEBE INGRESAR DATOS Y CALIFICACION")
        } else {
            axios.post(url, this.state.form).then(response => {
                
            toast.success('Comentario enviado satisfactoriamente', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
                this.componentDidMount();
                console.log("INGRESADO EXITOSAMENTE")
            }).catch(error => {
                console.log(error.message);
            })
            this.setState({
                form: {
                    branch_id: '',
                    name: this.props.userData.userData.name,
                    email: this.props.userData.userData.email,
                    rating_value: null,
                    title: '',
                    content: '',
                },
                value: ''
            })
        }

    }

    setBranchId = () => {
        const { infoGym } = this.props
        this.state.form.branch_id = infoGym.id
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
        evt.currentTarget.className += "current ";
    }
    componentWillReceiveProps

    render() {
        const { review } = this.props
        const { form } = this.state
        const { average } = this.props
        const { isLogged } = this.props
        return (
            <div className="container" style={{ marginTop: '150px' }}>
                <div className="col-lg-12 col-md-12">
                    <div className="tab products-details-tab">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul className="tabs">
                                    <li onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'tab5') }}>
                                        <span className="tabs-nav-text" style={{fontSize: '18px'}}>
                                           Opiniones
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="tab_content">
                                    <div id="tab5" className="tabs_item">
                                        <div className="products-details-tab-content">
                                            <div className="product-review-form">
                                               
                                                {isLogged &&

                                                    <>
                                                        <div className="review-form" id="review">
                                                            <h3>Escribe tu Opinión</h3>
                                                            <div className="form-group">
                                                                <label>Nombre</label>
                                                                <input type="text" id="name" name="name" value={form.name}
                                                                    // onChange={this.handleChange} 
                                                                    placeholder="Ingresa tu Nombre" className="form-control" required />
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Correo</label>
                                                                <input type="email" id="email" name="email" value={form.email}
                                                                    // onChange={this.handleChange} 
                                                                    placeholder="Ingresa tu Correo" className="form-control" required />
                                                            </div>

                                                            <div className="review-rating">
                                                                <p>Califica este Gimnasio</p>

                                                                <div className="rating">
                                                                    <Rating name="rating_Value" value={this.state.value} onClick={this.setBranchId} onChange={(event, newValue) => {
                                                                        form.rating_value = newValue
                                                                        this.setState({
                                                                            value: newValue
                                                                        })

                                                                    }} size="large" precision={0.5}
                                                                        style={{ display: 'flex', flexDirection: 'row' }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Titulo Opinión</label>
                                                                <input type="text" name="title" id="title" value={form.title} required onChange={this.handleChange} placeholder="Ingresa el titulo de tu Opinión" className="form-control" />
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Contenido de la Opinión (1500)</label>
                                                                <textarea name="content" id="content" value={form.content} onChange={this.handleChange} cols="30" rows="10" placeholder="Escribe tus comentarios aqui..." className="form-control" />
                                                            </div>
                                                            <button type="submit" className="btn btn-light" onClick={this.petitionPost} >Enviar Opinión</button>
                                                        </div>
                                                    </>
                                                }
                                                {review.length > 0 && (
                                                    <>
                                                    <br/><br/><br/>
                                                        <h3>Opniniones de los Usuarios</h3>
                                                        <div className="review-title">
                                                            <div className="rating">
                                                                <Rating name="size-large" value={average} size="large" disabled precision={0.5}
                                                                    style={{ display: 'flex', flexDirection: 'row' }} />
                                                            </div>
                                                            <p>Basado en {review.length} Opiniones</p>
                                                            <Link href="#review">
                                                                <a className="btn btn-light">Escribe tu Opinión</a>
                                                            </Link>
                                                        </div>
                                                        <div className="review-comments">
                                                            {review.map((each, index) => (
                                                                <div className="review-item" key={index}>
                                                                    <span><strong>{each.name}</strong> el: <strong>{each.created_at}</strong></span>
                                                                    <div className="rating">
                                                                        <Rating name="size-large" value={each.rating_value} size="large" disabled precision={0.5}
                                                                            style={{ display: 'flex', flexDirection: 'row' }} />
                                                                    </div>
                                                                    <h3 style={{ color: '#FE5000' }}>{each.title}</h3>
                                                                    <p style={{ color: '9C9C9C' }}>{each.content}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <br/><br/>
                                                    </>
                                                            )}

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
const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        isLogged: state.isLogged,
    }
}
export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Review)