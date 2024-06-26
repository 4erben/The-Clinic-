import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import nameAvatar from "../assets/name-avatar.png";
import { appointments } from '../data/data';

export default function Appointments() {
    const appointmentsPerPage = 10;
    const [stateAppointment , setAppointments] = useState(appointments);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFormOn , setForumOn] = useState(false);
    // Calculate the index of the first and last appointment to display on the current page
    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = stateAppointment.slice(indexOfFirstAppointment, indexOfLastAppointment);

    
    // Function to handle pagination
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    //function to search patients by name
    const handleSearchPatient =(e)=>{
        if(!e.target.value) return setAppointments(appointments);
        setAppointments(appointments.filter((app)=> app.no == e.target.value))
    }
    const handleAddPatient = (e)=>{
        setForumOn(!isFormOn);
    }
    const handleTimeApp = (e)=>{
        const currentDay = new Date().setHours(0,0,0,0);
        setAppointments(appointments.filter((app)=>{
            const appDay = new Date(app.date).setHours(0,0,0,0);
            if(e.target.value === "all"){
                return appointments
            }
            else if( e.target.value === "upcoming"){
                return appDay > currentDay
            }else if (e.target.value === "previous"){
                return appDay < currentDay
            }else{
                return appDay === currentDay;
            }
            
        }))
    }
  return (
    <Container fluid className='bg-grey'>
        <Container fluid className='rounded mt-3 px-4 bg-white '>
            {/* Row of Show Todays */}
            <Row className='py-2 mt-2'>
                <div className='ms-auto d-flex justify-content-end align-items-center'>
                <span className='mx-2'>Show</span>
                <select 
                className='mx-2 border btn bg-info rounded rounded-5 text-capitalize fw-semibold'  
                onChange={handleTimeApp}
                defaultValue="all"
                >
                    <option value="all">All</option>
                    <option value="today">Today's</option>
                    <option value="previous">Previous</option>
                    <option value="upcoming">upcoming</option>
                </select>
                <span className='mx-2'>Appointments</span>
                </div>
            </Row>
            {/* Row Of Search input */}
            <Row className='rounded py-2 align-items-center px-2 bg-grey'>
                <Col className='col-6'>
                <input 
                className='w-100 rounded rounded-3 border border-3 px-3 py-1'
                placeholder='Search Patients By Sr no.'
                onChange={handleSearchPatient}
                />
                </Col>
                <Col className='col-3'>
                <Button className='rounded rounded-circle border border-primary' variant='info' onClick={handleAddPatient}><i className="fa-solid fa-plus"></i></Button>
                </Col>
            </Row>
            {/* Row of appointments */}
            <Row className='my-4 text-nowrap ' >
                <Col xl={12} lg={12} className='col-3'>
                    <Row className='fw-semibold mb-4 flex-column flex-lg-row flex-xl-row'> 
                        <Col className='col-3 d-lg-flex d-xl-flex'>
                            <div className='mx-auto'>Sr no.</div>
                            <div className='mx-auto'>Name</div>
                        </Col>
                        <Col className='col-3 d-lg-flex d-xl-flex'> 
                            <div className='mx-auto'>Mobile</div>
                            <div className='mx-auto'>Email</div></Col>
                        <Col className='col-6 d-lg-flex d-xl-flex'>
                            <div className='mx-auto'>Date</div>
                            <div className='mx-auto'>Time</div>
                            <div className='mx-auto'>Status</div>
                        </Col>
                    </Row>
                </Col>
                {/* All Patients Column */}
                <Col xl={12} lg={12} className='col-9 '>
                    <Row className='flex-nowrap flex-lg-wrap overflow-x-auto overflow-y-auto'>
                        {/* Single Patient Column */}
                        {currentAppointments.map((app)=>{
                            return(
                            <Col lg={12} xl={12} md={3} className='col-6 ' key={Math.random()*app.no}>
                            <Row className='fw-semibold mb-3 py-1 border-bottom rounded flex-column flex-lg-row flex-xl-row app-bar align-items-lg-center'> 
                                <Col className='col-3 d-lg-flex d-xl-flex'>
                                    <div className='mx-auto'>{app.no}.</div>
                                    <div className='mx-auto d-flex align-items-center'>
                                        <img src={nameAvatar} className='name-avatar'/>
                                        <span>{app.name}</span>
                                    </div>
                                </Col>
                                <Col className='col-3 d-lg-flex d-xl-flex'> 
                                        <div className='mx-auto'>{app.mobile}</div>
                                        <div className='mx-auto'>{app.email}</div></Col>
                                <Col className='col-6 d-lg-flex d-xl-flex'>
                                        <div className='mx-auto'>{app.date}</div>
                                        <div className='mx-auto'>{app.time}</div>
                                        <div className='mx-auto text-uppercase fw-bold'>{app.action}</div>
                                </Col>
                            </Row>
                        </Col>
                            )
                        })
                        
                        }
                    </Row>
                    {/* Pagination buttons */}
                    <Row className='my-4'>         
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button 
                        variant='info'
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <span className='fw-bold mx-4'>Page: {currentPage}</span>
                        <Button
                        variant='info' 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={indexOfLastAppointment >= stateAppointment.length}
                        >
                            Next
                        </Button>
                    </div>
                    </Row>
                </Col>
            </Row>
        </Container>
        {isFormOn &&
        <Container fluid className='forum-overlay rounded'>
            <Button
            variant='outline-danger'
            className='position-fixed top-0 end-0 mt-4 me-4 btn text-white'
            onClick={handleAddPatient}
            ><i className="fa-solid fa-circle-xmark fa-2x"></i>
            </Button> 
            <Row>
                 
            </Row>
        </Container>
        }
    </Container>

  )
}
