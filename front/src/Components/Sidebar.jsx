import React from 'react'
import {Container , Col , Row, Navbar, Nav} from "react-bootstrap";
import doctorLogo from "../assets/doctor 1.png";
import avatar from "../assets/avatar.png";
import { Link } from 'react-router-dom';




export default function Sidebar() {
  return (
    <Col lg={2} className=''>
    <Navbar expand="lg">
        <Container className='d-flex flex-lg-column  flex-md-row' fluid>
            <Container className='d-flex flex-lg-column align-items-center justify-content-lg-center text-center'>
              <img className='logo' src={doctorLogo} alt='logo'/>
              <p className='fw-semibold fs-4 m-0'>The Clinic</p>
              <Navbar.Toggle aria-controls='basic-navbar nav' className='ms-auto'/>
              </Container>
            <hr className='border border-2 w-100'/>
            <Navbar.Collapse id='basic-navbar nav'  className='flex-lg-column  justify-content-center align-items-center'>

            <Container className='d-lg-flex  flex-column align-items-center d-none'>
              <img src={avatar} className='avatar' alt='Avatar Image'/>
              <p className='fw-bold'>Dr. Anushka</p>
              <hr className='border border-2 w-100'/>
            </Container>
            <Nav className="d-flex flex-lg-column flex-md-row justify-content-around align-items-lg-start ">
                <Col lg={3}><Link to="/" className='text-center p-3 my-2 nav-link fw-semibold text-capitalize w-100'><i className="fa-solid fa-table-columns me-2"></i><span>dashboard</span></Link></Col>
                <Col lg={3}><Link to="/appointments" className='text-center p-3 my-2 nav-link fw-semibold text-capitalize w-100'><i className="fa-regular fa-calendar-check me-2"></i><span>appointments</span></Link></Col>
                <Col lg={3}><Link to="/patients" className='text-center p-3 my-2 nav-link fw-semibold text-capitalize w-100'> <i className="fa-solid fa-hospital-user me-2"></i><span>patients</span></Link></Col>
                <Col lg={3}><Link to="/schedule" className='text-center p-3 my-2 nav-link fw-semibold text-capitalize w-100'><i className="fa-solid fa-clipboard-list me-2"></i><span>schedule</span></Link></Col>
            </Nav>
            <hr className='border border-2 w-100 d-lg-none'/>

            </Navbar.Collapse>

        </Container>
    </Navbar>
    </Col>
  )
}
