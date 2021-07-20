import React from 'react';
import imgOne from '../../../img/Ellipse92.png'
import imgTwo from '../../../img/Ellipse91.png'
import imgThree from "../../../img/Ellipse90.png"
import imgFour from '../../../img/Group33040.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './Testimonials.scss'
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
import SwiperSlidePage from '../SwiperSlidePage/SwiperSlidePage';
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Played =[
{
    name:"jenifer jey",
    company:"CEO, Manpol",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"Miriam Barron",
    company:"CEO, Manpol",
    img:imgTwo,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"Bria Malone",
    company:"CEO, Manpol",
    img:imgThree,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"ferjey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"nifer",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"jenifer jey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"jenifer jey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"jenifer jey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"jenifer jey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
},
{
    name:"jenifer jey",
    company:"Dhaka Limited",
    img:imgOne,
    lorem:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit beatae aperiam reiciendis dolor saepe ipsum, molestiae ullam, repudiandae sequi accusamus expedita nulla animi fugiat debitis impedit quibusdam quisquam dolore a?",
    img1:imgFour,
}
]

const Testimonials = () => {
    return (
        <div className='Testimonials'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className='TestimonialsOne'>Testimonials</h2>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Swiper bottom={0} slidesPerView={1} spaceBetween={30} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                    }} pagination={{
                    "clickable": true
                    }} 
                    
                    breakpoints={{
                        "500": {
                          "slidesPerView": 1,
                          "spaceBetween": 20,
                          "slidesPerGroup":1,
                        },
                        "768": {
                          "slidesPerView": 3,
                          "spaceBetween": 40
                        },
                        "1024": {
                          "slidesPerView": 3,
                          "spaceBetween": 50,
                          "slidesPerGroup":3
                        }
                      }}
                    
                    className="mySwiper">
                        {
                            Played.map(pd => <SwiperSlide><SwiperSlidePage data={pd}></SwiperSlidePage></SwiperSlide>)
                        }
                     </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;