import React from 'react';

const ProjectOne = (props) => {
    const {img,name, img1} = props.data;
    return (
       <div className="col-md-4">
            <div className='pb-4 ProjectsOne'>
                <img className='img-one' src={img} alt="" />
                <h4 className='text-center pt-2'>{name}</h4>
                <div className='text-center'>
                    <img className='imgFour' src={img1} alt="" />
                    <span className='ps-2  Dhaka'>Dhaka, Bangladesh</span>
                </div>
            </div>
       </div>
    );
};

export default ProjectOne;