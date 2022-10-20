
import'./home.css';
import {FaPaperPlane } from 'react-icons/fa'
import React from 'react'
import {useForm} from 'react-hook-form'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vu5d858', 'template_grc6qlb', form.current, 'mtZAmg98gUaZzgRh_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

     //event

     const { register, handleSubmit, formState: { errors } } = useForm();

     //submit

     const onSubmit = data => alert(JSON.stringify(data));


  return (
    <><p> WELCOME TO AIR BOOKINGS   <FaPaperPlane/></p>
    <div className='homemain' onSubmit={handleSubmit(onSubmit)}>
      <form ref={form} onSubmit={sendEmail}>
 
  <div class="form-outline mb-4">
  {errors.tripType && <span> {errors.tripType.message}</span>}
    <input type="email" id="form2Example1" className ="form-control"  name="user_email" {...register("Email", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

 
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"  {...register("Password", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
     
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
   
      <a href="/register">Forgot password?</a>
    </div>
  </div>

  
  <button className="btn btn-primary btn-block mb-4" type="submit" href="/bookings"  value="send" >Sign in</button>


  <div class="text-center">
    <p>Not a member? <a href="/register">Register</a></p>
    
  </div>
</form>

    </div>
</>
  )
}

export default Home