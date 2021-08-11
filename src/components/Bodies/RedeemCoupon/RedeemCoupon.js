import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './RedeemCoupon.css'
import RedeemModal from './RedeemModal/RedeemModal';
import cardstar from '../../../Assets/cardstar.png'

const RedeemCoupon = props => {
    const [show, setShow] = useState(false);

    const [serverRes, setServerRES] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if(form.checkValidity() === true){
            handleShow()
        }
        
    };
    

    return(
        <div className="container" style={{display: "flex", flexDirection:"column", maxWidth: "550px", alignItems: "center", marginTop: "64px", marginBottom: "240px"}}id="redeemForm">
            <h3>Εξαργύρωση κωδικού</h3>
            <img src={cardstar} alt="card img"></img>

            <p>Εάν έχετε λάβει κωδικό πληκτρολογήστε τον παρακάτω για να παραλάβετε το Voucher σας.</p>
            <Form style={{width: "100%"}} noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="12" style={{width: "100%"}} controlId="validationCustom03">
                    <Form.Control type="text" minLength="16" maxLength="16" placeholder="Κωδικός" required />
                </Form.Group>
                <label>server response (for prototype only)</label>
                <select name="server res" id="cars" onChange={(e)=>{setServerRES(!serverRes)}}>
                    <option value="true">success</option>
                    <option value="false">fail</option>
                
                </select>
                <Button type="submit">Εξαργύρωση</Button>
            </Form>
            <RedeemModal show={show} success={serverRes} handleClose={handleClose}/>
        </div>


    )
}

export default RedeemCoupon;