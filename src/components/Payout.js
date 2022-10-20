import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './payout.css'
import {FaPaperPlane } from 'react-icons/fa'
import {IoHappySharp} from 'react-icons/io5'


const Payout = () => {
  return (
    <div>
        

        <div className='done'> <BsFillPatchCheckFill/></div>
        <h1> Booking Confirmed </h1>
        <h4> Ticket has been sent to your Email address</h4>
        <h3> Happy Journey <IoHappySharp/></h3>

        <div className='logo ' variant="dark"> AIR BOOKINGS <FaPaperPlane/></div>
        
        
        
        </div>

  )
}

export default Payout