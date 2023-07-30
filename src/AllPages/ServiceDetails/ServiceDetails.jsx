import React from 'react';
import './ServiceDetails.css'
import OurServices from '../HomePage/OurServices/OurServices';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import video from '../../Assets/glovbeVideo.mp4';
import webpic from '../../Assets/Services/web_services.jpg'
import archpic from '../../Assets/Services/project-1.jpg'
import graphpic from '../../Assets/Services/graphicsDesign.png'
import uxui from '../../Assets/Services/uxui.jpg'

const ServiceDetails = () => {
    return (
        <div>
            <Navbar/>

            {/* banner// */}  
             <section className='services-banner'> 
             <Container className='services-details-container'>
                
                <Row>
                    <Col md={8} sm={12}>
                        <p className='fs-md-1 fs-2 text-white text-start fw-md-bold fw-semibold pt-5'>
                            Unlock your creative vision with our comprehensive services in 3D modeling, graphic design, and front-end website design, tailored to elevate your brand and captivate your audience.
                        </p>
                    </Col>
                   
                    <Col md={4} sm={12}>
                        <div className='video-wrapper'>
                        <div className='video-container'>
                        <video 
                           className='video'
                            controls={false}
                            autoPlay 
                            muted 
                            loop
                            >
                            <source src={video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        </div>
                        </div>
                    </Col>
                </Row>
                <div>
                   
                </div>
                </Container>
            </section>

            {/* services descriptions//// */}
            
            <section className='mb-5'>

                {/* Web development---------------------111111111// */}
                <Row className='m-0 p'>
                     <Col sm={12} md={5} className='p-0'>
                        <div className='servicesImg'>
                            <img src={webpic} alt="webpagePic" />
                        </div>
                    </Col>

                    <Col sm={12} md={7} className='pt-5'>
                       <div className='text-start px-md-5'>
                       <h1 className='fs-2 fw-bold text-primary'>01</h1>
                        <p className='fs-1 fw-bold'>Web Development</p>
                        <p className='description_text'>
                            Your website is the first thing potential customers are going to experience about your business. It needs to be infatuating, yet simple enough to navigate and attractive to keep visitors engaged.
                        </p>
                        <p className='description_text fw-semibold'>
                        <span className='text-primary pe-2'>❖</span>  Figma, XD or PDF template design to html CSS convert. <br />
                        <span className='text-primary pe-2'>❖</span>  Figma, XD or PDF template design to ReactJS Covert <br />
                        <span className='text-primary pe-2'>❖</span>  Email Desin HTML CSS <br />
                        <span className='text-primary pe-2'>❖</span>  Frontend Web Development. <br />
                        <span className='text-primary pe-2'>❖</span>  MERN Stack Website Development. <br />
                        <span className='text-primary pe-2'>❖</span>  Mobile Resposive and user friendly support. <br />
                        </p>
                  
                       </div>
                    </Col>
                   
                </Row>

                {/* 2D 2d services---------------------222222222// */}
                <Row className='m-0 p'>
                    <Col sm={12} md={7} className='pt-5'>
                       <div className='text-start px-md-5'>
                       <h1 className='fs-2 fw-bold text-primary'>02</h1>
                        <p className='fs-1 fw-bold'>2D & 3D Design Architecture</p>
                        <p className='description_text'>
                        Welcome to our architecture design services! We specialize in providing both 2D and 3D architectural design solutions tailored to meet your unique needs. Whether you are planning a residential, commercial, or industrial project, our team of skilled designers and architects is here to bring your vision to life.
                        </p>
                        <p className='description_text fw-semibold'>
                        <span className='text-primary pe-2'>❖</span> Floor Plans <br />
                        <span className='text-primary pe-2'>❖</span> Elevations, Sections <br />
                        <span className='text-primary pe-2'>❖</span> Site Plans <br />
                        <span className='text-primary pe-2'>❖</span> Construction Drawings <br />
                        <span className='text-primary pe-2'>❖</span> 3D Modeling <br />
                        <span className='text-primary pe-2'>❖</span> Architectural Rendering <br />
                        <span className='text-primary pe-2'>❖</span> Interior Rendering <br />
                        </p>
                  
                       </div>
                    </Col>
                    <Col sm={12} md={5} className='p-0'>
                        <div className='servicesImg'>
                            <img src={archpic} alt="webpagePic" />
                        </div>
                    </Col>
                </Row>

                {/* Graphics design---------------------333333// */}
                <Row className='m-0 p'>
                    <Col sm={12} md={5} className='p-0'>
                        <div className='servicesImg'>
                            <img src={graphpic} alt="webpagePic" />
                        </div>
                    </Col>

                    <Col sm={12} md={7} className='pt-5'>
                       <div className='text-start px-md-5'>
                       <h1 className='fs-2 fw-bold text-primary'>03</h1>
                        <p className='fs-1 fw-bold'>Graphic Design</p>
                        <p className='description_text'>
                            We specialize in enhancing the visual appeal and impact of your images, ensuring they leave a lasting impression on your audience. Whether you're a photographer, business owner, or an individual seeking to elevate your personal photos, we've got you covered.
                        </p>
                        <p className='description_text fw-semibold'>
                        <span className='text-primary pe-2'>❖</span> Color Correction <br />
                        <span className='text-primary pe-2'>❖</span> Image Retouching<br />
                        <span className='text-primary pe-2'>❖</span> Background Removal <br />
                        <span className='text-primary pe-2'>❖</span> Clipping Path <br />
                        <span className='text-primary pe-2'>❖</span> Masking <br />
                        <span className='text-primary pe-2'>❖</span> Product Photo Enhancement<br />
                    
                        </p>
                  
                       </div>
                    </Col>
                   
                </Row>

                {/* UX/UI design---------------------444444444444444444// */}
                <Row className='m-0 p'>
                    <Col sm={12} md={7} className='pt-5'>
                       <div className='text-start px-md-5'>
                       <h1 className='fs-2 fw-bold text-primary'>04</h1>
                        <p className='fs-1 fw-bold'>UX/UI Design</p>
                        <p className='description_text'>
                        Welcome to our world of UX/UI design, where we blend creativity and functionality to craft exceptional user experiences. Our passion lies in understanding your users' needs and aspirations, and translating them into visually captivating and intuitive interfaces.
                        </p>
                        <p className='description_text fw-semibold'>
                        <span className='text-primary pe-2'>❖</span>  User Experience (UX) Design<br />
                        <span className='text-primary pe-2'>❖</span>  User Interface (UI) Design <br />
                        <span className='text-primary pe-2'>❖</span>  Responsive Design<br />
                        <span className='text-primary pe-2'>❖</span>  Design System Development. <br />
                        <span className='text-primary pe-2'>❖</span>  Figma Design <br />
                        </p>
                  
                       </div>
                    </Col>
                    <Col sm={12} md={5} className='p-0'>
                        <div className='servicesImg'>
                            <img src={uxui} alt="webpagePic" />
                        </div>
                    </Col>
                </Row>

                
            </section>

            <div>
            <OurServices/>
            </div>
            
           
        
            
          <Footer/>  
            
        </div>
    );
};

export default ServiceDetails;