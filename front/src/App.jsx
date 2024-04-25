import { Col, Container, Row } from 'react-bootstrap'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Components/Sidebar'
import {Routes, Route} from "react-router-dom";
import DashboardPage from './Pages/Dashboard';
import Topbar from './Components/Topbar';




function App() {
  return (
    <Container fluid >
      <Row className='min-100h'>
      <Sidebar/>
      <Col lg={10} className='text-black d-flex flex-column p-0 h-100'>
        <Topbar/>
        <Routes>
        <Route  
        path='/'
        element={<DashboardPage/>}
        />
        </Routes>
      </Col>
      </Row>
    </Container>
  )
}

export default App
