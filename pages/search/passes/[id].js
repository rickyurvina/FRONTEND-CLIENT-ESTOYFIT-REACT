import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';
import Banner from '../../../components/search/banner';
import Result from '../activities/customComponents/result';

const Search = () => {
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        const { id } = router.query;
		async function getData(id) { 
            console.log('id -> ',id)
        }
        getData(id);
	}, []);

    return (
        <React.Fragment>
            <Navbar />
            <Banner/>
            <Result/>
            <Footer />
        </React.Fragment>
    );
}

export default Search;