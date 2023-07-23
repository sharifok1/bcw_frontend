import React from 'react';
import './ServiceDetails.css'
import OurServices from '../HomePage/OurServices/OurServices';
import Navbar from '../../Share/Navbar/Navbar';
// import { Container, Row } from 'react-bootstrap';
import Footer from '../../Share/Footer/Footer';

const ServiceDetails = () => {
    return (
        <div>
            <Navbar/>

            <div className='singleService-body'>
                <div className=''>
                    <p className='primary-heading'>Services</p>
                </div>
            </div>
            <div className='services-details-cards'>
            <OurServices/>
            </div>
            
           
        
            
          <Footer/>  
            
        </div>
    );
};

export default ServiceDetails;