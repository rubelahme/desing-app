import React from 'react';

const ServiceOne = (props) => {
    const {name, img,amount} = props.data;
    return (
        <div className="col-md-4">
            <div className='text-center ServiceTwo'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <h6>${amount}</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quaerat vero. Adipisci nobis omnis sint et, iste nihil repellat? Quae obcaecati molestias minima commodi quia consequuntur suscipit, accusantium sunt repudiandae.</p>
            </div>
        </div>
    );
};

export default ServiceOne;