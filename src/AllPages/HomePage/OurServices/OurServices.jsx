import React from 'react';

import './OurServices.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import dev from "../../../Assets/dev.png";
import arch from "../../../Assets/arch.png";
import uiux from "../../../Assets/uiux.png";
import graphic from "../../../Assets/grapichDesign.png";
import { NavLink } from 'react-router-dom';


const OurServices = () => {
    return (
        <div className='services-body'>
           <Container>
                <div>
                   <div>
                   <p className='point_text'>
                        <span className='text-primary'>&#9632; </span>
                        OUR SERVICES 
                        <span className='text-primary'> &#9632; </span>
                    </p>
                    <p className='primary-heading'>
                    Services we provide
                    </p>
                    <p className='description_text'>
                    Unlock your creative vision with our comprehensive services in 3D modeling, graphic design, and front-end website design, tailored to elevate your brand and captivate your audience.
                    </p>
                   </div>

                    <div>
                        {/* Services card/// */}
                    <Row className='p-0 m-0 pt-4'>
                        <Col sm={12} md={6} xl={3}>
                            <Card className='p-4 pb-2 text-start services-card'>
                                <img className='services-icon' src={dev} alt="" />
                                <div className='service-name-inCard'>
                                   <NavLink 
                                   className="link-style"
                                   to="/webService" >
                                        <h4 className='mb-4'>Web Development</h4>
                                   </NavLink>  
                                    <p className='description_text service-des'>
                                        From design to deployment, we create tailored solutions that elevate your online presence and drive success.
                                    </p>
                                    <NavLink 
                                        className="services-arrow"
                                        to="/webService">
                                        <i>&rarr;</i>
                                    </NavLink>
                                </div>
                                
                            </Card>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <Card className='p-4 pb-2 text-start services-card'>
                                <img className='services-icon' src={arch} alt="" />
                               <div className='service-name-inCard'>
                               <NavLink 
                                   className="link-style"
                                   to="/architecService" >
                                    <h4 className='mb-4'>2D & 3D Design Architecture</h4>
                                </NavLink>
                                    <p className='description_text service-des'>
                                      Discover the Art of Architecture: 2D & 3D
                                    </p>
                                <NavLink 
                                    className="services-arrow"
                                    to="/architecService">
                                    <i>&rarr;</i>
                                </NavLink>
                               </div>
                               
                            </Card>
                        </Col>
                       
                        <Col sm={12} md={6} xl={3}>
                            <Card className='p-4 pb-2 text-start services-card'>
                                <img className='services-icon' src={graphic} alt="" />
                                <div className='service-name-inCard'>
                                <NavLink 
                                   className="link-style"
                                   to="/graphicsService" >
                                    <h4 className='mb-4'>Graphic Design</h4>
                                </NavLink>
                                <p className='description_text service-des'>
                                    Craft compelling visuals that leave a lasting impression and elevate your brand identity to new heights
                                </p>

                                <NavLink 
                                className="services-arrow"
                                to="/graphicsService">
                                <i>&rarr;</i>
                                </NavLink>

                                </div>
                                
                                
                            </Card>
                        </Col>
                      
                        <Col sm={12} md={6} xl={3}>
                            <Card className='p-4 pb-2 text-start services-card'>
                                <img className='services-icon' src={uiux} alt="" />
                                <div className='service-name-inCard'>
                                <NavLink 
                                   className="link-style"
                                   to="/uxUiService" >
                                    <h4 className='mb-4'>UX/UI Design</h4>
                                </NavLink>

                                <p className='description_text service-des'>
                                        Combine creativity and empathy to create intuitive and visually appealing interfaces
                                </p>

                                <NavLink 
                                    className="services-arrow"
                                    to="/uxUiService">
                                    <i>&rarr;</i>
                                </NavLink>
                                </div>
                                
                            </Card>
                        </Col>
                       
                    </Row>
                    </div>

                </div>
           </Container>
        </div>
    );
};

export default OurServices;
