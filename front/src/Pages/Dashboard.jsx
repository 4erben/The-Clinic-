import React from 'react'
import { Col, Container, Row, Table, Tooltip } from 'react-bootstrap'
import {LineChart , Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, PieChart, Pie, Cell, AreaChart, Area} from "recharts";
import nameAvatar from "../assets/name-avatar.png";
import PieCustomLegend from '../Components/CustomLegends/PieCustomLegend';


export default function DashboardPage() {
  const data1 = [{
    name:"Jan",
    Consultation:21,
    Catracts:50,
    "LASIK Surgery": 41,
    "Glaucoma": 30
  },{
    name:"Feb",
    Consultation:25,
    Catracts:60,
    "LASIK Surgery": 51,
    "Glaucoma": 34
  },{
    name:"March",
    Consultation:31,
    Catracts:65,
    "LASIK Surgery": 31,
    "Glaucoma": 53
  },{
    name:"April",
    Consultation:35,
    Catracts:70,
    "LASIK Surgery": 41,
    "Glaucoma": 45
  },{
    name:"May",
    Consultation:41,
    Catracts:80,
    "LASIK Surgery": 45,
    "Glaucoma": 25
  }];
  const data2 = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 100 },
  ];
  const patientData = [
    { month: 'January', value: 100 },
    { month: 'February', value: 150 },
    { month: 'March', value: 200 },
    { month: 'April', value: 180 },
    { month: 'May', value: 220 },
    { month: 'June', value: 250 },
    { month: 'July', value: 280 },
    { month: 'August', value: 300 },
    { month: 'September', value: 270 },
    { month: 'October', value: 220 },
    { month: 'November', value: 180 },
    { month: 'December', value: 150 },
  ];
  const ageWiseData =[
    { name: 'A1', value: 100 },
    { name: 'A2', value: 150 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
  ];
  const appointments = [
    {
      no:1,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    },
    {
      no:2,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    },
    {
      no:3,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    },
    {
      no:4,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    },
    {
      no:5,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    },
    {
      no:6,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming"
    }
  ]
  const colors = ["#8884d8","#0084d8","#8800d8","#888400","#888422","#858400","#508400"];
  return (
    <Container fluid className='h-100 bg-grey fw-semibold '>
      <Container fluid className='px-3'>
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
      <Row className='p-5 my-3 bg-white rounded'>
        <Col lg="8" className='col-12 px-3  border-end'>
        <p >Yearly Survey</p>
        <ResponsiveContainer width="100%" height={250} >
        <LineChart data={data1}>
        <Legend iconType='circle' verticalAlign="top" height={36}/>
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
      <Row className='p-5 my-3 bg-white rounded w-100 justify-content-center d-none d-md-flex'>
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
          <Row>
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
      </Row>
      </Container>
    </Container>
  )
}
