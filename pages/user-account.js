import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import UserProfile from '../components/profile/UserProfile' 

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <UserProfile/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;
