import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AlarmIcon from '../Components/alarmIcon.jsx';

export default function Topbar() {
  return (
    <Container className='w-100 mb-2 p-3'>
        <Row className=''>
        <Col className='me-auto fw-semibold col-auto'>
        <span className='mx-2'>Doctor</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span className='mx-2'>Dashboard</span>
        </Col>
        <Col className='ms-auto col-auto'> 
        <AlarmIcon number={3}/>
        </Col>
        </Row>
    </Container>
  )
}
