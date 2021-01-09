import React, {useState} from 'react'
import {Card, Col, Row} from 'react-bootstrap';
import './AdminPage.css'
import { FaUsers, FaChartLine,FaEnvelopeOpenText } from "react-icons/fa";
import EventLog from './EventLog/EventLog'
import SubmitModal from './SubmitModal/SubmitModal.js'

const AdminPage = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div id="adminpage" className="container" style={{marginTop: "64px", marginBottom: "64px"}}>
            <h5 style={{color: "#006F42", marginBottom: "32px", paddingBottom: "16px", borderBottom: "2px solid black"}}>Διαχείρηση</h5>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Header className="d-flex justify-content-around">ΕΠΙΣΚΕΠΤΕΣ ΣΗΜΕΡΑ<FaUsers size="1.5em"/></Card.Header>
                                <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <Card.Title>1843</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header className="d-flex justify-content-around">ΑΙΤΗΣΕΙΣ ΣΗΜΕΡΑ<FaEnvelopeOpenText size="1.2em"/></Card.Header>
                                <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <Card.Title>143</Card.Title>
                                </Card.Body>
                            </Card>   
                        </Col>
                    </Row>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "48px"}}>
                        <p className="mt-auto">ΟΙ ΑΙΤΗΣΕΙΣ ΚΛΕΙΝΟΥΝ ΣΕ 10 ΗΜΕΡΕΣ</p>
                        <button style={{width: "60%"}} onClick={()=>handleShow()}>ΕΞΑΓΩΓΗ ΑΠΟΤΕΛΕΣΜΑΤΩΝ</button>
                    </div>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header className="d-flex justify-content-around">ΡΟΗ <FaChartLine size="1.2em"/></Card.Header>
                        <Card.Body>
                            <EventLog/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <SubmitModal show={show} handleClose={handleClose}/>
        </div>

    )
}

export default AdminPage;