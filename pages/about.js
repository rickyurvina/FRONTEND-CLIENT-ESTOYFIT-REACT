import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/about-us/banner1';
import Info from '../components/about-us/info';
import HowDoes from '../components/about-us/howdoes';
import Benefits from '../components/about-us/benefits';
import Contact from '../components/about-us/contact';
import Partners from '../components/about-us/partners'; 
import Whatsapp from '../components/about-us/whatsapp';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Acerca de Nosotros" />     
             
            </React.Fragment>
        );
    }
}

export default Index;
