import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Content from '../components/compare/Content';
import { useSelector } from 'react-redux'

const Compare = () => {
    const products = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            <Navbar />
            <Breadcrumb title="Comparar" />
            <Content compare_products={products} />

            <Facility />
            <Footer />
        </React.Fragment>
    );
}

export default Compare;