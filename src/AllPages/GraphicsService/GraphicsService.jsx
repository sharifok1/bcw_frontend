import React from 'react';
import './GraphicsService.css'
import { Container, Row } from 'react-bootstrap';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer';

const GraphicsService = () => {
    return (
        <div>
             <Navbar/>
            <div className='singleService-body'>
                <div className='service-heading'>
                    <p className='primary-heading'>Gaphics Design <br />Make your product more real</p>
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

export default GraphicsService;