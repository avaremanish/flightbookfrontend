import React from 'react';
import './register.css';
import {useForm} from 'react-hook-form'


const Register = () => {
     //event

     const { register, handleSubmit,  formState: { errors } } = useForm();

     //submit

     const onSubmit = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>  
    <div className='main' >
           
    {errors.tripType && <span> {errors.tripType.message}</span>}
    <div class="h-100 bg-dark">
  <div class="container py-5  ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="center">
            <div class="col-xl-6 d-none d-xl-block">
             
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">New Registration</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                 
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" {...register("First Name", { required:{ 
        value:true,
        message:" First Name is required"   
     }})}/>
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" {...register("Last Name", { required:{ 
        value:true,
        message:" Last Name is required"   
     }})}/>
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

             
                <div class="form-outline mb-4">
  {errors.tripType && <span> {errors.tripType.message}</span>}
    <input type="email" id="form2Example1" class="form-control"  {...register("Email", { required:{ 
        value:true,
        message:"Email type is required"   
     }})} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"  {...register("Password", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
    <label class="form-label" for="form2Example2">Set a Password</label>
  </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4" >
                    <input class="form-check-input" type="radio" name="Gender" id="femaleGender"
                      value="Female" {...register("Gender", { required:{ 
                        value:true,
                        message:" First Name is required"   
                     }})}/>
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="Gender" id="maleGender"
                      value="Male" {...register("Gender", { required:{ 
                        value:true,
                        message:" First Name is required"   
                     }})} />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="Gender" id="otherGender"
                      value="Other" {...register("Gender", { required:{ 
                        value:true,
                        message:" First Name is required"   
                     }})}/>
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div class="d-flex justify-content-end pt-3">
                  <a  type="submit" href="/flights"  class="btn btn-warning btn-lg ms-2" >Register</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </form>
  )
}

export default Register