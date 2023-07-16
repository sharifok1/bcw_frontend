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
                        We Are Increasing Business Success With Technology
                    </p>
                    <p className='description_text text-start py-3'>
                    An IT solution service company may serve clients from various industries such as healthcare, finance, education, and manufacturing. They may work on a project basis, providing services for a specific project or on a long-term basis...
                    </p>
                    <ul className='point_text point-mobile text-start'>
                        <li>Amazing Communication</li>
                        <li>Latest Technology</li>
                        <li>Quick mail & response</li>
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