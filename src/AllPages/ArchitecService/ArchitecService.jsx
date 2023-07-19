import React from 'react';
import './ArchitecService.css'
import { Container, Row } from 'react-bootstrap';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer';

const ArchitecService = () => {
    return (
        <div>
             <Navbar/>
            <div className='singleService-body'>
                <div className='service-heading'>
                    <p className='primary-heading'>Elevate Your Spaces with Expert 2D & 3D <br /> Design Architecture Solutions</p>
                </div>
            </div>
            
        <Container className='pt-5'>
            <p className='text-start fs-2 fw-semibold btm-line'>
                 Our <span className='text-primary'>Portfolio</span> 
            </p>
            <Row className='m-0 py-5'>
               
            </Row>
        </Container>
            
          <Footer/>  
        </div>
    );
};

export default ArchitecService;
