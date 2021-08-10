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
            <h3>ΕΓΓΡΑΦΗ</h3>
            <Card className="shadow" style={{maxWidth: "600px", borderRadius: 15}}>
                <Card.Body >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Label >Προσωπικές Πληροφορίες</Form.Label>
                        <Form.Row style={{justifyContent: "space-between"}}>
                            
                            <Form.Group style={{width: "48%"}} md="6" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Όνομα"
                                />
                            </Form.Group>
                            
                            <Form.Group  md="6" style={{width: "48%"}} controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Επώνυμο"
                                />                              
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom03">
                                <Form.Control type="text" placeholder="Πατρώνυμο" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Label>Ασφάλεια λογαριασμού</Form.Label>

                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom04">
                               
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom05">
                                
                                <Form.Control type="password" placeholder="Κωδικός" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom06">
                                
                                <Form.Control type="password" placeholder="Επανάληψη κωδικού" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Label>Όροι χρήσης</Form.Label>

                        <Form.Group>
                            <Form.Check
                            required
                            label="Συμφωνώ με τους Ορους Starbucks® Rewards και τους Starbucks Card Terms."
                            feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <div className="row justify-content-end">
                            <Button type="submit">Εγγραφή</Button>
                        </div>
                    </Form>


                </Card.Body>
            </Card>
        </div>
    )
}

export default Register;