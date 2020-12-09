import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';
import Payment from '../payments/Payment';
import useForm from './userForm';
import { getCardsByUser } from '../../services/authService';

const cardPics = [
    {'brand' : "Visa", 'path' : require('../../images/custom-images/visa.png')},
    {'brand' :  "MasterCard", 'path' : require('../../images/custom-images/mastercard.png')},
    {'brand' : "Diners", 'path' : require('../../images/custom-images/diners.png')},
    {'brand' : "Discover", 'path' : require('../../images/custom-images/diners.png')},
];

function CheckoutForm({ cards, total, shipping }) {

    // let totalAmount = (total + shipping).toFixed(2)
    const [cardId, setCardId] = useState(0);
    let totalAmount = total;

    useEffect(() => {
        console.log('CARDSSSfffff => ', cards, cardPics)

    }, []);

    const stateSchema = {
        firstName: { value: "", error: "" },
        lastName: { value: "", error: "" },
        address: { value: "", error: "" },
        city: { value: "", error: "" },
        state: { value: "", error: "" },
        zip: { value: "", error: "" },
        email: { value: "", error: "" },
        phone: { value: "", error: "" }
    };

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
                regEx: /^[a-zA-Z]+$/,
                error: "Nombre Inválido"
            }
        },

        lastName: {
            required: true,
            validator: {
                regEx: /^[a-zA-Z]+$/,
                error: "Apellido Inválido"
            }
        },

        street: {
            required: true,
            validator: {
                error: "Calle Principal Requerida"
            }
        },

        city: {
            required: true,
            validator: {
                error: "Ciudad Requerida"
            }
        },

        state: {
            required: true,
            validator: {
                error: "Provincia Requerida"
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Email Inválido"
            }
        },

        phone: {
            required: true,
            validator: {
                regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
                error: "Número Telefónico inválido"
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm(
        stateSchema,
        validationStateSchema,
        handleSubmit
    );

    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };

    function handleSubmit() {
        console.log("Form submitted.");
    }

    const selectCard = (cardId) => {
        setCardId(cardId);
    }


    return (
        <section className="checkout-area ptb-60">
            <div className="container">
                <br />
                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Detalle de Facturación</h3>

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Nombre: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Apellido: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Ciudad: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Provincia: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="state"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.state.value}
                                            />
                                            {state.state.error && <p style={errorStyle}>{state.state.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Calle Principal: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="street"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Calle Secundaria:</label>
                                            <input
                                                type="text"
                                                name="apartment"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.address.apartment}
                                            />
                                        </div>
                                    </div>





                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email: <span className="required">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Teléfono: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Quieres crear una cuenta?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Enviar a una dirección diferente?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="6" placeholder="Notas para la orden" className="form-control" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Selecciona tu método de pago</h3>

                                <div class="row">
                                    {(cards && cards.length > 0) &&
                                        cards.map((v, i) => {
                                            const flag = cardPics.find(x => x.brand === v.card_brand);
                                            console.log('FLAG ',flag, v.card_brand)
                                            return ( <div className="col-sm-12">
                                                <input type="radio" id="card-1" name="radio-group"onClick={(e) => selectCard(v.id)} />
                                                <label htmlFor="card-1">{v.number}</label>&nbsp;&nbsp;&nbsp;
                                                <img src={flag.path} style={{ width: '70px', height: '40px' }}></img>
                                            </div> )
                                        })
                                    }

                                    <div className="col-sm-12">
                                        <input type="radio" id="card-2" name="radio-group"  defaultChecked={true}  onClick={(e) => selectCard(0)} />
                                        <label htmlFor="card-2">Registrar</label>&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="col-sm-12">
                                        <br />
                                        <a href="#" style={{ color: "#FE5005" }}>Ingresa un nuevo método de pago</a>
                                    </div>
                                </div>
                                <br />

                                <h3 className="title">Tu Orden</h3>

                                <OrderSummary />
                                <br />
                                <br />
                                <Payment
                                    cardId={cardId}
                                    amount={totalAmount * 100}
                                    disabled={disable}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

// CheckoutForm.getInitialProps = async (ctx) => {
//     console.log('USER DATA ', userData)
//     const response = await getCardsByUser(userData);
//     const { data: cards = {} } = response;
//     console.log('CARDS => ', response, cards)
//     return { cardsDb: cards }
// }

// CheckoutForm.getInitialProps = async appContext => {

//     // console.log('USER DATA ', userData)
//     // const response = await getCardsByUser(userData);
//     // const { data: cards = {} } = response;
//     // console.log('CARDS => ', response, cards)

//     let pageProps = {};
//     if (appContext.Component.getInitialProps) {
//         const response = await getCardsByUser(userData);
//         const { data: cards = {} } = response;
//     };

//     return {
//         props: {
//             cards: cards,
//         },
//     }
// }

const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(CheckoutForm)

