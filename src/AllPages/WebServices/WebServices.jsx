import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import './WebServices.css'
import { Col, Container, Row } from 'react-bootstrap';
import web1 from '../../Assets/webProject/web1.jpg'
import web2 from '../../Assets/webProject/web2.jpg'
import web3 from '../../Assets/webProject/web3.jpg'
import web4 from '../../Assets/webProject/web4.jpg'
import web5 from '../../Assets/webProject/web5.jpg'
import web6 from '../../Assets/webProject/web6.jpg'
import Footer from '../../Share/Footer/Footer';

const WebServices = () => {
    return (
        <div>
            <Navbar/>
            <div className='singleService-body'>
                <div className='service-heading'>
                    <p className='primary-heading'> Introducing Our <br />Web Development Solutions</p>
                </div>
            </div>
            
        <Container className='pt-5'>
            <p className='text-start fs-2 fw-semibold btm-line'>
                 Our <span className='text-primary'>Portfolio</span> 
            </p>
            <Row className='m-0 py-5'>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web1} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>Femme Wear BD</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Web design & development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS, Reactjs, React Bootstrap<br />
                                <span className='fw-semibold'>Backend: </span>MongoDB, Node.js, ExpressJS<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href="https://www.femmewearbd.com">
                                        www.femmewearbd.com
                                </a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web2} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>FREEDEN</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Frontend Development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS, Reactjs,Bootstrap<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href="https://freeden.io/">
                                        https://freeden.io/
                                </a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web3} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>META ARABS</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Frontend Development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS,JavaScript,Bootstrap<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href="https://www.metaarabs.io/">
                                        https://www.metaarabs.io/
                                </a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web4} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>Willcox Energy</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Frontend Development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS, ReactJs, Bootstrap<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href="https://wcenergy.netlify.app/">
                                       https://wcenergy.netlify.app/
                                </a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web5} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>Meta Games</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Frontend Development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS, ReactJs, Bootstrap<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href="https://metagamming.netlify.app">
                                       https://metagamming.netlify.app
                                </a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='web-show'>
                        <img src={web6} alt="" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>Decentralized</p>
                            <p>
                                <span className='fw-semibold'>Service: </span>Frontend Development <br />
                                <span className='fw-semibold'>Frontend: </span>HTML, CSS, ReactJs, Bootstrap<br />
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href=" https://echosystem-home.netlify.app">
                                       https://echosystem-home.netlify.app
                                </a><br />
                            </p>
                        </div>
                       
                    </div>
                </Col>
            </Row>
        </Container>
            

          <Footer/>  
        </div>
    );
};

export default WebServices;