import React from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Card from '../components/Vacancies/card';

const vacancies= () => {
    return (
        <React.Fragment>
            <Navbar />
            <Card />
            <Footer />
        </React.Fragment>
    )
}

export default vacancies;