import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/gym/Banner';
import Info from '../components/gym/Info-gym';
import Pass from '../components/gym/Pass';

const Gym = () => {
    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            
            <Banner/>
            <Pass/>
            <Info/>
            <Footer />
        </React.Fragment>
    );
}

export default Gym;
