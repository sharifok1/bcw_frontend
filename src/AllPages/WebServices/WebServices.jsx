import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import './WebServices.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Share/Footer/Footer';

const WebServices = () => {
    
    const webProjectData = [
        {
            img:'https://i.ibb.co/zht798s/web1.jpg',
            projectName:'Femme Wear BD',
            servicesType:'Web design & development',
            frontend:'HTML, CSS, Reactjs, React Bootstrap',
            backend:'MongoDB, Node.js, ExpressJS',
            live_visit:"https://www.femmewearbd.com"
        },
        {
            img:'https://i.ibb.co/jTrkzHS/web2.jpg',
            projectName:'FREEDEN',
            servicesType:'Frontend Development',
            frontend:'HTML, CSS, Reactjs and Bootstrap',
            live_visit:"https://freeden.io/"
        },
        {
            img:'https://i.ibb.co/7Nt1hfM/web3.jpg',
            projectName:'META ARABS',
            servicesType:'Frontend Development',
            frontend:'HTML, CSS, JavaScript and Bootstrap',
            live_visit:"https://www.metaarabs.io/"
        },
        {
            img:'https://i.ibb.co/L17B81g/web4.jpg',
            projectName:'Willcox Energy',
            servicesType:'Frontend Development',
            frontend:'HTML, CSS, ReactJs, Bootstrap', 
            live_visit:"https://wcenergy.netlify.app/"
        },
        {
            img:'https://i.ibb.co/ZGgxY9n/web5.jpg',
            projectName:'Meta Games',
            servicesType:'Frontend Development',
            frontend:'HTML, CSS, Reactjs, React Bootstrap',
            live_visit:"https://metagamming.netlify.app"
        },
        {
            img:'https://i.ibb.co/nj5JK5q/web6.jpg',
            projectName:'Decentralized',
            servicesType:'Frontend Development',
            frontend:'HTML, CSS, Reactjs, React Bootstrap',
            live_visit:"https://echosystem-home.netlify.app",
        }
    ]


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
                {
                  
                  webProjectData.map((projects,key)=><Col sm={12} md={6} key={key}>
                    <div className='web-show'>
                        <img src={projects?.img} alt="project-screenshot" />
                        <div className='project-detail-cards pt-5'>
                            <p className='fs-4 fw-semibold'>{projects?.projectName}</p>
                            <div>
                                <span className='fw-semibold'>Service: </span>{projects.servicesType}<br />
                                <span className='fw-semibold'>Frontend: </span>{projects.frontend}<br />
                                {projects.backend?
                               <p><span className='fw-semibold'>Backend: </span>{projects.backend}</p>:<></>}
                                <span className='fw-semibold'>Live visit: </span>
                                <a 
                                    className='text-white'
                                    target="_blank" rel='noreferrer'
                                    href={projects.live_visit}>
                                        {projects.live_visit}
                                </a><br />
                            </div>
                        </div>
                    </div>
                </Col>
                  )  
                }
            </Row>
        </Container>
            
          <Footer/>  
        </div>
    );
};
export default WebServices;