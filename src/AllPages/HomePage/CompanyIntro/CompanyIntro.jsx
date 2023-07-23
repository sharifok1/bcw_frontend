import React from 'react';
import './CompanyIntro.css'
import { Col, Container, Row } from 'react-bootstrap';
import introImg from '../../../Assets/com_intro.png'

const CompanyIntro = () => {
    return (
        <div className='CompanyIntro_body'>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                    <p className='point_text text-start'>
                        <span className='text-primary'>&#9632; </span>Welcome to BC&W
                    </p>
                    <p className='primary-heading text-start'>
                        Empowering the digital future through cutting-edge technology and web solutions.
                    </p>
                    <p className='description_text text-start py-3'>
                    We offer a diverse range of technological services and expertise, helping businesses navigate the digital landscape and optimize their online presence through web development, software solutions, digital marketing, and innovative technologies.
                    </p>
                    <ul className='point_text point-mobile text-start'>
                        <li>Technologically adept</li>
                        <li>Versatile services</li>
                        <li>Problem-solving approach</li>
                    </ul>
                    <button className='btn btn-primary fs-4 mt-4' style={{float:'left'}}>Discover More</button>
                    </Col>

                    <Col sm={12} md={6}>
                        <div className='com-intro-img'>
                            <img src={introImg} alt="" />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default CompanyIntro;
