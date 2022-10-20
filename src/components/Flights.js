import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Data from '../data.json'
import {ImAirplane} from 'react-icons/im'


const Flights = () => {
   
        document.getElementsByName("result").innerHTML=localStorage.getItem("textvalue")
return (
    <>
    <span id='result'> </span>

    <Table striped bordered hover variant="info">
      <thead>
        <tr>

          <th> <ImAirplane/> Flights #</th>
          <th >FROM</th>
          <th>TO</th>
          <th>CLASS</th>
          <th>FOOD</th>
          <th>PRICE ₹</th>
          <th>BOOKING</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Data[0].flight }</td>
          <td>Chennai</td>
          <td>Mumbai</td>
          <td>Business</td>
          <td>VEG</td>
          <td> ₹ 60000</td>
          <td> <Button variant="success" href="checkout">BOOK NOW!</Button></td>
        </tr>

        <tr>
          <td>{Data[2].flight }</td>
          <td>Chennai</td>
          <td>Mumbai</td>
          <td>Business</td>
          <td>VEG</td>
          <td> ₹ 80000</td>
          <td> <Button variant="success"  href="checkout">BOOK NOW!</Button></td>
        </tr>

        <tr>
          <td>{Data[6].flight }</td>
          <td>Chennai</td>
          <td>Mumbai</td>
          <td>Business</td>
          <td>VEG</td>
          <td> ₹ 60000</td>
          <td> <Button variant="success"  href="/checkout">BOOK NOW!</Button></td>
        </tr>

        <tr>
          <td>{Data[8].flight }</td>
          <td>Chennai</td>
          <td>Mumbai</td>
          <td>Business</td>
          <td>VEG</td>
          <td> ₹ 90000</td>
          <td> <Button variant="success"  href="checkout">BOOK NOW!</Button></td>
        </tr>


 
      </tbody>
    </Table>

    </>


  )
}

export default Flights