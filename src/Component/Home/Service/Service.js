import React from 'react';
import './Service.scss';
import imgOne from '../../../img/apartment1.png';
import imgTwo from '../../../img/affordable1.png';
import imgThree from '../../../img/lessee1.png';
import ServiceOne from '../ServiceOne/ServiceOne';

const imgFour =[
{
    name:"Office",
    amount:299,
    img:imgOne,
},
{
    name:"Showroom Desing",
    amount:399,
    img:imgTwo,
},{
    name:"Residential/Home",
    amount:499,
    img:imgThree
}

]



const Service = () => {
    return (
        <div className='Service'>
            <div className="container">
            <div className="row">
                <div className="col">
                <div className='text-center ServiceOne'>
                    <p>Service</p>
                    <h2>We're an agency tailored to all</h2>
                    <h2>clients'needs that always delivers</h2>
                </div>
                </div>
            </div>
        <div className="row">
            {
                imgFour.map(pd=><ServiceOne key={pd.name} data={pd}></ServiceOne> )
            }
        </div>
        <div className="row">
            <div className="col pt-4">
                <div className='text-center'>
                    <button className='Explore'>Explore more</button>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Service;