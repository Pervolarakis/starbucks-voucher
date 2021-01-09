import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import './LoginModal.css'
import {NavLink} from 'react-router-dom';

const LoginModal = props => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Modal id="loginModal" show={props.show} onHide={props.handleClose}>
            <Modal.Header style={{border: "none"}} closeButton>
            <Modal.Title>Σύνδεση</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{border: "none"}}>
                <p>Δεν έχετε λογαριασμό? <NavLink style={{color: "#008248"}} to="/register">Εγγραφή!</NavLink></p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                        <Form.Group controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{backgroundColor: "transparent", border: "2px solid white", color: "white"}}
                            required
                            type="email"
                            placeholder="Email"
                        />
                        
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                        <Form.Label>Κωδικός</Form.Label>
                        <Form.Control
                            style={{backgroundColor: "transparent", border: "2px solid white", color: "white"}}
                            required
                            type="password"
                            placeholder="Κωδικός"
                        />
                        
                        </Form.Group>
                        <p style={{color: "#008248"}}>Ξεχάσατε τον κωδικό σας?</p>
                        <div className="row justify-content-end">
                            <Button type="submit" style={{backgroundColor: "#008248", outline: "none"}}>Σύνδεση</Button>
                        </div>
                </Form>
            </Modal.Body>
            
        </Modal>


    )
}

export default LoginModal;