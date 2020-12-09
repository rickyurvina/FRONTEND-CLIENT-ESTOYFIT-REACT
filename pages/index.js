import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-one/Banner';
import Banner2 from '../components/shop-style-one/Banner2';
import Banner3 from '../components/shop-style-one/Banner3';
import Blog from '../components/shop-style-one/Blog'
import OfferArea from '../components/shop-style-one/OfferArea';
import Products from '../components/shop-style-one/Products';
import HowDoes from '../components/shop-style-one/HowDoesItWork';
import LastOfferts from '../components/shop-style-one/LastOfferts';
import IMM from "../components/shop-style-one/CalculateIMM";
import CalendarWrap from '../components/shop-style-one/Calendar';
import Centers from '../components/shop-style-one/Centers'
import CategoryProducts from '../components/shop-style-one/CategoryProducts';
import TrendingProducts from '../components/shop-style-one/TrendingProducts';
import BestSeller from '../components/shop-style-one/BestSellers';
import Facility from '../components/shop-style-one/Facility';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import Activities from '../components/shop-style-one/Activities';

const Index = () => {
    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <OfferArea />
            <HowDoes/>
            <Products products={products} CompareProducts={addedItemsToCompare} />
            <Banner2 />
            <Blog />
            <Activities products={products} CompareProducts={addedItemsToCompare}/>
            <LastOfferts/>
            <IMM/>
            <Banner3 />
            <CalendarWrap/>
            <Subscribe />
            <Partner />
            {/* <InstagramPhoto /> */}
            <Footer />
        </React.Fragment>
    );
}

export default Index;
