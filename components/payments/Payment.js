import React from 'react';
import axios from "axios"
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { resetCart } from '../../store/actions/actions';
import { getLink, executePayment } from '../../services/authService';

class Payments extends React.Component {

    getLinkPayment = async () => {
        const { cardId, userData } = this.props;
        console.log('USER DATA ', userData, cardId)
        const amountObject = { amount: '1.12', amountWithTax: '1', amountWithoutTax: '0', tax: '0.12' };
        if (cardId === 0) {
            const response = await getLink(userData, amountObject);
            const { data } = response;
            window.open(data.data.data.url, '_blank');
            console.log('RESPONSE REGISTER => ', response)
        }else{
            const response = await executePayment(userData, amountObject, cardId);
            const { data } = response;
            console.log('RESPONSE PAYMENT => ', response)
        }
        
    }

    handleClick = () => {
        this.props.resetCart();
        toast.success('Order has been confirmed', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(function () { Router.push('/thankyou'); }, 3000);
    }
    render() {
        let { amount } = this.props;
        const onToken = async token => {
            const body = {
                amount: amount,
                token: token
            };
            await axios.post("/api/stripe/checkout", body);
        };

        return (
            <React.Fragment>
                {/* <div className="order-btn">
                    <StripeCheckout 
                        name="Novine"
                        description="React Next eCommerce Templates"
                        amount={amount}
                        currency="USD"
                        token={onToken}
                        stripeKey="pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7"
                        billingAddress={false}
                        closed={this.handleClick}
                    >
                        
                        <button className={`btn btn-primary`} >
                            Place order
                        </button>
                    </StripeCheckout>
                </div> */}
                <button className={`btn btn-primary`} style={{ backgroundColor: '#fe5005' }} onClick={this.getLinkPayment}>
                    Realizar el pedido
                </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCart: () => { dispatch(resetCart()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payments)