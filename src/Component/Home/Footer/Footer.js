import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Reveal from 'react-reveal/Reveal';
import { faFacebookF,faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer className='Footer' id='pricing'>
            <Reveal><div className="container">
               <div className="row">
               <div className="col-md-4">
                   <div className="row pt-5">
                       <div className="col-2 m-0 p-0">
                            <div className='leftSide'>
                            <p className='mt-2' ><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                            </div>
                       </div>
                       <div className="col-10 m-0 p-0">
                            <p className='ps-2 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum illo id</p>
                       </div>
                   </div>
                </div>
                <div className="col-md-2 pt-5">
                <div className='text-canter'>
                    <h4>Company</h4>
                    <h6>About</h6>
                    <h6>Project</h6>
                    <h6>Our Team</h6>
                    <h6>Terms Conditions</h6>
                    <h6>Submit Listing</h6>
                </div>
                </div>
                <div className="col-md-2 pt-5">
                <div className='text-canter'>
                    <h4>Quick Links</h4>
                    <h6>Quick Links</h6>
                    <h6>Rentals</h6>
                    <h6>Sales</h6>
                    <h6>Contact</h6>
                    <h6>Our blog</h6>
                </div>
                </div>
                <div className="col-md-4 pt-5 pb-5">
                    <div>
                        <h4>About us</h4>
                        <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus laboriosam aut nesciunt in? Id tempora reprehenderit molestias, recusandae alias delectus, accusamus, voluptatibus sequi doloremque inventore placeat animi provident ab!</p>
                        <div>
                     <span className='iconOne'><FontAwesomeIcon icon={faFacebookF} /></span>
                     <span className='icon'><FontAwesomeIcon icon={faYoutube} /></span>
                     <span  className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <p className='text-center'>Copy right Desing world {(new Date().getFullYear())} </p>
                </div>
               </div>
           </div></Reveal>
           
        </footer>
    );
};

export default Footer;