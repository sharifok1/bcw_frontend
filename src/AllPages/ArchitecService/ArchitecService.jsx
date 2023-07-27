import React from 'react';
import './ArchitecService.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer';
import project1 from '../../Assets/architec/project-1.jpg'

const ArchitecService = () => {
    return (
        <div>
            <Navbar/>
            <div className='architech-body'>
                <div className='arch-service-heading'>
                    <Container>
                    <p className='primary-heading arch-heading text-start w-50'>
                        Elevate Your Spaces with Expert 2D & 3D <br /> Design Architecture Solutions
                    </p>
                    </Container>
                </div>
            </div>
            
        <Container className='pt-5'>
            <p className='text-start fs-2 fw-semibold btm-line'>
                 Our <span className='text-primary'>Portfolio</span> 
            </p>
            <Row className='m-0 py-5'>
               <Col md={12}>
                   <Card className='p-4 my-4'> 
                    <Row className='text-start'>
                        <Col sm={12} md={5} lg={4}>
                            <img className='arc-project-img' src={project1} alt="" />
                        </Col>
                        <Col sm={12} md={7} lg={8} className='p-5'>
                            <h4>Project Name: White House</h4>
                           <p> <b>Our task:</b>3D Design and rendaring</p>
                           <p><b>Tools:</b>3D Max</p>
                           <p><b>About projects:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum possimus vel. Corrupti repellendus consectetur nemo optio omnis harum molestias voluptatum et dignissimos ipsa accusantium doloremque veritatis, qui illo iure est at earum sequi fugiat. Deleniti earum voluptas reprehenderit officiis porro. Veniam temporibus esse at veritatis deserunt hic ipsam minima?</p>
                        </Col>
                    </Row>
                 </Card>

                  
                   <Card className='p-4 my-4'> 
                    <Row className='text-start'>
                        <Col sm={12} md={5} lg={4}>
                            <img className='arc-project-img' src={project1} alt="" />
                        </Col>
                        <Col sm={12} md={7} lg={8} className='p-5'>
                            <h4>Project Name: White House</h4>
                           <p> <b>Our task:</b>3D Design and rendaring</p>
                           <p><b>Tools:</b>3D Max</p>
                           <p><b>About projects:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum possimus vel. Corrupti repellendus consectetur nemo optio omnis harum molestias voluptatum et dignissimos ipsa accusantium doloremque veritatis, qui illo iure est at earum sequi fugiat. Deleniti earum voluptas reprehenderit officiis porro. Veniam temporibus esse at veritatis deserunt hic ipsam minima?</p>
                        </Col>
                    </Row>
                 </Card>

                  
                   <Card className='p-4 my-4'> 
                    <Row className='text-start'>
                        <Col sm={12} md={5} lg={4}>
                            <img className='arc-project-img' src={project1} alt="" />
                        </Col>
                        <Col sm={12} md={7} lg={8} className='p-5'>
                            <h4>Project Name: White House</h4>
                           <p> <b>Our task:</b>3D Design and rendaring</p>
                           <p><b>Tools:</b>3D Max</p>
                           <p><b>About projects:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum possimus vel. Corrupti repellendus consectetur nemo optio omnis harum molestias voluptatum et dignissimos ipsa accusantium doloremque veritatis, qui illo iure est at earum sequi fugiat. Deleniti earum voluptas reprehenderit officiis porro. Veniam temporibus esse at veritatis deserunt hic ipsam minima?</p>
                        </Col>
                    </Row>
                 </Card>

                  
                   <Card className='p-4 my-4'> 
                    <Row className='text-start'>
                        <Col sm={12} md={5} lg={4}>
                            <img className='arc-project-img' src={project1} alt="" />
                        </Col>
                        <Col sm={12} md={7} lg={8} className='p-5'>
                            <h4>Project Name: White House</h4>
                           <p> <b>Our task:</b>3D Design and rendaring</p>
                           <p><b>Tools:</b>3D Max</p>
                           <p><b>About projects:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum possimus vel. Corrupti repellendus consectetur nemo optio omnis harum molestias voluptatum et dignissimos ipsa accusantium doloremque veritatis, qui illo iure est at earum sequi fugiat. Deleniti earum voluptas reprehenderit officiis porro. Veniam temporibus esse at veritatis deserunt hic ipsam minima?</p>
                        </Col>
                    </Row>
                 </Card>

                  
               </Col>
            </Row>
        </Container>
            
          <Footer/>  
        </div>
    );
};

export default ArchitecService;
