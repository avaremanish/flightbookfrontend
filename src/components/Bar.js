import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaPaperPlane } from 'react-icons/fa'
import {AiTwotoneHome} from 'react-icons/ai'
import {ImAirplane} from 'react-icons/im'
import{BsFillPersonFill} from 'react-icons/bs'


function Bar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
           
          <Navbar.Brand href="/home">  AIR Bookings  <FaPaperPlane/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home"> <AiTwotoneHome/> Home </Nav.Link>
            <Nav.Link href="/bookings"> <ImAirplane/> Flights</Nav.Link>
            <Nav.Link href="/register"> <BsFillPersonFill/> Register</Nav.Link>
          
          
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Bar