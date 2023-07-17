import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import CompanyIntro from './CompanyIntro/CompanyIntro';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <OurServices/>
            <CompanyIntro/>

            <Footer/>
        </div>
    );
};

export default HomePage;