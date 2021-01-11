import React,{useState} from 'react';
import './Form.css'
import VoucherFormModal from './VoucherFormModal/VoucherFormModal'
import {Button, Form} from 'react-bootstrap'

const ApplyForm = props => {

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [serverRes, setServerRES] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        event.preventDefault();
        event.stopPropagation();
        
        
        setValidated(true);
        if (form.checkValidity() === true) {
            handleShow()
        }
    };


    

    return(
        <div className="card shadow-lg" style={{width: "100%"}}>
            <div className="card-header" style={{backgroundColor: "white", fontWeight: 500}}>
                Συμπληρώστε την παρακάτω φόρμα για να αποκτήσετε το <p style={{color: "#006F42", display: "inline"}}>VOUCHER</p> σας.
            </div>
            <div className="card-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        

                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom03">
                                <Form.Label>ΑΜΚΑ</Form.Label>
                                <Form.Control type="text" placeholder="ΑΜΚΑ" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom04">
                                <Form.Label>ΑΦΜ</Form.Label>
                                <Form.Control type="text" placeholder="ΑΦΜ" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom05">
                                <Form.Label>ΑΔΤ</Form.Label>
                                <Form.Control type="text" placeholder="ΑΔΤ" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom06">
                                <Form.Label>ΚΩΔΙΚΟΣ ΚΑΡΤΑΣ ΑΝΕΡΓΙΑΣ</Form.Label>
                                <Form.Control type="text" minLength="16" maxLength="16" placeholder="ΚΩΔΙΚΟΣ ΚΑΡΤΑΣ ΑΝΕΡΓΙΑΣ" required />
                            </Form.Group>
                        </Form.Row>
                        <label>server response (for prototype only)</label>
                        <select name="server res" id="cars" onChange={(e)=>{setServerRES(!serverRes)}}>
                            <option value="true">success</option>
                            <option value="false">fail</option>
                        
                        </select>
                        <Button id="formButton" type="submit">ΥΠΟΒΟΛΗ</Button>
                        
                    </Form>

            </div>
            <VoucherFormModal show={show} success={serverRes} handleClose={handleClose}/>
        </div>
        
    )
}

export default ApplyForm;