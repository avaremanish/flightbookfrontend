
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React from 'react'
import './booking.css'
import {FaPlaneDeparture,FaPlaneArrival,FaChild} from 'react-icons/fa'
import{BsCalendarDate} from 'react-icons/bs'
import {IoManSharp} from 'react-icons/io5'
import {MdOutlineAirlineSeatReclineNormal} from 'react-icons/md'
import {TbCurrencyRupee} from 'react-icons/tb'
import {MdFastfood} from 'react-icons/md'
import {useForm} from 'react-hook-form'



export const Bookings = () => {

  function passvalue(){
    let from = document.getElementsByName("from").value;
    localStorage.setItem("textvalue", from);
    return false;
}
          //event

          const { register, handleSubmit,  formState: { errors } } = useForm();

          //submit

          const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className='main'>
       
            
            <form className='text-center' onSubmit={handleSubmit(onSubmit)} action="flight">
            
            <h1>
        <Badge bg="primary" >Flight Bookings</Badge>
            </h1>
    
      <div className='radio'>
      {errors.tripType && <span> {errors.tripType.message}</span>}
      <input type="radio" id='Roundtrip' name='trip' value="roundtrip"  {...register("tripType", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
      <label for="round"> ROUND-TRIP</label>
    
      <input type="radio" id='oneway' name='trip' value="oneway"{...register("tripType", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
      <label for="oneway"> ONE-WAY</label>

      <input type="radio" id='multi' name='trip' value="multi" {...register("tripType", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
      <label for="multi"> MULTI-TRIP</label>  
         
      </div>

      <div className='from'>
      <span class="badge text-bg-primary">FLYING  FROM  <FaPlaneDeparture/></span>
      </div>

      <div>
      <select {...register("From", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>
        <option>--Select Airport--</option>
        <option value="Chennai">Chennai</option>
      <option value="Kolkata"> Kolkata</option>
      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Amritsar"> Amritsar</option>
      <option value="Guwahati">Guwahati</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Banglore"> Banglore</option>
      <option value=">Hyderabad">Hyderabad</option>
      </select>
      </div>

      <div className='to'>
      <span class="badge text-bg-primary">FLYING  TO  <FaPlaneArrival/></span>
      </div>

      <div>
      <select {...register("To", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>
        <option>--Select Airport--</option>
        <option value="Chennai">Chennai</option>
      <option value="Kolkata"> Kolkata</option>
      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Amritsar"> Amritsar</option>
      <option value="Guwahati">Guwahati</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Banglore"> Banglore</option>
      <option value=">Hyderabad">Hyderabad</option>
      </select>
      </div>


                                      {/* DATES */}


      <div className='dep' > 
      <label for="dep"> DEPARTURE DATE   <BsCalendarDate/></label>
      <br/> 
        <input type="date"  {...register("Departure", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
        </div>
        <div className='return' >
        <label for="return"> RETURN DATE   <BsCalendarDate/> </label>
      <br/> 
        <input type="date" {...register("Return", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})} />
      </div>

                                                
            
        <div className='types'>
            <label for="adults"> ADUTLS <IoManSharp/> </label>
                <select id="adults" {...register("Adults", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>
                        <option value="1"> 1 </option> 
                        <option value="2"> 2 </option> 
                        <option value="3"> 3 </option> 
                        <option value="4"> 4 </option> 
                        <option value="5"> 5 </option> 
                </select>
                <label for="children"> CHILDREN <FaChild/> </label>
                <select id="children" {...register("Children", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>

                        <option value="0"> 0 </option> 
                        <option value="1"> 1 </option> 
                        <option value="2"> 2 </option> 
                        <option value="3"> 3 </option> 
                </select>
        </div>

        <div className='class'>
            <label for="class"> CLASS  <MdOutlineAirlineSeatReclineNormal/></label>
                <select id="class" {...register("Class", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>

                        <option value="Business"> BUSINESS</option> 
                        <option value="Economy"> ECONOMY </option> 
                       
                     
                </select>
                <label for="price"> PRICE <TbCurrencyRupee/> </label>
                <select id="price" {...register("Price Range", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}>
                        <option value="2000-4000"> 2000-40000 </option> 
                        <option value="4000-8000"> 4000-8000</option> 
                        <option value="8000 & above"> 8000 & above </option> 
                </select>

        </div>

            <h5> <b>  FOOD <MdFastfood/></b></h5>
        <div className='food' >
      <input type="radio" id='VEG' name='FOOD' value="VEG" {...register("Food Type", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
      <label for="VEG" > VEG</label>
    
      <input type="radio" id='NON-VEG' name='FOOD' value="NON-VEG"  {...register("Food Type", { required:{ 
        value:true,
        message:"Trip type is required"   
     }})}/>
      <label for="NON-VEG"> NON-VEG</label>   

      </div>

        <div className='button'>
        
      <Button variant="primary" type="submit" href="flights"  value="click" onClick="passvalue()" >FIND FLIGHTS</Button>{' '}

      </div>
            </form>


    </div>
  )
}
