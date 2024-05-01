import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { weekDays ,today ,dayOfMonth } from '../data/data'

export default function Schedule() {
  return (
    <Container fluid className='bg-grey'>
        <Container className='bg-white w-75 my-5 rounded rounded-4 fw-semibold'>
            <Row className='mt-5 p-4'>
                <span className='my-2'>Weekly Schedule</span>
                <span className='my-2'>March ,2023</span>
            </Row>
            <Row className='mt-2 ms-3 py-3 justify-content-start'>
                {weekDays.map((day)=>{
                    const dayName = day.split(" ")[0];
                    const dayNumber = day.split(" ")[2];
                    let isToday;
                    dayNumber == dayOfMonth?isToday = true: isToday = false;
                    return(
                    <Col  className="col-1 mx-2 my-2" key={dayNumber}>
                        <div className={`day-con d-flex flex-column rounded rounded-4 align-items-center px-4 text-black ${isToday?"bg-primary text-white":""}`}>
                            <span className='my-1 fw-normal'>{dayName}</span>
                            <span className='my-1'>{dayNumber}</span>
                        </div>
                    </Col>  
                    )
                })}
            </Row>
            <Row className='my-4 px-5' >
                    <Col className='col-12 h-100'>
                        <Alert variant='primary' className='warning-circle'>
                            <span className='fw-light'>11:00 - 12:00 AM</span>
                            <div className='w-100 d-flex'>
                                <span className='me-auto fw-normal'>Surgery</span>
                                <span className='ms-auto'>Patient Name: Poor Patient</span>
                            </div>
                        </Alert>
                        <Alert variant='warning' className='warning-circle'>
                            <span className='fw-light'>11:00 - 12:00 AM</span>
                            <div className='w-100 d-flex'>
                                <span className='me-auto fw-normal'>Surgery</span>
                                <span className='ms-auto'>Patient Name: Poor Patient</span>
                            </div>
                        </Alert>
                        <Alert variant='danger' className='warning-circle'>
                            <span className='fw-light'>11:00 - 12:00 AM</span>
                            <div className='w-100 d-flex'>
                                <span className='me-auto fw-normal'>Surgery</span>
                                <span className='ms-auto'>Patient Name: Poor Patient</span>
                            </div>
                        </Alert>
                        <Alert variant='primary' className='warning-circle'>
                            <span className='fw-light'>11:00 - 12:00 AM</span>
                            <div className='w-100 d-flex'>
                                <span className='me-auto fw-normal'>Surgery</span>
                                <span className='ms-auto'>Patient Name: Poor Patient</span>
                            </div>
                        </Alert>

                    </Col>
            </Row>
        </Container>
    </Container>
  )
}
