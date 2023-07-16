import React from 'react';
import './HomePage.css'
import bannerImg from '../../../Assets/bannerImage.png';
import { Container} from 'react-bootstrap';
import Navbar from '../../../Share/Navbar/Navbar';

const Banner = () => {
    return (
        <div className='banner-body'>
            <Navbar/>
            <Container>
                <div className='banner-content'>
                   <div className='banner-leftside'> 
                    <p className='point_text'>
                    <span className='text-primary'>&#9632; </span>Welcome to BC&W
                    </p>
                    <p className='primary-heading'>
                        Unlocking the Power of
                        <span className='text-primary'> Technology</span>
                    </p>
                    <p className='description_text'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, facilis. Ipsam non, vitae deserunt enim beatae fugit illo ab quod sequi ut nesciunt, omnis maxime qui expedita animi, minus molestiae fugiat vero hic magnam! Architecto, est fuga ut quo, nobis incidunt.
                    </p>
                    <ul className='point_text point-mobile'>
                        <li>Amazing Communication</li>
                        <li>Latest Technology</li>
                        <li>Quick mail & response</li>
                    </ul>

                    <button className='btn btn-primary fs-4 mt-4'>Discover More</button>

                   </div>

                   <div className='banner-rightside'>
                        <img src={bannerImg} alt="" />
                   </div>
                </div>
            </Container>
            <div>

            </div>
        </div>
    );
};

export default Banner;