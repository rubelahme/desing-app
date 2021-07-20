import React from 'react';
import './ManuSection.scss';
import Zoom from 'react-reveal/Zoom';
import img from '../../../img/bernard-hermant-6ftZuO_-b64-unsplash 1.png'

const ManuSection = () => {
    return (
        <div className="row">
            <div className="col-md-6">
            <div className='ManuSection'>
                <h1>We Build</h1>
                <h1>Your Dream</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam minima, sequi, sed perspiciatis molestias, consectetur nulla eius cum aliquid officia dolore. Repellat placeat voluptate minus nulla architecto eum beatae sunt.</p>
                <button className='ManuSection-1'>Booking</button>
            </div>
            </div>
            <div className="col-md-6">
           <div >
              <Zoom>
              <img className='img-1' src={img} alt="" />
              </Zoom>
           </div>
            </div>
        </div>
    );
};

export default ManuSection;