import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import Banner from '../components/checkout/Banner';
import { getCardsByUser } from '../services/authService';

class Index extends Component {

    state = {
        cards: false,
    };

    componentDidMount(){
        this.getCardsByUser();
    }

    getCardsByUser = async () => {
        const { userData } = this.props;
        console.log('USER DATA ', userData)
        const response = await getCardsByUser(userData);
        const { data: { response: resp } } = response;
        console.log('CARDS => ', resp)
        this.setState({cards: resp});
    }
    render() {
        const { cards } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Pagar" />
                <Banner/>
                <CheckoutForm cards={cards}/>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Index)
