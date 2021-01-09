import React,{useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import './Register.css'

const Register = props => {

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
        <div id="registerForm" className="container" style={{marginTop: "64px", marginBottom: "64px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3>Register</h3>
            <Card style={{maxWidth: "600px"}}>
                <Card.Body >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Label >Personal Information</Form.Label>
                        <Form.Row >
                            
                            <Form.Group style={{width: "50%"}} md="6" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                            </Form.Group>
                            
                            <Form.Group  md="6" style={{width: "50%"}} controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />                              
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom03">
                                <Form.Control type="text" placeholder="Father's Name" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Label>Account Security</Form.Label>

                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom04">
                               
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom05">
                                
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom06">
                                
                                <Form.Control type="password" placeholder="Repeat password" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Label>Terms Of Use</Form.Label>

                        <Form.Group>
                            <Form.Check
                            required
                            label="I agree to the Starbucks® Rewards Terms
                            and the Starbucks Card Terms."
                            feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <div className="row justify-content-end">
                            <Button type="submit">Register</Button>
                        </div>
                    </Form>


                </Card.Body>
            </Card>
        </div>
    )
}

export default Register;