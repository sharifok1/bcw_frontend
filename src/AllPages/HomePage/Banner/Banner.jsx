import React from 'react';
import './HomePage.css'
import bannerImg from '../../../Assets/bannerImage.png';
import { Container} from 'react-bootstrap';
import Navbar from '../../../Share/Navbar/Navbar';
import video from '../../../Assets/glovbeVideo.mp4'

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
                        Welcome to Bridge Canada and World, where we bring your ideas to life through stunning 3D modeling, captivating graphic design, and seamless front-end website design.
                    </p>
                    <ul className='point_text point-mobile'>
                        <li>Amazing Communication</li>
                        <li>Latest Technology</li>
                        <li>Quick mail & response</li>
                    </ul>

                    <button className='btn btn-primary fs-4 mt-4'>Discover More</button>

                   </div>

                   {/* <div className='banner-rightside'>
                        <img src={bannerImg} alt="" />
                   </div> */}
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
                </div>
            </Container>
            <div>

            </div>
        </div>
    );
};

export default Banner;
