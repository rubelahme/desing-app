import React from 'react';
import './Contact.scss';
import Zoom from 'react-reveal/Zoom';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
    <Zoom> 
        <div className='Contact' id='contact'> 
    <div className="container">
       <div className="row">
           <div className="col text-center pb-4">
           <h6>Contact</h6>
        <h2>Let us handle your</h2>
        <h2>Project,professionally.</h2>
           </div>
       </div>
       <div className="row">
           <div className="col-md-2">
           </div>
           <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-6 pt-3">
            <label for="inputEmail4" class="form-label">Frist Name</label>
            <input className='form-control' {...register("example")} />
            </div>
            <div className="col-md-6 pt-3">
            <label for="inputPassword4" class="form-label">Last Name</label>
            <input className='form-control' {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="col-md-6 pt-3">
            <label for="inputEmail4" class="form-label">Email Address</label>
            <input className='form-control'  {...register("examples")} />
            </div>
            <div className="col-md-6 pt-3">
            <label for="inputEmail4" class="form-label">Phone Number</label>
            <input className='form-control'{...register("examplea")} />
            </div>
            <div className="col-md-12 pt-3">
           
            <label for="floatingTextarea2" className='mb-2'>Details</label>
                <textarea class="form-control pb-5" placeholder="Leave a Details here..." id="floatingTextarea2"  {...register("examplqe")}></textarea>
            </div>
        </div>
            <div className="col mt-4 mb-4">
            <input className='Submit' type="submit" />
            </div>     
            </form>
           </div>
           <div className="col-md-2">
           </div>
       </div>
    </div>
</div></Zoom>
       
    );
};

export default Contact;