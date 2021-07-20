import React from 'react';
import './SwiperSlidePage.scss'

const SwiperSlidePage = (props) => {
    const{name,img,company,lorem,img1}=props.data;
    return (
        <div className='SwiperSlidePage2'>
            <div className="row">
                <div className="col-md-2 m-0 p-0" >
                    <div className='SwiperSlidePage text-right'>
                    <img className='SwiperSlidePage1' src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-10 m-0 ps-2" >
                    <h4 >{name}</h4>
                    <h6 className='fst-italic' >{company}</h6>
                    
                </div>
            </div>
            <div className="row">
                <div className="col pb-5">
                    <p className='mb-0'>{lorem}</p>
                    <div className='start1'>
                    <img className='start' src={img1} alt="" />
                    <img className='start' src={img1} alt="" />
                    <img className='start' src={img1} alt="" />
                    <img className='start' src={img1} alt="" />
                    <img className='start' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperSlidePage;