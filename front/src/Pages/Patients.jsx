import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { appointments } from '../data/data';
import nameAvatar from "../assets/name-avatar.png";

export default function Patients() {
        const appointmentsPerPage = 10;
        const [stateAppointment , setAppointments] = useState(appointments);
        const [currentPage, setCurrentPage] = useState(1);
        // Calculate the index of the first and last appointment to display on the current page
        const indexOfLastAppointment = currentPage * appointmentsPerPage;
        const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
        const currentAppointments = stateAppointment.slice(indexOfFirstAppointment, indexOfLastAppointment);

        // Function to handle pagination
        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
  return (
    <Container fluid className='bg-grey'>
        <Container fluid className='rounded mt-3 px-4 bg-white '>
            {/* Row of Show Todays */}
            <Row className='py-2 mt-2'>
                <div className='ms-auto d-flex justify-content-end align-items-center'>
                <span className='mx-2'>Show</span>
                <select 
                className='mx-2 border btn bg-info rounded rounded-5 text-capitalize fw-semibold'  
                
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
                
                />
                </Col>
                <Col className='col-3'>
                <Button 
                className='rounded rounded-circle border border-primary' 
                variant='info' 
                
                >
                    <i className="fa-solid fa-plus"></i>
                </Button>
                </Col>
            </Row>
            {/* Row of appointments */}
            <Row className='my-4 text-nowrap ' >
                <Col xl={12} lg={12} className='col-3'>
                    <Row className='fw-semibold mb-lg-4 py-lg-0 py-3 flex-column flex-lg-row flex-xl-row'> 
                        <Col className='col-3 d-lg-flex d-xl-flex'>
                            <div className='mx-auto'>Sr no.</div>
                            <div className='mx-auto'>Name</div>
                        </Col>
                        <Col className='col-3 d-lg-flex d-xl-flex'> 
                            <div className='mx-auto'>Mobile</div>
                            <div className='mx-auto'>Email</div></Col>
                        <Col className='col-6 d-lg-flex d-xl-flex'>
                            <div className='mx-auto'>Age</div>
                            <div className='mx-auto'>Treatment</div>
                            <div className='mx-auto'>Action</div>
                        </Col>
                    </Row>
                </Col>
                {/* All Patients Column */}
                <Col xl={12} lg={12} className='col-9 '>
                    <Row className='flex-nowrap flex-lg-wrap overflow-x-auto overflow-y-auto'>
                        {/* Single Patient Column */}
                        {currentAppointments.map((app)=>{
                            return(
                            <Col 
                            lg={12} xl={12} md={3} 
                            className='col-6 ' 
                            key={Math.random()*app.no}
                            >
                            <Row className='fw-semibold mb-3 py-1 border-bottom rounded flex-column flex-lg-row flex-xl-row app-bar align-items-lg-center'> 
                                <Col className='col-3 d-lg-flex d-xl-flex'>
                                    <div className='mx-lg-auto'>{app.no}.</div>
                                    <div className='mx-lg-auto d-flex align-items-center'>
                                        <img src={nameAvatar} className='name-avatar'/>
                                        <span>{app.name}</span>
                                    </div>
                                </Col>
                                <Col className='col-3 d-lg-flex d-xl-flex'> 
                                        <div className='mx-lg-auto'>{app.mobile}</div>
                                        <div className='mx-lg-auto'>{app.email}</div></Col>
                                <Col className='col-6 d-lg-flex d-xl-flex'>
                                        <div className='mx-lg-auto'>{app.age}</div>
                                        <div className='mx-lg-auto'>{app.treatment}</div>
                                        <div className='mx-lg-auto text-uppercase fw-bold d-flex justify-content-around'>
                                            <Button
                                            variant='outline-danger' 
                                            className='rounded-circle p-0'
                                            >
                                                <i className="fa-regular fa-trash-can p-1"></i>
                                            </Button>
                                            <Button 
                                            variant='outline-primary'
                                            className='rounded-circle p-0 mx-1'
                                            >
                                            <i className="fa-solid fa-pen p-1"></i>
                                            </Button>
                                        </div>
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
    </Container>
  )
}
