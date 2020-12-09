import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import Banner from '../../components/search/banner';
import Result from './customComponents/resultGyms';
import { getGymBranchsByFilter } from '../../services/gymService.js';


const Search = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [suggestionId, setKey] = useState(null);
    const [routerQuery, setRouterQuery] = useState(null);

    useEffect(() => {

        if (router && router.query) {
            const { key, search, nearIn } = router.query;
            setKey(key);
            setRouterQuery(router.query);

            (async () => {
                const { data: { data = [] } = [] } = await getGymBranchsByFilter(key, search, nearIn);
                console.log('DATA=> ', key, data)
                setData(data);
                
            })();
        }
    }, [router]);

    return (
        <React.Fragment>
            <Navbar />
            <Banner routerQuery={routerQuery} />
            <Result data={data} suggestionId={suggestionId} />
            <Footer />
        </React.Fragment>
    );
}

export default Search;