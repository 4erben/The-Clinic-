import React, { useState } from 'react'
import { Col, Container, Row, Table, Tooltip,Button } from 'react-bootstrap'
import {LineChart , Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, PieChart, Pie, Cell, AreaChart, Area} from "recharts";
import nameAvatar from "../assets/name-avatar.png";
import PieCustomLegend from '../Components/CustomLegends/PieCustomLegend';
import {data1, data2,patientData, ageWiseData,appointments,colors} from "../data/data.jsx";

export default function DashboardPage() {
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
    <Container fluid className='h-100 bg-grey fw-semibold '>
      <Container fluid className='px-3'>
        {/* Row of Top numbers */}
      <Row className='p-2 my-2 '>
        <Col lg="4" >
          <div className='bg-info border border-primary rounded-3 m-1 d-flex flex-column'>
            <p className='m-3'>354</p>
            <p className='text-end mx-2'>Total Patients</p>
            <p className='text-end mx-2 text-danger'>3</p>
          </div>
        </Col>
        <Col lg="4" >
          <div className='bg-info border border-primary rounded-3 m-1 flex-column'>
            <p className='m-3'>1</p>
            <p className='text-end mx-2'>Today's Appointments</p>
            <p className='text-end mx-2'>3</p>
          </div>
        </Col>
        <Col lg="4">
          <div  className='bg-info border border-primary rounded-3 m-1 flex-column'>
            <p className='m-3'>1</p>
            <p className='text-end mx-2'>Total Surgeries</p>
            <p className='text-end mx-2'>3</p>
          </div>
        </Col>
      </Row>
      {/* Row of Yearly Survey */}
      <Row className='p-5 my-3 bg-white rounded'>
        <Col lg="8" className='col-12 px-3  border-end'>
        <p >Yearly Survey</p>
        <ResponsiveContainer width="100%" height={250} >
        <LineChart data={data1}>
        <Legend iconType='circle' verticalAlign="top"  height={50}/>
        <XAxis dataKey="name" />
        <CartesianGrid vertical={false} />
        <YAxis />
        <Line type="monotone" dataKey="Consultation" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Catracts" stroke="#8884d8" />
        <Line type="monotone" dataKey="LASIK Surgery" stroke="#888400" />
        <Line type="monotone" dataKey="Glaucoma" stroke="#0084d8" />
        <Tooltip />
        </LineChart>
        </ResponsiveContainer>
        </Col>
        <Col lg="4" className='col-12'>
        <ResponsiveContainer width="100%" height={250}>
        <PieChart>
        <Pie data={data2} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} innerRadius={35} fill="#8884d8"  >
        {
          data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))
        }
        </Pie>
        <Legend iconType='rect' iconSize={20}  verticalAlign="bottom" layout='vertical' content={<PieCustomLegend  />}/>
        </PieChart>
        </ResponsiveContainer>
        </Col>
      </Row>
      {/* Row of New Patient Added */}
      <Row className='p-5 my-3 bg-white rounded'>
      <p >New Patient Added</p>
          <ResponsiveContainer  width="100%" height={250}>
          <AreaChart data={patientData} >
          <CartesianGrid strokeDasharray="0" horizontal={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" dot={{ stroke: '#8884d8', strokeWidth: 2 }}/>
        </AreaChart>
          </ResponsiveContainer>
      </Row>
      {/* Row of Patient Group */}
      <Row className='p-0 my-3  rounded'>
          <Col lg={6} className='ps-0 my-3'>
          <div className='p-2  me-auto bg-white rounded h-100'>
            <p>Patient Group</p>
          <div className='d-flex'>
            <span className='me-auto'>1</span>
            <span className='ms-auto'>1</span>
          </div>
          <hr/>
          <div className='d-flex'>
            <span className='me-auto'>1</span>
            <span className='ms-auto'>1</span>
          </div>
          <hr/>
          <div className='d-flex'>
            <span className='me-auto'>1</span>
            <span className='ms-auto'>1</span>
          </div>
          <hr/>
          <div className='d-flex'>
            <span className='me-auto'>1</span>
            <span className='ms-auto'>1</span>
          </div>
          <hr/>
          </div>
          </Col>
          <Col lg={6} className='pe-0 my-3'>
          <div className='p-2 ms-auto bg-white rounded'>
          <p>Age wise patient survey</p>
          <ResponsiveContainer width="100%" height={250}>
          <PieChart>
          <Pie data={ageWiseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}  fill="#8884d8" label  >
          {
            data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
          </Pie>
          <Legend iconType='rect' iconSize={20} verticalAlign='middle' align="right" layout='vertical' content={<PieCustomLegend  />}/>
          </PieChart>
          </ResponsiveContainer>
          </div>
          </Col>
      </Row>
      {/* Row of Recent Appointments */}
      <Row className='my-4 text-nowrap bg-white rounded py-3' >
                <Col xl={12} lg={12} className='col-3'>
                    <Row className='fw-semibold mb-4 flex-column flex-lg-row flex-xl-row'> 
                        <Col className='col-3 d-lg-flex d-xl-flex'>
                            <div className='mx-auto'>Sr no.</div>
                            <div className='mx-auto'>Name</div>
                        </Col>
                        <Col className='col-3 d-lg-flex d-xl-flex'> 
                            <div className='mx-auto'>Mobile</div>
                        </Col>
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
                            <Row className='fw-semibold mb-3 py-1 border-bottom rounded flex-column flex-lg-row flex-xl-row app-bar align-items-center'> 
                                <Col className='col-3 d-lg-flex d-xl-flex'>
                                    <div className='mx-auto'>{app.no}.</div>
                                    <div className='mx-auto d-flex align-items-center'>
                                        <img src={nameAvatar} className='name-avatar'/>
                                        <span>{app.name}</span>
                                    </div>
                                </Col>
                                <Col className='col-3 d-lg-flex d-xl-flex'> 
                                        <div className='mx-auto'>{app.mobile}</div>
                                </Col>
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
                        disabled={indexOfLastAppointment >= appointments.length}
                        >
                            Next
                        </Button>
                    </div>
                    </Row>
                </Col>
      </Row>
      {/* <Row className='p-5 my-3 bg-white rounded w-100 justify-content-center d-none d-md-flex'>
          <p>Recent Appointments List</p>  
          <Col className='col-12'>
          <Row>
            <Col className='col-2' >
              <h4>Sr no.</h4>
            </Col>
            <Col className='col-2' >
            <h4>Name</h4>
            </Col>
            <Col className='col-2' >
            <h4>Mobile</h4>
            </Col>
            <Col className='col-2' >
            <h4>Date</h4>
            </Col>
            <Col className='col-2' >
            <h4>Time</h4>
            </Col>
            <Col className='col-2'>
            <h4>Action</h4>
            </Col>
          </Row>
          {appointments.map((app)=>{
            return(
          <Row key={app.no} className='app-bar align-items-center text-nowrap py-2 rounded'>
            <Col className='col-2' >
              <div>{app.no}</div>
            </Col>
            <Col className='col-2'>
            <div>
              <img src={nameAvatar} className='name-avatar' alt='avatar'/>
             <span> {app.name}</span>
            </div>
            </Col>
            <Col className='col-2' >
            <div>{app.mobile}</div>
            </Col>
            <Col className='col-2' >
            <div>{app.date}</div>
            </Col>
            <Col className='col-2' >
            <div>{app.time}</div>
            </Col>
            <Col className='col-2'>
            <div>{app.action}</div>
            </Col>
          </Row>
            )
          })}

          </Col>
      </Row> */}
      </Container>
    </Container>
  )
}
