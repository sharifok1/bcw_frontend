import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer_body'>
            <div className='footer-layer'>
             <Container>
                <div>
                    <div className='pt-5'>
                        <Row className='m-0 py-5 text-start'>
                           
                            <Col sm={12} md={6} xl={3}>
                               <div className='text-white'>
                                    <h3>About Us</h3>
                                    <p className='fs-5'>
                                     An IT consultancy can help you assess your technology needs and develop a technology strategy that aligns with your business
                                    </p>
                               </div>
                            </Col>

                            <Col sm={12} md={6} xl={3}>
                               <div className='text-white'>
                                 <h3>Link</h3>
                                 <div className='footer-links'>
                                    <a href="/">About Us</a> <br />
                                    <a href="/">Our Mission</a> <br />
                                    <a href="/">Meet The Teams</a> <br />
                                    <a href="/">Our Projects</a>
                                 </div>   
                               </div>
                            </Col>

                            <Col sm={12} md={6} xl={3}>
                            <div className='text-white'>
                                 <h3>Explore</h3>
                                 <div className='footer-links'>
                                    <a href="/">Our Story</a> <br />
                                    <a href="/">Help Center</a> <br />
                                 </div>   
                               </div>
                            </Col>

                            <Col sm={12} md={6} xl={3}>
                            <div className='footer-links text-white'>
                                <h3>Address</h3> <br />
                                <p className='point_text text-white'>Head office:</p>
                                <p>Canada, ....</p>
                            </div>

                            <div className='footer-icon'>
                               <p><i className="fa-solid fa-phone-volume"></i> +1 xxx xxx</p> 
                              <p><i className="fa-sharp fa-solid fa-envelope"></i> info.bcw@gmail.com </p>

                            </div>
                            </Col>
                        </Row>
                    </div>
                  
                </div>
                </Container>

            </div>
           
            <div className='footer-bttomline'>
                    <p className='pt-3'>Copyright © 2023. All Rights Reserved.</p>
            </div>


        </div>
    );
};

export default Footer;